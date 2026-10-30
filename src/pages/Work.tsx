import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, X } from 'lucide-react';
import { work, projects } from '@/content';
import ProjectCard from '@/components/ProjectCard';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="animate-fade-in">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="bg-ivory-300 border-b border-forest-800/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="container-mj relative py-16 md:py-24">
          <span className="section-label">{work.label}</span>
          <h1 className="text-display-xl text-charcoal-900 mt-5 max-w-4xl">
            {work.title}
          </h1>
          <p className="text-lg text-charcoal-700 mt-6 max-w-3xl leading-relaxed">
            {work.intro}
          </p>
        </div>
      </section>

      {/* ─── FILTERS + GALLERY ────────────────────────────────── */}
      <section className="container-mj py-10 md:py-14">
        {/* Filter bar */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
          <span className="flex items-center gap-2 text-sm font-semibold text-sage-400 flex-shrink-0 mr-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </span>
          {work.filters.map((filter) => {
            const active = activeFilter === filter;
            const count = filter === 'All' ? projects.length : projects.filter((p) => p.category === filter).length;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  active
                    ? 'bg-forest-800 text-ivory-300'
                    : 'bg-forest-800/5 text-charcoal-700 hover:bg-forest-800/10'
                }`}
                aria-pressed={active}
              >
                {filter}
                <span className={`text-xs ${active ? 'text-lime-400' : 'text-sage-400'}`}>
                  {count}
                </span>
                {active && (
                  <X className="w-3.5 h-3.5 text-lime-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Gallery grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div key={p.slug} className="animate-fade-up">
                <ProjectCard
                  slug={p.slug}
                  name={p.name}
                  category={p.category}
                  status={p.status}
                  cover={p.cover}
                  summary={p.summary}
                  fullDescription={p.fullDescription}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-charcoal-700 text-lg mb-4">No projects in this category yet.</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="btn-ghost text-forest-600 font-semibold"
            >
              Show all projects
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block rounded-2xl bg-forest-800 px-8 py-8 md:px-14 md:py-12 text-center">
            <h2 className="text-display-md text-ivory-300 mb-3">
              Want to be the next case study?
            </h2>
            <p className="text-sage-200 max-w-md mx-auto mb-5 leading-relaxed">
              Every project here started with a conversation. Let us talk about what you are building.
            </p>
            <Link to="/contact" className="btn-primary text-base">
              Start a project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
