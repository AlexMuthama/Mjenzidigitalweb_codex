import { Link } from 'react-router-dom';
import { ArrowRight, Check, Globe, Bot, Settings, BarChart, Compass } from 'lucide-react';
import { services, home } from '@/content';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const serviceIcons: Record<string, typeof Globe> = {
  globe: Globe,
  bot: Bot,
  settings: Settings,
  'bar-chart': BarChart,
  compass: Compass,
};

export default function Services() {
  return (
    <div className="animate-fade-in">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="bg-ivory-300 border-b border-forest-800/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="container-mj relative py-16 md:py-24">
          <span className="section-label">{services.label}</span>
          <h1 className="text-display-xl text-charcoal-900 mt-5 max-w-4xl">
            {services.title}
          </h1>
          <p className="text-lg text-charcoal-700 mt-6 max-w-3xl leading-relaxed">
            {services.intro}
          </p>
        </div>
      </section>

      {/* ─── SERVICES LIST ────────────────────────────────────── */}
      <section className="container-mj py-12 md:py-16">
        <div className="space-y-10">
          {services.items.map((service, i) => {
            const Icon = serviceIcons[service.icon] || Globe;
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start ${
                  i > 0 ? 'pt-10 border-t border-forest-800/8' : ''
                }`}
              >
                {/* Image + number */}
                <div className={`lg:col-span-3 ${isEven ? '' : 'lg:order-2'}`}>
                  <ImagePlaceholder
                    src={service.image}
                    alt={`${service.title} - Mjenzi Digital service`}
                    aspectRatio="aspect-[16/10]"
                    label={`${service.title} visual`}
                    className="rounded-2xl shadow-lg mb-5"
                  />
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-800 text-lime-400 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-display font-bold text-3xl text-sage-300">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-9 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-display-md text-charcoal-900">
                      {service.title}
                    </h2>
                    <span className="px-3 py-1 rounded-full bg-sage-100 text-forest-700 text-xs font-semibold whitespace-nowrap">
                      {service.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {/* Problem */}
                    <div className="p-6 rounded-xl bg-ivory-100 border border-forest-800/6">
                      <h3 className="text-sm font-semibold text-forest-600 uppercase tracking-wider mb-3">
                        The Problem
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed">
                        {service.problem}
                      </p>
                    </div>

                    {/* Suits */}
                    <div className="p-6 rounded-xl bg-forest-800/4 border border-forest-800/6">
                      <h3 className="text-sm font-semibold text-forest-600 uppercase tracking-wider mb-3">
                        Who It Suits
                      </h3>
                      <p className="text-charcoal-700 leading-relaxed">
                        {service.suits}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-forest-600 uppercase tracking-wider mb-4">
                      What We Deliver
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((d, di) => (
                        <div key={di} className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-lime-400/20 text-forest-600 flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-sm text-charcoal-700 leading-relaxed">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-ivory-100 py-12 md:py-16 border-t border-forest-800/6">
        <div className="container-mj text-center">
          <h2 className="text-display-lg text-charcoal-900 mb-5">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-charcoal-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            Tell us about your business and the challenges you are facing. We will help you identify what to prioritise - honestly, even if that means starting small.
          </p>
          <Link to={home.cta.button.link} className="btn-primary text-base">
            {home.cta.button.label}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
