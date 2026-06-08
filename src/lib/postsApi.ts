import { supabase } from "@/integrations/supabase/client";

export interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  body: string;
  featured_image_url: string | null;
  alt_text: string | null;
  meta_description: string | null;
  read_time: string | null;
  excerpt: string | null;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export async function fetchPublishedPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });
  if (error) throw error;
  return (data as Post[]) ?? [];
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw error;
  return (data as Post) ?? null;
}

export async function fetchRelatedPosts(
  category: string,
  excludeSlug: string,
  limit = 3,
): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("published", true)
    .eq("category", category)
    .neq("slug", excludeSlug)
    .order("published_at", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data as Post[]) ?? [];
}

export async function subscribeEmail(email: string, source: string): Promise<void> {
  // Upsert-style: ignore unique-violation so repeat subscribers don't error
  const { error } = await supabase
    .from("subscribers")
    .insert({ email, source });
  if (error && !`${error.message}`.toLowerCase().includes("duplicate")) {
    throw error;
  }
}

export async function callAdmin(
  password: string,
  action: "verify" | "list" | "create" | "update" | "delete",
  payload?: Record<string, unknown>,
): Promise<any> {
  const { data, error } = await supabase.functions.invoke("admin-blog", {
    body: { password, action, payload },
  });
  if (error) throw error;
  if (data?.error) throw new Error(data.error);
  return data;
}
