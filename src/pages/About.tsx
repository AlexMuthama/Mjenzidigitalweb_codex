import { Link } from 'react-router-dom';
import { ArrowRight, Check, Lightbulb } from 'lucide-react';
import { about, identity, images } from '@/content';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* ─── HEADER ───────────────────────────────────────────── */}
      <section className="bg-ivory-300 border-b border-forest-800/6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="container-mj relative py-16 md:py-24">
          <span className="section-label">{about.label}</span>
          <h1 className="text-display-xl text-charcoal-900 mt-5 max-w-4xl">
            {about.title}
          </h1>
        </div>
      </section>

      {/* ─── STORY ───────────────────────────────────────────── */}
      <section className="container-mj py-12 md:py-16">
        <div className="max-w-3xl space-y-5">
          {about.story.map((paragraph, i) => (
            <p key={i} className="text-lg text-charcoal-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 max-w-3xl p-6 rounded-2xl bg-forest-800 text-ivory-300">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-semibold text-lg text-lime-400 mb-2">
                {about.philosophyTitle}
              </h3>
              <p className="text-lg font-display italic text-ivory-300 mb-3">
                {about.philosophyText}
              </p>
              <p className="text-sm text-sage-200 leading-relaxed">
                {about.philosophyBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER ─────────────────────────────────────────── */}
      <section className="bg-ivory-100 border-y border-forest-800/6 py-12 md:py-16">
        <div className="container-mj">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 order-1">
              <p className="section-label mb-3">{about.founderTitle}</p>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-charcoal-900 mb-5">
                {identity.founderName}
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                {about.founderText}
              </p>
            </div>
            <div className="lg:col-span-5 order-2">
              <ImagePlaceholder
                src={images.aboutPhoto}
                alt={`${identity.founderName} - founder of Mjenzi`}
                aspectRatio="aspect-[4/5]"
                label={about.photoPlaceholder}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section className="bg-ivory-100 py-12 md:py-16 border-y border-forest-800/6">
        <div className="container-mj">
          <h2 className="text-display-lg text-charcoal-900 mb-10 text-center">
            {about.valuesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.values.map((value, i) => (
              <div
                key={i}
                className="card p-7 group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-lime-400/15 text-forest-600 mb-4 group-hover:bg-lime-400 group-hover:text-forest-800 transition-colors">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-charcoal-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─────────────────────────────────────────── */}
      <section className="container-mj py-12 md:py-16">
        <div className="max-w-3xl mb-10">
          <span className="section-label">How We Work</span>
          <h2 className="text-display-lg text-charcoal-900 mt-5 mb-4">
            {about.approachTitle}
          </h2>
          <p className="text-lg text-charcoal-700 leading-relaxed">
            {about.approachIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.approachSteps.map((step, i) => (
            <div key={i} className="relative">
              <div className="card p-7 h-full">
                <span className="font-display font-bold text-4xl text-lime-400/80 mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-display font-semibold text-xl text-charcoal-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < about.approachSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-forest-300/40" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn-primary text-base">
            See what we can build for you
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
