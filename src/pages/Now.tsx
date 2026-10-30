import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { now, projects } from '@/content';

const featuredProjectSlugs = ['embu-fashion-weekend-2026', 'marine-retreat-vlog'];
const featuredProjects = projects.filter((project) =>
  featuredProjectSlugs.includes(project.slug),
);

export default function Now() {
  return (
    <div className="animate-fade-in">
      <section className="relative overflow-hidden border-b border-forest-800/10 bg-brand-green text-forest-800">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="container-mj relative py-16 md:py-24">
          <span className="section-label">{now.label}</span>
          <h1 className="text-display-xl mt-5 max-w-4xl text-forest-800">
            {now.title}
          </h1>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-3xl text-lg leading-relaxed text-charcoal-700">
              {now.intro}
            </p>
            <p className="flex shrink-0 items-center gap-2 text-sm font-medium text-forest-600">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>Last updated: {now.lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="container-mj py-14 md:py-20">
        <div className="max-w-3xl">
          <span className="section-label">Current priorities</span>
          <h2 className="text-display-lg mt-4 text-charcoal-900">
            Where our attention is going
          </h2>
        </div>

        <div className="mt-9 grid gap-9 md:mt-12 md:grid-cols-3 md:gap-8">
          {now.priorities.map((priority, index) => (
            <article key={priority.title} className="border-t border-forest-800/20 pt-5">
              <span className="font-display text-sm font-semibold tracking-wide text-forest-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-charcoal-900">
                {priority.title}
              </h3>
              <p className="mt-3 leading-relaxed text-charcoal-700">
                {priority.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-forest-800/10 bg-brand-green py-14 md:py-20">
        <div className="container-mj">
          <div className="max-w-3xl">
            <span className="section-label">What we’re building</span>
            <h2 className="text-display-lg mt-4 text-charcoal-900">
              Work, services, and initiatives in motion
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal-700">
              A current view of Mjenzi Digital’s work and Alex’s wider ecosystem involvement.
            </p>
          </div>

          <div className="mt-9 grid gap-x-12 gap-y-10 md:mt-12 md:grid-cols-2">
            {now.initiatives.map((initiative) => (
              <article key={initiative.title} className="border-t border-forest-800/20 pt-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-forest-600">
                    {initiative.status}
                  </span>
                  {initiative.kind !== 'portfolio' && (
                    <a
                      href={initiative.link}
                      target={initiative.external ? '_blank' : undefined}
                      rel={initiative.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-700 transition-colors hover:text-forest-900"
                    >
                      {initiative.linkLabel}
                      {initiative.external ? (
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      )}
                    </a>
                  )}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-charcoal-900">
                  {initiative.title}
                </h3>
                <p className="mt-3 leading-relaxed text-charcoal-700">
                  {initiative.description}
                </p>

                {initiative.kind === 'portfolio' && (
                  <ul className="mt-5 divide-y divide-forest-800/15 border-y border-forest-800/15">
                    {featuredProjects.map((project) => (
                      <li key={project.slug} className="py-4">
                        <Link
                          to={`/work/${project.slug}`}
                          className="group flex items-start justify-between gap-4"
                        >
                          <span>
                            <span className="block font-semibold text-charcoal-900 transition-colors group-hover:text-forest-700">
                              {project.name}
                            </span>
                            <span className="mt-1 block text-sm leading-relaxed text-charcoal-700">
                              {project.summary}
                            </span>
                          </span>
                          <span className="mt-1 shrink-0 text-xs font-medium text-forest-600">
                            {project.status}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-mj py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <span className="section-label">What’s next</span>
            <h2 className="text-display-lg mt-4 text-charcoal-900">
              The work ahead
            </h2>
          </div>
          <ul className="divide-y divide-forest-800/15 border-y border-forest-800/15">
            {now.next.map((item) => (
              <li key={item} className="py-4 leading-relaxed text-charcoal-700 md:py-5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest-800 py-14 text-ivory-300 md:py-16">
        <div className="container-mj text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lime-400">
            Mjenzi Digital
          </p>
          <h2 className="text-display-lg mx-auto mt-4 max-w-3xl text-ivory-300">
            Building something meaningful?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ivory-300/80">
            Tell us what your business is working through. We’ll discuss a practical digital solution for your needs.
          </p>
          <Link to="/contact" className="btn-primary mt-7 inline-flex text-base">
            Start a conversation
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
