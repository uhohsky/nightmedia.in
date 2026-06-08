// Admin blog CRUD — gated by shared password (ADMIN_BLOG_PASSWORD).
// Frontend sends { password, action, payload } and we use the service role
// to perform create/update/delete on the public.posts table.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

interface PostPayload {
  id?: string;
  title?: string;
  slug?: string;
  category?: string;
  author?: string;
  body?: string;
  featured_image_url?: string | null;
  alt_text?: string | null;
  meta_description?: string | null;
  read_time?: string | null;
  excerpt?: string | null;
  published?: boolean;
  published_at?: string | null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  let parsed: { password?: string; action?: string; payload?: PostPayload };
  try {
    parsed = await req.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const expected = Deno.env.get("ADMIN_BLOG_PASSWORD");
  if (!expected) return json({ error: "server_not_configured" }, 500);
  if (!parsed.password || parsed.password !== expected) {
    return json({ error: "unauthorized" }, 401);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { action, payload = {} } = parsed;

  // Whitelist columns we accept
  const allow = (p: PostPayload) => ({
    title: p.title,
    slug: p.slug,
    category: p.category,
    author: p.author,
    body: p.body,
    featured_image_url: p.featured_image_url ?? null,
    alt_text: p.alt_text ?? null,
    meta_description: p.meta_description ?? null,
    read_time: p.read_time ?? null,
    excerpt: p.excerpt ?? null,
    published: p.published ?? true,
    published_at: p.published_at || new Date().toISOString(),
  });

  try {
    if (action === "list") {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return json({ posts: data });
    }
    if (action === "create") {
      if (!payload.title || !payload.slug || !payload.category) {
        return json({ error: "missing_fields" }, 400);
      }
      const { data, error } = await supabase
        .from("posts")
        .insert(allow(payload))
        .select()
        .single();
      if (error) throw error;
      return json({ post: data });
    }
    if (action === "update") {
      if (!payload.id) return json({ error: "missing_id" }, 400);
      const patch = allow(payload);
      const { data, error } = await supabase
        .from("posts")
        .update(patch)
        .eq("id", payload.id)
        .select()
        .single();
      if (error) throw error;
      return json({ post: data });
    }
    if (action === "delete") {
      if (!payload.id) return json({ error: "missing_id" }, 400);
      const { error } = await supabase.from("posts").delete().eq("id", payload.id);
      if (error) throw error;
      return json({ ok: true });
    }
    if (action === "verify") {
      // Just confirms password is correct
      return json({ ok: true });
    }
    return json({ error: "unknown_action" }, 400);
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});
