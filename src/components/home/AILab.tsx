import React, { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useReveal } from './useReveal';
import NSignal from './NSignal';

type Mode = {
  id: string;
  label: string;
  pillars: { label: string; lo: number; hi: number; salt: number; note: string }[];
};

const modes: Mode[] = [
  {
    id: 'strategy',
    label: 'AI Strategy',
    pillars: [
      { label: 'Positioning', lo: 45, hi: 80, salt: 1, note: 'Differentiation unclear · category narrative fragmented' },
      { label: 'AI Roadmap', lo: 18, hi: 52, salt: 2, note: 'No defined AI leverage points · ad-hoc tooling' },
      { label: 'Data Readiness', lo: 30, hi: 64, salt: 3, note: 'Events unstructured · no unified customer model' },
      { label: 'Operating Model', lo: 40, hi: 74, salt: 4, note: 'Manual handoffs · no automation ownership' },
    ],
  },
  {
    id: 'content',
    label: 'AI Content',
    pillars: [
      { label: 'Editorial System', lo: 38, hi: 76, salt: 1, note: 'Briefs ad-hoc · no compounding library' },
      { label: 'Distribution', lo: 44, hi: 82, salt: 2, note: 'Channels siloed · no reuse pipeline' },
      { label: 'AI-Assisted Drafting', lo: 20, hi: 58, salt: 3, note: 'No human-in-the-loop AI workflow' },
      { label: 'Measurement', lo: 34, hi: 70, salt: 4, note: 'No attribution to revenue' },
    ],
  },
  {
    id: 'automation',
    label: 'AI Automation',
    pillars: [
      { label: 'Workflow Audit', lo: 28, hi: 66, salt: 1, note: 'Repetitive ops un-automated' },
      { label: 'Agent Maturity', lo: 14, hi: 48, salt: 2, note: 'No production agents · no guardrails' },
      { label: 'System Integration', lo: 36, hi: 72, salt: 3, note: 'Stack disconnected · manual glue' },
      { label: 'Governance', lo: 22, hi: 56, salt: 4, note: 'No eval / monitoring / fallback' },
    ],
  },
  {
    id: 'creative',
    label: 'AI Creative',
    pillars: [
      { label: 'Brand System', lo: 42, hi: 80, salt: 1, note: 'Inconsistent identity across surfaces' },
      { label: 'Generative Pipeline', lo: 16, hi: 50, salt: 2, note: 'No on-brand AI generation workflow' },
      { label: 'CGI / 3D', lo: 30, hi: 64, salt: 3, note: 'No signature visual moments' },
      { label: 'Production Velocity', lo: 38, hi: 76, salt: 4, note: 'Creative cycle too slow for launch cadence' },
    ],
  },
  {
    id: 'analytics',
    label: 'AI Analytics',
    pillars: [
      { label: 'Attribution', lo: 40, hi: 78, salt: 1, note: 'Last-touch only · CFO-unfriendly' },
      { label: 'Experimentation', lo: 32, hi: 68, salt: 2, note: 'Low test cadence · no unified pipeline' },
      { label: 'Forecasting', lo: 20, hi: 54, salt: 3, note: 'No scenario modelling' },
      { label: 'LLM Indexing', lo: 18, hi: 52, salt: 4, note: 'Content not structured for AI discovery' },
    ],
  },
];

