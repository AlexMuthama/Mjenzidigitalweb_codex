import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Sparkles,
  Wrench,
  FlaskConical,
  Rocket,
  CheckCircle2,
  ExternalLink,
  Clock,
} from 'lucide-react';
import { now, building } from '@/content';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const statusConfig: Record<string, { icon: typeof Compass; color: string; bg: string; ring: string }> = {
  Exploring: { icon: Compass, color: 'text-sage-500', bg: 'bg-sage-100', ring: 'ring-sage-200' },
  Building: { icon: Wrench, color: 'text-forest-600', bg: 'bg-forest-100', ring: 'ring-forest-200' },
  Testing: { icon: FlaskConical, color: 'text-forest-600', bg: 'bg-forest-50', ring: 'ring-forest-200' },
  Launched: { icon: Rocket, color: 'text-forest-800', bg: 'bg-lime-400/20', ring: 'ring-lime-400/40' },
};

export default function Now() {
  return (
    <div className="animate-fade-in">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="bg-brand-green text-forest-800 border-b border-forest-800/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="container-mj relative py-16 md:py-24">
          <span className="section-label">{now.label}</span>
          <h1 className="text-display-xl text-forest-800 mt-5 max-w-4xl">
            {now.title}
          </h1>
          <p className="text-lg text-charcoal-700 mt-6 max-w-3xl leading-relaxed">
            {now.intro}
          </p>
          <p className="flex items-center gap-2 text-sm text-forest-600 font-medium mt-6">
            <Clock className="w-4 h-4" />
            Last updated: {now.lastUpdated}
          </p>
        </div>
      </section>

      {/* ─── CURRENT FOCUS ────────────────────────────────────── */}
      <section className="container-mj py-12 md:py-16">
        <div className="max-w-4xl">
          <span className="section-label">Current Focus</span>
          <h2 className="text-display-lg text-charcoal-900 mt-4 mb-8">
            Where our energy is going right now
          </h2>

          <div className="space-y-4">
            {now.focus.map((item, i) => (
              <div
                key={i}
                className="card p-6 flex items-start gap-5 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600 flex-shrink-0 group-hover:bg-lime-400 group-hover:text-forest-800 transition-colors">
                  <span className="font-display font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <p className="text-lg font-display font-semibold text-charcoal-900 leading-snug mb-1">
                    {item.title}
                  </p>
                  <p className="text-charcoal-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE ARE BUILDING ─────────────────────────────── */}
      <section className="bg-brand-green border-y border-forest-800/6 py-12 md:py-16">
        <div className="container-mj">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="section-label">What We Are Building</span>
              <h2 className="text-display-lg text-charcoal-900 mt-5 max-w-2xl">
                A live record of things in progress
              </h2>
              <p className="text-charcoal-700 mt-4 max-w-2xl leading-relaxed">
                These are experiments, projects, and ideas we are actively developing. Each one has a status - Exploring, Building, Testing, or Launched - and a latest update so customers can see exactly where things stand.
              </p>
            </div>
          </div>

          {/* Status legend */}
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.entries(statusConfig).map(([status, cfg]) => {
              const Icon = cfg.icon;
              const count = building.filter((b) => b.status === status).length;
              return (
                <div
                  key={status}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${cfg.bg} ring-1 ${cfg.ring}`}
                >
                  <Icon className={`w-4 h-4 ${cfg.color}`} />
                  <span className="text-sm font-semibold text-charcoal-800">{status}</span>
                  <span className={`text-xs ${cfg.color} font-bold`}>{count}</span>
                </div>
              );
            })}
          </div>

          {/* Building entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {building.map((entry, i) => {
              const cfg = statusConfig[entry.status];
              const StatusIcon = cfg.icon;

              return (
                <article
                  key={i}
                  className="card p-6 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${cfg.bg} ring-1 ${cfg.ring}`}>
                      <StatusIcon className={`w-4 h-4 ${cfg.color}`} />
                      <span className={`text-sm font-semibold ${cfg.color}`}>{entry.status}</span>
                    </div>
                    {entry.link && (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-600 hover:text-forest-800 transition-colors"
                        aria-label="View external link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <h3 className="font-display font-semibold text-xl text-charcoal-900 mb-2 leading-snug">
                    {entry.name}
                  </h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed mb-4">
                    {entry.description}
                  </p>

                  {/* Latest update */}
                  <div className="p-4 rounded-xl bg-forest-800/4 border border-forest-800/6 mb-4">
                    <p className="flex items-center gap-2 text-xs font-semibold text-forest-600 uppercase tracking-wider mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      Latest Update
                    </p>
                    <p className="text-sm text-charcoal-700 leading-relaxed">{entry.latestUpdate}</p>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {entry.tools.map((tool, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-1 rounded-lg bg-forest-800/6 text-charcoal-700 text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Image placeholder */}
                  {entry.image && (
                    <div className="mt-4">
                      <ImagePlaceholder
                        src={entry.image}
                        alt={entry.name}
                        aspectRatio="aspect-[16/9]"
                        className="rounded-xl"
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-sage-400 mt-8 max-w-xl mx-auto">
            This is a transparent view of ongoing work. As projects progress, we update each status, latest update, image, and link.
          </p>
        </div>
      </section>

      {/* ─── APPROACH REMINDER ────────────────────────────────── */}
      <section className="container-mj py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-forest-800 text-lime-400 mx-auto mb-6">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="text-display-lg text-charcoal-900 mb-4">
            Technology is a tool, not the goal
          </h2>
          <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
            Everything above is built on the same philosophy: understand the problem first, find the simplest practical solution, build it, and improve it from real use. The tools change - the approach does not.
          </p>
          <Link to="/contact" className="btn-primary text-base">
            Let us build something valuable together
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
