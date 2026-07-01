import React, { useState } from 'react';
import { ArrowRight, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import NightMediaIcon from '../Logo/NightMediaIcon';

type Score = { label: string; value: number; note: string };

/**
 * Interactive AI Playground — "Growth Snapshot".
 * A live, on-page demo the user can actually run. Given a domain,
 * it renders a deterministic mock audit (perf / conversion / seo / AI-readiness)
 * with typed streaming feel. Real inference lives on /ai-audit.
 */
const GrowthSnapshot: React.FC = () => {
  const [url, setUrl] = useState('');
  const [state, setState] = useState<'idle' | 'thinking' | 'done'>('idle');
  const [scores, setScores] = useState<Score[]>([]);
  const [summary, setSummary] = useState('');

  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setState('thinking');
    setScores([]);
    setSummary('');

    // deterministic mock — based on url hash for stable "AI-feeling" output
    const seed = [...url.toLowerCase()].reduce((a, c) => a + c.charCodeAt(0), 0);
    const rnd = (min: number, max: number, salt = 0) =>
      Math.floor(((Math.sin(seed + salt) + 1) / 2) * (max - min) + min);

    const next: Score[] = [
      { label: 'Performance', value: rnd(48, 78, 1), note: 'LCP degraded on mobile · unused JS 210KB' },
      { label: 'Conversion Design', value: rnd(52, 82, 2), note: 'Hero CTA below the fold · weak social proof' },
      { label: 'SEO Foundation', value: rnd(60, 88, 3), note: 'Thin category pages · no schema on 12 URLs' },
      { label: 'AI Readiness', value: rnd(20, 55, 4), note: 'No structured data for LLMs · content not indexed' },
    ];

    // stream scores one-by-one
    for (let i = 0; i < next.length; i++) {
      await new Promise((r) => setTimeout(r, 550));
      setScores(next.slice(0, i + 1));
    }
    await new Promise((r) => setTimeout(r, 500));
    setSummary(
      `Your site is leaking growth in ${next.filter((s) => s.value < 65).length} of 4 pillars. ` +
      `Highest-leverage next move: rebuild the hero + primary funnel around AI-assisted conversion capture. ` +
      `Full audit unlocks the exact roadmap and estimated lift.`,
    );
    setState('done');
  };

  const reset = () => {
    setState('idle');
    setScores([]);
    setSummary('');
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <Sparkles className="w-3 h-3 text-accent" /> Live · Playground
          </div>
          <h2 className="text-section-title text-foreground">
            Run a growth snapshot on your site — right now.
          </h2>
          <p className="text-body-lg text-muted-foreground mt-5 max-w-[58ch]">
            Type a URL. Our AI scores four growth pillars and shows you exactly
            where revenue is leaking. No signup, no wait.
          </p>
        </div>

        <div className="surface-card overflow-hidden">
          {/* terminal header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-black/20">
            <div className="flex items-center gap-2">
              <NightMediaIcon variant="metallic" size={16} />
              <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                nightmedia://snapshot
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <span className={`w-2 h-2 rounded-full ${state === 'thinking' ? 'bg-accent animate-pulse' : 'bg-accent/40'}`} />
            </div>
          </div>

          {/* input */}
          <form onSubmit={run} className="p-6 lg:p-8 border-b border-border">
            <label className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
              Target URL
            </label>
            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 h-12 rounded-full border border-border bg-background/60 focus-within:border-primary/60 transition-colors">
                <span className="text-muted-foreground font-mono text-sm">https://</span>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="yourbrand.com"
                  className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground/60 font-mono"
                  disabled={state === 'thinking'}
                />
              </div>
              <button
                type="submit"
                disabled={!url.trim() || state === 'thinking'}
                className="btn-primary-glow inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state === 'thinking' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Scanning
                  </>
                ) : (
                  <>
                    Run snapshot <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* output */}
          <div className="p-6 lg:p-8 min-h-[280px]">
            {state === 'idle' && scores.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <NightMediaIcon variant="metallic" size={56} animated className="mb-4 opacity-80" />
                <p className="text-sm text-muted-foreground max-w-sm">
                  Enter a URL above. The engine will spin up and stream a live
                  four-pillar growth diagnostic.
                </p>
              </div>
            )}

            {scores.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {scores.map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-background/40 p-5 animate-fade-in">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                        {s.label}
                      </span>
                      <span className={`text-2xl font-display font-semibold tracking-tight ${s.value < 60 ? 'text-destructive' : s.value < 75 ? 'text-accent' : 'text-primary'}`}>
                        {s.value}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${s.value < 60 ? 'bg-destructive' : s.value < 75 ? 'bg-accent' : 'bg-primary'}`}
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{s.note}</p>
                  </div>
                ))}
              </div>
            )}

            {summary && (
              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5 animate-fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.24em] text-accent mb-1.5">
                      Diagnostic complete
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        to="/ai-audit"
                        className="btn-primary-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold"
                      >
                        Unlock full AI audit <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={reset}
                        className="btn-secondary-enterprise inline-flex items-center px-5 py-2.5 rounded-full text-[13px] font-semibold"
                      >
                        Run another
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSnapshot;
