import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Globe, Bot, Settings, BarChart, Compass, Wrench, FlaskConical, Rocket } from 'lucide-react';
import { home, identity, services, projects, building, images } from '@/content';
import ProjectCard from '@/components/ProjectCard';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const serviceIcons: Record<string, typeof Globe> = {
  globe: Globe,
  bot: Bot,
  settings: Settings,
  'bar-chart': BarChart,
  compass: Compass,
};

export default function Home() {
  useLayoutEffect(() => {
    const homePage = document.querySelector<HTMLElement>('.home-page');
    const revealTargets = document.querySelectorAll<HTMLElement>('.home-scroll-reveal');

    const showAll = () => revealTargets.forEach((target) => target.classList.add('is-visible'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      showAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }
    );

    homePage?.classList.add('home-motion-ready');
    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      homePage?.classList.remove('home-motion-ready');
    };
  }, []);

  return (
    <div className="home-page animate-fade-in">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-green text-forest-800">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-60" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest-500/5 rounded-full blur-3xl" />

        <div className="container-mj relative py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5 animate-fade-up">
                <span className="px-4 py-1.5 rounded-full bg-forest-800/8 text-forest-700 text-sm font-semibold">
                  {identity.fullName}
                </span>
                <span className="text-sage-400 text-sm font-medium">{identity.title}</span>
              </div>

              <h1 className="text-display-2xl text-forest-800 mb-5 animate-fade-up" style={{ animationDelay: '100ms' }}>
                {home.hero.headline}
              </h1>

              <p className="text-lg md:text-xl text-charcoal-700 leading-relaxed max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
                {home.hero.supporting}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                <Link to={home.hero.primaryButton.link} className="btn-primary text-base">
                  {home.hero.primaryButton.label}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to={home.hero.secondaryButton.link} className="btn-secondary text-base">
                  {home.hero.secondaryButton.label}
                </Link>
              </div>

              {/* Tagline accent */}
              <div className="mt-8 flex items-center gap-3 animate-fade-up" style={{ animationDelay: '400ms' }}>
                <div className="h-px w-12 bg-lime-400" />
                <p className="font-display font-medium text-forest-600 text-lg italic">
                  {identity.tagline}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <ImagePlaceholder
                src={images.hero}
                alt="Two Black African women collaborating on laptops in a modern workspace"
                aspectRatio="aspect-[43/64]"
                fit="contain"
                className="home-original-ratio-image mx-auto w-full max-w-[400px] rounded-3xl shadow-2xl ring-1 ring-forest-800/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRO ────────────────────────────────────────────── */}
      <section className="container-mj py-16 md:py-20 home-scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="section-label">{home.intro.label}</span>
            <h2 className="text-display-lg text-charcoal-900 mt-4 mb-5">
              {home.intro.title}
            </h2>
            <p className="text-lg text-charcoal-700 leading-relaxed mb-5">
              {home.intro.body}
            </p>
            <Link to={home.intro.link.link} className="inline-flex items-center gap-1 text-forest-600 font-semibold hover:text-forest-800 link-underline">
              {home.intro.link.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <ImagePlaceholder
              src={images.architectureAccent}
              alt="Nairobi skyline showcasing modern Kenyan architecture"
              aspectRatio="aspect-[1672/941]"
              fit="contain"
              label="Mjenzi builds practical digital solutions with thoughtful design and structure"
              className="home-original-ratio-image rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ─── SERVICE HIGHLIGHTS ───────────────────────────────── */}
      <section className="bg-forest-800 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.04]" />
        <div className="container-mj relative">
          <div className="text-center mb-12 home-scroll-reveal">
            <span className="section-label text-lime-400 [&::before]:bg-lime-400">
              What We Do
            </span>
            <h2 className="text-display-lg text-ivory-300 mt-5">
              Practical digital solutions for business growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.items.map((service, i) => {
              const Icon = serviceIcons[service.icon] || Globe;
              return (
                <Link
                  key={i}
                  to="/services"
                  className="home-service-card home-scroll-reveal group bg-forest-700/40 backdrop-blur-sm border border-forest-600/30 rounded-2xl p-7 transition-all duration-300 hover:border-lime-400/40 hover:bg-forest-700/60 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 mb-5 transition-colors group-hover:bg-lime-400 group-hover:text-forest-800">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ivory-300 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-sage-200 leading-relaxed mb-4">
                    {service.problem}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-lime-400 font-semibold">
                    Learn more
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary text-base">
              See all services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SELECTED WORK PREVIEW ────────────────────────────── */}
      <section className="container-mj py-16 md:py-20">
        <div className="home-scroll-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="text-display-lg text-charcoal-900 mt-5">
              Solutions we are building, testing, and exploring
            </h2>
          </div>
          <Link to="/work" className="btn-ghost text-forest-600 font-semibold">
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="home-project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p, i) => (
            <div
              key={i}
              className="home-scroll-reveal"
            >
              <ProjectCard {...p} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/work" className="btn-ghost text-forest-600 font-semibold text-base">
            Explore all projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── BUILDING TEASER ──────────────────────────────────── */}
      <section className="bg-brand-green py-16 md:py-20 border-y border-forest-800/6 home-scroll-reveal">
        <div className="container-mj">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="section-label">{home.buildingTeaser.label}</span>
              <h2 className="text-display-lg text-charcoal-900 mt-5 mb-6">
                {home.buildingTeaser.title}
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                {home.buildingTeaser.body}
              </p>
              <Link to="/now" className="btn-secondary text-base">
                {home.buildingTeaser.link.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {building.slice(0, 4).map((entry, i) => {
                  const StatusIcon = entry.status === 'Exploring' ? Compass :
                    entry.status === 'Building' ? Wrench :
                    entry.status === 'Testing' ? FlaskConical : Rocket;
                  const statusColor = entry.status === 'Exploring' ? 'bg-sage-100 text-sage-500' :
                    entry.status === 'Building' ? 'bg-forest-100 text-forest-600' :
                    entry.status === 'Testing' ? 'bg-forest-50 text-forest-600' :
                    'bg-lime-400/20 text-forest-800';
                  return (
                    <div
                      key={i}
                      className="card overflow-hidden p-0"
                    >
                      <ImagePlaceholder
                        src={entry.image}
                        alt={entry.name}
                        aspectRatio="aspect-[16/9]"
                        className="rounded-none"
                      />
                      <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <StatusIcon className="w-4 h-4 text-forest-600" />
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColor}`}>
                          {entry.status}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-charcoal-900 leading-snug">{entry.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="container-mj py-16 md:py-20">
        <div className="home-scroll-reveal relative overflow-hidden rounded-3xl bg-forest-800 px-8 md:px-16 py-14 md:py-20 text-center">
          <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.04]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/8 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-display-lg text-ivory-300 mb-6">
              {home.cta.title}
            </h2>
            <p className="text-lg text-sage-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              {home.cta.body}
            </p>
            <Link to={home.cta.button.link} className="btn-primary text-base">
              {home.cta.button.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
