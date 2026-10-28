import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Wrench,
  UserCircle2,
  Lightbulb,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
  Link as LinkIcon,
  Tag,
  ExternalLink,
} from 'lucide-react';
import { projects } from '@/content';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const statusStyles: Record<string, string> = {
  'In progress': 'bg-lime-400 text-forest-800',
  Concept: 'bg-sage-200 text-forest-800',
  Demo: 'bg-forest-200 text-forest-800',
  Completed: 'bg-forest-500 text-ivory-300',
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="animate-fade-in">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="bg-ivory-300 border-b border-forest-800/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="container-mj relative py-12 md:py-20">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest-600 hover:text-forest-800 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all work
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest-800/8 text-forest-700 text-sm font-semibold">
              <Tag className="w-3.5 h-3.5" />
              {project.category}
            </span>
            <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${statusStyles[project.status] || 'bg-sage-200 text-forest-800'}`}>
              {project.status}
            </span>
          </div>

          <h1 className="text-display-xl text-charcoal-900 max-w-4xl mb-6">
            {project.name}
          </h1>
          <p className="text-lg md:text-xl text-charcoal-700 max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </section>

      {/* ─── COVER IMAGE ──────────────────────────────────────── */}
      <section className="container-mj py-8 md:py-12">
        <ImagePlaceholder
          src={project.cover}
          alt={project.name}
          aspectRatio={project.slug === 'embu-fashion-weekend-2026' ? 'aspect-video' : 'aspect-[21/9]'}
          label={`Project visual for ${project.name}`}
          fit={project.slug === 'embu-fashion-weekend-2026' ? 'contain' : 'cover'}
          blurredBackground={project.slug === 'embu-fashion-weekend-2026'}
          className="rounded-2xl shadow-xl"
        />
      </section>

      {project.embeds && project.embeds.length > 0 && (
        <section className="container-mj pb-8 md:pb-12" aria-label="Project references">
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
            {project.embeds.map((embed) => (
              <article key={embed.url} className="card p-5 md:p-6 min-w-0">
                <h2 className="font-display font-semibold text-xl text-charcoal-900 leading-snug">
                  {embed.title}
                </h2>
                <div className="mt-4 w-full overflow-hidden rounded-xl border border-forest-800/8 bg-ivory-100">
                  <iframe
                    src={embed.url}
                    title={embed.iframeTitle}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className={`block w-full ${embed.title === 'LinkedIn certificate post' ? 'h-[520px] sm:h-[600px]' : 'h-[360px] sm:h-[480px] md:h-[560px]'}`}
                    allowFullScreen
                  />
                </div>
                <a
                  href={embed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-forest-600 hover:text-forest-800 transition-colors"
                >
                  {embed.fallbackLabel}
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ─── CASE STUDY CONTENT ───────────────────────────────── */}
      <section className="container-mj pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Problem */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h2 className="text-display-md text-charcoal-900">The Problem</h2>
              </div>
              <p className="text-lg text-charcoal-700 leading-relaxed">{project.problem}</p>
            </div>

            {project.goals && project.goals.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-display-md text-charcoal-900">Project Goals</h2>
                </div>
                <ul className="space-y-3">
                  {project.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3 text-charcoal-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-forest-600" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.research && project.research.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h2 className="text-display-md text-charcoal-900">Research and Insights</h2>
                </div>
                <ul className="space-y-3 text-lg text-charcoal-700 leading-relaxed">
                  {project.research.map((insight) => (
                    <li key={insight} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-3 flex-shrink-0" aria-hidden="true" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Process */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                  <Wrench className="w-5 h-5" />
                </div>
                <h2 className="text-display-md text-charcoal-900">Process</h2>
              </div>
              <ol className="space-y-4">
                {project.process.map((step, i) => (
                  <li key={i} className="flex items-start gap-4 p-5 rounded-xl bg-ivory-100 border border-forest-800/6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-forest-800 text-lime-400 font-display font-bold text-sm flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-charcoal-700 leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h2 className="text-display-md text-charcoal-900">Solution</h2>
              </div>
              <p className="text-lg text-charcoal-700 leading-relaxed">{project.solution}</p>
            </div>

            {project.userFlow && project.userFlow.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <h2 className="text-display-md text-charcoal-900">User Flow</h2>
                </div>
                <ol className="space-y-4">
                  {project.userFlow.map((step, index) => (
                    <li key={step} className="flex items-start gap-4 p-5 rounded-xl bg-ivory-100 border border-forest-800/6">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-forest-800 text-lime-400 font-display font-bold text-sm flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-charcoal-700 leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Automation projects */}
            {project.automationProjects && project.automationProjects.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <h2 className="text-display-md text-charcoal-900">Automation Projects</h2>
                </div>
                <div className="space-y-6">
                  {project.automationProjects.map((automationProject, index) => (
                    <article key={automationProject.title} className="card p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-5">
                        <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-forest-800 text-lime-400 font-display font-bold text-sm flex-shrink-0">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3 className="font-display font-semibold text-xl text-charcoal-900 leading-snug mb-2">
                            {automationProject.title}
                          </h3>
                          <p className="text-charcoal-700 leading-relaxed">{automationProject.description}</p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div>
                          <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">How it works</h4>
                          <ul className="space-y-2.5">
                            {automationProject.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="text-sm text-charcoal-700 leading-relaxed bg-ivory-100 rounded-xl p-4">
                          {automationProject.overview}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {automationProject.tools.map((tool) => (
                            <span key={tool} className="px-3 py-1.5 rounded-lg bg-forest-800/6 text-charcoal-700 text-xs font-medium">
                              {tool}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 pt-1">
                          {automationProject.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={link.secondary
                                ? 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-forest-800/15 text-charcoal-900 text-sm font-semibold hover:bg-forest-800/5 transition-all'
                                : 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 text-ivory-300 text-sm font-semibold hover:bg-forest-700 transition-all'}
                            >
                              <ExternalLink className="w-4 h-4 text-lime-500" />
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {project.caseStudyProjects && project.caseStudyProjects.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h2 className="text-display-md text-charcoal-900">Related Data Projects</h2>
                </div>
                <div className="space-y-6">
                  {project.caseStudyProjects.map((caseStudyProject) => (
                    <article key={caseStudyProject.title} className="card p-6 md:p-8">
                      <p className="text-xs font-semibold uppercase tracking-wider text-forest-600 mb-2">
                        {caseStudyProject.statusLabel || 'Project exercise'}
                      </p>
                      <h3 className="font-display font-semibold text-xl text-charcoal-900 leading-snug mb-3">
                        {caseStudyProject.title}
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed mb-6">{caseStudyProject.description}</p>

                      {(caseStudyProject.overview || caseStudyProject.businessProblem) && (
                        <div className="space-y-5 mb-6">
                          {caseStudyProject.overview && (
                            <div>
                              <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-2">Project overview</h4>
                              <p className="text-sm text-charcoal-700 leading-relaxed">{caseStudyProject.overview}</p>
                            </div>
                          )}
                          {caseStudyProject.businessProblem && (
                            <div>
                              <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-2">Business problem</h4>
                              <p className="text-sm text-charcoal-700 leading-relaxed">{caseStudyProject.businessProblem}</p>
                            </div>
                          )}
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">
                            {caseStudyProject.objectivesLabel || 'Objectives'}
                          </h4>
                          <ul className="space-y-2.5">
                            {caseStudyProject.objectives.map((objective) => (
                              <li key={objective} className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 flex-shrink-0" aria-hidden="true" />
                                <span>{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">
                            {caseStudyProject.methodsLabel || 'Methods'}
                          </h4>
                          <ul className="space-y-2.5">
                            {caseStudyProject.methods.map((method) => (
                              <li key={method} className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 flex-shrink-0" aria-hidden="true" />
                                <span>{method}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {caseStudyProject.scopeMetrics && caseStudyProject.scopeMetrics.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">
                            Planned recruitment metrics and required fields
                          </h4>
                          <ol className="space-y-2.5">
                            {caseStudyProject.scopeMetrics.map((metric) => (
                              <li key={metric} className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 flex-shrink-0" aria-hidden="true" />
                                <span>{metric}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {caseStudyProject.dataset && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">Dataset and preparation</h4>
                          <p className="text-sm text-charcoal-700 leading-relaxed">{caseStudyProject.dataset}</p>
                        </div>
                      )}

                      {caseStudyProject.dashboardPages && caseStudyProject.dashboardPages.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">Planned Power BI dashboard pages</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {caseStudyProject.dashboardPages.map((page) => (
                              <li key={page} className="p-4 rounded-xl bg-ivory-100 border border-forest-800/6 text-sm text-charcoal-700 leading-relaxed">
                                {page}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {caseStudyProject.findingsAndRecommendations && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">Key findings and recommendations</h4>
                          <p className="text-sm text-charcoal-700 leading-relaxed">{caseStudyProject.findingsAndRecommendations}</p>
                        </div>
                      )}

                      {caseStudyProject.limitations && caseStudyProject.limitations.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">Project limitations</h4>
                          <ul className="space-y-2.5">
                            {caseStudyProject.limitations.map((limitation) => (
                              <li key={limitation} className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 flex-shrink-0" aria-hidden="true" />
                                <span>{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-forest-700 uppercase tracking-wider mb-3">Planned deliverables</h4>
                        <ul className="space-y-2.5">
                          {caseStudyProject.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-start gap-3 text-sm text-charcoal-700 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mt-2 flex-shrink-0" aria-hidden="true" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-6">
                        <span className="w-full text-sm font-semibold text-forest-700 uppercase tracking-wider">
                          {caseStudyProject.toolsLabel || 'Tools'}
                        </span>
                        {caseStudyProject.tools.map((tool) => (
                          <span key={tool} className="px-3 py-1.5 rounded-lg bg-forest-800/6 text-charcoal-700 text-xs font-medium">
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 mt-6">
                        {caseStudyProject.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-forest-800 text-ivory-300 text-sm font-semibold hover:bg-forest-700 transition-all"
                          >
                            <ExternalLink className="w-4 h-4 text-lime-500" aria-hidden="true" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Results - only if verified results exist */}
            {project.results && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h2 className="text-display-md text-charcoal-900">Results</h2>
                </div>
                <p className="text-lg text-charcoal-700 leading-relaxed">{project.results}</p>
              </div>
            )}

            {project.outcome && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-display-md text-charcoal-900">Project Outcome</h2>
                </div>
                <p className="text-lg text-charcoal-700 leading-relaxed">{project.outcome}</p>
              </div>
            )}

            {/* Lessons */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="text-display-md text-charcoal-900">Lessons Learned</h2>
              </div>
              <div className="p-6 rounded-2xl bg-forest-800 text-ivory-300">
                <p className="text-lg leading-relaxed italic font-display">{project.lessons}</p>
              </div>
            </div>

            {/* Links */}
            {project.links && project.links.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-lime-400/15 text-forest-600">
                    <LinkIcon className="w-5 h-5" />
                  </div>
                  <h2 className="text-display-md text-charcoal-900">Links</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-forest-800/15 text-charcoal-900 font-semibold hover:bg-forest-800/5 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-forest-600" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div>
                <h2 className="text-display-md text-charcoal-900 mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.screenshots.map((src, i) => (
                    <ImagePlaceholder
                      key={i}
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      aspectRatio="aspect-[16/10]"
                      label={`Screenshot ${i + 1}`}
                      className="rounded-xl shadow-lg"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              {/* Role */}
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <UserCircle2 className="w-5 h-5 text-forest-600" />
                  <h3 className="font-display font-semibold text-charcoal-900">My Role</h3>
                </div>
                <p className="text-sm text-charcoal-700 leading-relaxed">{project.role}</p>
              </div>

              {/* Tools */}
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Wrench className="w-5 h-5 text-forest-600" />
                  <h3 className="font-display font-semibold text-charcoal-900">Tools Used</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-forest-800/6 text-charcoal-700 text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status detail */}
              <div className="p-6 rounded-2xl bg-forest-800 text-ivory-300">
                <h3 className="font-display font-semibold text-lime-400 mb-3">Project Status</h3>
                <p className="text-sm leading-relaxed mb-4">
                  This project is currently labeled as{' '}
                  <span className="font-semibold text-lime-400">{project.status}</span>
                  {project.status === 'Demo' && ' - it is a working demonstration, not a live client project.'}
                  {project.status === 'Concept' && ' - it is an idea being explored, not yet built.'}
                  {project.status === 'In progress' && ' - work is actively ongoing.'}
                  {project.status === 'Completed' && ' - the project is finished and delivered.'}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-lime-400 hover:text-lime-300 transition-colors">
                  Discuss a similar project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── MORE PROJECTS ────────────────────────────────────── */}
      <section className="bg-ivory-100 border-t border-forest-800/6 py-12 md:py-16">
        <div className="container-mj">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-display-md text-charcoal-900">More work</h2>
            <Link to="/work" className="btn-ghost text-forest-600 font-semibold">
              View all
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className="card p-6 group flex items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusStyles[p.status] || 'bg-sage-200 text-forest-800'}`}>
                      {p.status}
                    </span>
                    <span className="text-xs text-sage-400 font-medium uppercase tracking-wider">{p.category}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-charcoal-900 mb-1 leading-snug">{p.name}</h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed line-clamp-2">{p.summary}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-forest-600 flex-shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
