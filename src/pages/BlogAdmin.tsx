import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Trash2, Edit3, Plus, Eye, LogOut, ArrowLeft } from 'lucide-react';
import { callAdmin } from '@/lib/postsApi';
import { renderMarkdown } from '@/lib/markdown';

interface AdminPost {
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
}

const SESSION_KEY = 'nm-admin-pw';
const CATEGORIES = ['AI', 'SEO', 'Growth', 'Web Design', 'Branding', 'Performance Marketing', 'AI & Automation', 'Growth Strategy', 'Influencer Marketing'];

const slugify = (s: string) =>
  s.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const emptyDraft = (): AdminPost => ({
  id: '', title: '', slug: '', category: 'AI', author: 'Night Media Team',
  body: '', featured_image_url: '', alt_text: '', meta_description: '',
  read_time: '5 min read', excerpt: '', published: true,
  published_at: new Date().toISOString(),
});

const BlogAdmin: React.FC = () => {
  const [password, setPassword] = useState<string>(() => sessionStorage.getItem(SESSION_KEY) || '');
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [draft, setDraft] = useState<AdminPost | null>(null);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState<string | null>(null);
  const [preview, setPreview] = useState(false);

  const loadPosts = async (pw: string) => {
    const res = await callAdmin(pw, 'list');
    setPosts(res.posts || []);
  };

  // Auto-login if password is in session
  useEffect(() => {
    if (!password) return;
    callAdmin(password, 'verify')
      .then(async () => {
        setAuthed(true);
        await loadPosts(password);
      })
      .catch(() => {
        sessionStorage.removeItem(SESSION_KEY);
        setPassword('');
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    try {
      await callAdmin(password, 'verify');
      sessionStorage.setItem(SESSION_KEY, password);
      setAuthed(true);
      await loadPosts(password);
    } catch (err) {
      setAuthError('Incorrect password.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setPassword('');
    setAuthed(false);
    setPosts([]);
    setDraft(null);
  };

  const startNew = () => { setDraft(emptyDraft()); setPreview(false); };
  const startEdit = (p: AdminPost) => { setDraft({ ...p }); setPreview(false); };

  const handleSave = async () => {
    if (!draft) return;
    setSaving(true);
    setSavedMsg(null);
    try {
      const action = draft.id ? 'update' : 'create';
      const payload = { ...draft, slug: draft.slug || slugify(draft.title) };
      const res = await callAdmin(password, action, payload);
      setSavedMsg(action === 'create' ? 'Post created.' : 'Post updated.');
      await loadPosts(password);
      if (res.post) setDraft(res.post);
    } catch (err) {
      setSavedMsg(`Save failed: ${(err as Error).message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this post permanently?')) return;
    try {
      await callAdmin(password, 'delete', { id });
      await loadPosts(password);
      if (draft?.id === id) setDraft(null);
    } catch (err) {
      alert(`Delete failed: ${(err as Error).message}`);
    }
  };

  if (!authed) {
    return (
      <>
        <Helmet>
          <title>Admin · Night Media Blog</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <section className="pt-32 pb-20 min-h-screen bg-background flex items-center justify-center">
          <form
            onSubmit={handleLogin}
            className="glass-card rounded-2xl p-8 w-full max-w-sm space-y-4 relative z-20"
          >
            <h1 className="text-2xl font-bold text-foreground">Blog admin</h1>
            <p className="text-sm text-muted-foreground">
              Enter the admin password to manage posts.
            </p>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              className="w-full bg-secondary/40 border border-border rounded-lg px-4 py-3 text-foreground focus:border-primary focus:outline-none"
              autoFocus
            />
            {authError && <p className="text-sm text-destructive">{authError}</p>}
            <button
              type="submit"
              className="w-full btn-primary-glow px-6 py-3 rounded-lg text-primary-foreground font-semibold"
            >
              Sign in
            </button>
          </form>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin · Night Media Blog</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <section className="pt-24 pb-20 min-h-screen bg-background relative">
        <div className="noise-overlay pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Blog admin</h1>
              <p className="text-sm text-muted-foreground">
                {posts.length} post{posts.length === 1 ? '' : 's'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={startNew} className="btn-primary-glow inline-flex items-center gap-2 px-4 py-2 rounded-lg text-primary-foreground text-sm font-medium">
                <Plus className="w-4 h-4" /> New post
              </button>
              <button onClick={handleLogout} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground">
                <LogOut className="w-4 h-4" /> Sign out
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
            {/* Post list */}
            <div className="glass-card rounded-2xl p-4 max-h-[80vh] overflow-y-auto">
              {posts.length === 0 ? (
                <p className="text-sm text-muted-foreground p-4">No posts yet.</p>
              ) : posts.map((p) => (
                <div
                  key={p.id}
                  className={`p-3 rounded-lg mb-2 border ${draft?.id === p.id ? 'border-primary bg-primary/5' : 'border-transparent hover:border-border'}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <button onClick={() => startEdit(p)} className="text-left flex-1">
                      <div className="text-sm font-medium text-foreground line-clamp-2">{p.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{p.category} · /{p.slug}</div>
                    </button>
                    <div className="flex flex-col gap-1">
                      <button onClick={() => startEdit(p)} className="p-1 text-muted-foreground hover:text-primary" title="Edit">
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => handleDelete(p.id)} className="p-1 text-muted-foreground hover:text-destructive" title="Delete">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Editor */}
            <div className="glass-card rounded-2xl p-6">
              {!draft ? (
                <div className="text-center text-muted-foreground py-20">
                  Select a post to edit or create a new one.
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setDraft(null)}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <ArrowLeft className="w-4 h-4" /> Close
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setPreview((v) => !v)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground"
                      >
                        <Eye className="w-4 h-4" /> {preview ? 'Edit' : 'Preview'}
                      </button>
                      <button
                        onClick={handleSave}
                        disabled={saving}
                        className="btn-primary-glow px-4 py-1.5 rounded-lg text-primary-foreground text-sm font-medium disabled:opacity-60"
                      >
                        {saving ? 'Saving…' : draft.id ? 'Update post' : 'Create post'}
                      </button>
                    </div>
                  </div>

                  {savedMsg && (
                    <div className="text-sm text-primary">{savedMsg}</div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Field label="Title">
                      <input
                        value={draft.title}
                        onChange={(e) => {
                          const v = e.target.value;
                          setDraft({
                            ...draft,
                            title: v,
                            slug: draft.id ? draft.slug : slugify(v),
                          });
                        }}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Slug">
                      <input
                        value={draft.slug}
                        onChange={(e) => setDraft({ ...draft, slug: slugify(e.target.value) })}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Category">
                      <select
                        value={draft.category}
                        onChange={(e) => setDraft({ ...draft, category: e.target.value })}
                        className={inputCls}
                      >
                        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                      </select>
                    </Field>
                    <Field label="Author">
                      <input
                        value={draft.author}
                        onChange={(e) => setDraft({ ...draft, author: e.target.value })}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Featured image URL">
                      <input
                        value={draft.featured_image_url || ''}
                        onChange={(e) => setDraft({ ...draft, featured_image_url: e.target.value })}
                        placeholder="https://…"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Image alt text">
                      <input
                        value={draft.alt_text || ''}
                        onChange={(e) => setDraft({ ...draft, alt_text: e.target.value })}
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Read time">
                      <input
                        value={draft.read_time || ''}
                        onChange={(e) => setDraft({ ...draft, read_time: e.target.value })}
                        placeholder="6 min read"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Published">
                      <select
                        value={draft.published ? 'true' : 'false'}
                        onChange={(e) => setDraft({ ...draft, published: e.target.value === 'true' })}
                        className={inputCls}
                      >
                        <option value="true">Published</option>
                        <option value="false">Draft</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Meta description (SEO)">
                    <textarea
                      value={draft.meta_description || ''}
                      onChange={(e) => setDraft({ ...draft, meta_description: e.target.value })}
                      rows={2}
                      maxLength={170}
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Excerpt (card preview)">
                    <textarea
                      value={draft.excerpt || ''}
                      onChange={(e) => setDraft({ ...draft, excerpt: e.target.value })}
                      rows={2}
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Body (Markdown)">
                    {preview ? (
                      <div
                        className="prose prose-invert prose-lg max-w-none blog-prose bg-secondary/20 border border-border rounded-lg p-4 min-h-[400px]"
                        dangerouslySetInnerHTML={{ __html: renderMarkdown(draft.body) }}
                      />
                    ) : (
                      <textarea
                        value={draft.body}
                        onChange={(e) => setDraft({ ...draft, body: e.target.value })}
                        rows={20}
                        className={`${inputCls} font-mono text-sm`}
                        placeholder="## Heading&#10;&#10;Body paragraph…"
                      />
                    )}
                  </Field>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const inputCls = 'w-full bg-secondary/40 border border-border rounded-lg px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none text-sm';

const Field: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <label className="block">
    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-1.5 block">{label}</span>
    {children}
  </label>
);

export default BlogAdmin;