const AILab: React.FC = () => {
  const ref = useReveal<HTMLElement>(0.12);
  const [url, setUrl] = useState('');
  const [modeId, setModeId] = useState(modes[0].id);
  const [state, setState] = useState<'idle' | 'thinking' | 'done'>('idle');
  const [scores, setScores] = useState<{ label: string; value: number; note: string }[]>([]);
  const [summary, setSummary] = useState('');

  const mode = modes.find((m) => m.id === modeId)!;

  const run = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setState('thinking');
    setScores([]);
    setSummary('');
    const seed = [...url.toLowerCase()].reduce((a, c) => a + c.charCodeAt(0), 0);
    const rnd = (lo: number, hi: number, salt: number) =>
      Math.floor(((Math.sin(seed + salt) + 1) / 2) * (hi - lo) + lo);
    const next = mode.pillars.map((p) => ({
      label: p.label,
      value: rnd(p.lo, p.hi, p.salt),
      note: p.note,
    }));
    for (let i = 0; i < next.length; i++) {
      await new Promise((r) => setTimeout(r, 480));
      setScores(next.slice(0, i + 1));
    }
    await new Promise((r) => setTimeout(r, 420));
    const weak = next.filter((s) => s.value < 65).length;
    setSummary(
      `Your ${mode.label.toLowerCase()} system is leaking growth in ${weak} of ${next.length} pillars. Highest-leverage next move: rebuild the weakest pillar around an AI-assisted workflow with measurement wired to revenue. Full audit unlocks the exact roadmap.`,
    );
    setState('done');
  };

  const reset = () => {
    setState('idle');
    setScores([]);
    setSummary('');
  };

  return (
    <section ref={ref} className="room-midnight bg-room py-28 lg:py-40">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div data-r className="max-w-2xl mb-12">
          <span className="mono t-muted text-[11px] flex items-center gap-2">
            <NSignal size={12} pulse /> AI Lab · Live playground
          </span>
          <h2 className="font-h mt-6 text-[40px] sm:text-[56px] lg:text-[66px] leading-[1.0] tracking-[-0.03em] font-medium">
            Run a growth snapshot on your site.
          </h2>
          <p className="t-muted mt-6 text-[17px] leading-[1.6] max-w-[54ch]">
            Type a URL, pick a capability, and the engine streams a live
            diagnostic across four pillars. No signup, no wait.
          </p>
        </div>

        {/* mode selector */}
        <div data-r className="flex flex-wrap gap-2 mb-8">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setModeId(m.id);
                reset();
              }}
              className={`mono text-[11px] px-4 py-2 rounded-full border transition-colors ${
                m.id === modeId ? 'border-transparent' : 'b-rule'
              }`}
              style={m.id === modeId ? { background: '#3B9EFF', color: '#fff', borderColor: 'transparent' } : { color: 'var(--h-muted)' }}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div data-r className="rounded-2xl overflow-hidden b-rule border">
          {/* terminal header */}
          <div className="flex items-center justify-between px-5 py-3 b-rule border-b" style={{ background: 'rgba(0,0,0,.18)' }}>
            <div className="flex items-center gap-2">
              <NSignal size={14} />
              <span className="mono text-[10px] t-muted">nightmedia://snapshot · {mode.label}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: 'rgba(138,154,171,.3)' }} />
              <span className="w-2 h-2 rounded-full" style={{ background: 'rgba(138,154,171,.3)' }} />
              <span className={`w-2 h-2 rounded-full ${state === 'thinking' ? 'animate-pulse' : ''}`} style={{ background: state === 'thinking' ? '#3B9EFF' : 'rgba(59,158,255,.4)' }} />
            </div>
          </div>

          {/* input */}
          <form onSubmit={run} className="p-6 lg:p-8 b-rule border-b">
            <label className="mono text-[10px] t-muted">Target URL</label>
            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 h-12 rounded-full b-rule border transition-colors" style={{ background: 'rgba(0,0,0,.2)' }}>
                <span className="t-muted mono text-sm">https://</span>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="yourbrand.com"
                  className="flex-1 bg-transparent outline-none text-sm t-fg mono"
                  disabled={state === 'thinking'}
                />
              </div>
              <button
                type="submit"
                disabled={!url.trim() || state === 'thinking'}
                className="btn-primary inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state === 'thinking' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Scanning</>
                ) : (
                  <>Run snapshot <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>

          {/* output */}
          <div className="p-6 lg:p-8 min-h-[300px]">
            {state === 'idle' && scores.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4"><NSignal size={48} pulse /></div>
                <p className="text-sm t-muted max-w-sm">
                  Enter a URL above. The engine will stream a live four-pillar
                  {mode.label.toLowerCase()} diagnostic.
                </p>
              </div>
            )}

            {scores.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {scores.map((s) => (
                  <div key={s.label} className="rounded-xl b-rule border p-5" style={{ background: 'rgba(0,0,0,.16)' }}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="mono text-[10px] t-muted">{s.label}</span>
                      <span className="text-2xl font-h font-semibold tracking-tight" style={{ color: s.value < 60 ? '#ff6b6b' : s.value < 75 ? '#38C9C0' : '#3B9EFF' }}>
                        {s.value}
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'var(--h-rule)' }}>
                      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${s.value}%`, background: s.value < 60 ? '#ff6b6b' : s.value < 75 ? '#38C9C0' : '#3B9EFF' }} />
                    </div>
                    <p className="text-xs t-muted mt-3 leading-relaxed">{s.note}</p>
                  </div>
                ))}
              </div>
            )}

            {summary && (
              <div className="mt-6 rounded-xl p-5" style={{ border: '1px solid rgba(59,158,255,.3)', background: 'rgba(59,158,255,.06)' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#38C9C0' }} />
                  <div>
                    <div className="mono text-[10px] mb-1.5" style={{ color: '#38C9C0' }}>Diagnostic complete</div>
                    <p className="text-sm t-fg leading-relaxed">{summary}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link to="/ai-audit" className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold">
                        Unlock full AI audit <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <button onClick={reset} className="btn-ghost inline-flex px-5 py-2.5 rounded-full text-[13px] font-semibold">
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

export default AILab;
