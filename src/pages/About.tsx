import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { about, identity, images } from '@/content';
import ImagePlaceholder from '@/components/ImagePlaceholder';

export default function About() {
  const aboutStats = [
    { value: about.capabilities.length, label: 'core service areas' },
    { value: about.approachSteps.length, label: 'steps in our approach' },
    { value: about.audience.length, label: 'client groups' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="bg-brand-green text-forest-800">
        <div className="container-mj py-10 sm:py-12 lg:py-16">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-forest-600">{about.label} · Mjenzi Digital</span>
          <h1 className="text-display-xl mt-4 max-w-4xl text-forest-800">{about.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal-700 sm:text-lg">{about.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-forest-800/25 px-6 py-3 text-sm font-semibold text-forest-800 transition-colors hover:border-forest-800 hover:bg-forest-800 hover:text-ivory-300">
              Explore our services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest-50">
        <div className="container-mj grid grid-cols-1 items-center gap-7 py-9 sm:py-11 lg:grid-cols-12 lg:gap-12 lg:py-12">
          <div className="max-w-3xl lg:col-span-7">
            <span className="text-sm font-semibold uppercase tracking-[0.13em] text-forest-600">Our story</span>
            <h2 className="text-display-lg mt-3 max-w-2xl text-forest-800">{about.storyTitle}</h2>
            <div className="mt-4 max-w-2xl space-y-3">
              {about.story.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-charcoal-700">{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="flex h-full flex-col justify-center rounded-3xl bg-sage-200/35 px-5 py-6 sm:px-7 sm:py-8 lg:col-span-5">
            <h3 className="font-display text-xl font-semibold text-forest-800 sm:text-2xl">{about.whyTitle}</h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-forest-700">
              {about.whyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-forest-700 text-ivory-300">
        <div className="container-mj grid grid-cols-1 gap-6 py-8 sm:py-9 md:grid-cols-2 md:gap-10">
          <article className="md:pr-8 md:border-r md:border-sage-200/30">
            <h2 className="font-display text-xl font-semibold text-sage-200">{about.missionTitle}</h2>
            <p className="mt-2 max-w-xl leading-relaxed text-ivory-300">{about.mission}</p>
          </article>
          <article className="md:pl-1">
            <h2 className="font-display text-xl font-semibold text-sage-200">{about.visionTitle}</h2>
            <p className="mt-2 max-w-xl leading-relaxed text-ivory-300">{about.vision}</p>
          </article>
        </div>
      </section>

      <section className="bg-ivory-300">
        <div className="container-mj py-9 sm:py-11">
          <div className="mb-5 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.13em] text-forest-600">What we do</span>
            <h2 className="text-display-lg mt-3 text-forest-800">{about.capabilitiesTitle}</h2>
            <p className="mt-2 leading-relaxed text-charcoal-700">{about.capabilitiesIntro}</p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {about.capabilities.map((item, i) => (
              <article key={item.title} className="border-t border-sage-200 py-4 sm:py-5">
                <span className="font-display text-xs font-semibold tracking-wider text-forest-600">0{i + 1}</span>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-forest-800">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-50">
        <div className="container-mj py-9 sm:py-11">
          <div className="mb-5 max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.13em] text-forest-600">Our approach</span>
            <h2 className="text-display-lg mt-3 text-forest-800">{about.approachTitle}</h2>
            <p className="mt-2 leading-relaxed text-charcoal-700">{about.approachIntro}</p>
          </div>
          <ol className="grid grid-cols-1 gap-x-7 sm:grid-cols-2 lg:grid-cols-4">
            {about.approachSteps.map((step) => (
              <li key={step.number} className="border-t border-sage-200 py-4 sm:py-5">
                <span className="font-display text-sm font-bold text-forest-600">{step.number}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-forest-800">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ivory-300">
        <div className="container-mj flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-9">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.13em] text-forest-600">{about.audienceTitle}</span>
            <h2 className="text-display-lg mt-2 text-forest-800">For businesses building their next step.</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-charcoal-700">{about.audienceIntro}</p>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:max-w-[360px] sm:justify-end" aria-label="Mjenzi Digital clients">
            {about.audience.map((client) => (
              <li key={client} className="whitespace-nowrap font-display text-sm font-semibold text-forest-700">{client}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest-50">
        <div className="container-mj grid grid-cols-1 items-center gap-7 py-9 sm:py-11 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="text-sm font-semibold uppercase tracking-[0.13em] text-forest-600">{about.founderTitle}</span>
            <h2 className="text-display-lg mt-3 text-forest-800">{identity.founderName}</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal-700">{about.founderText}</p>
            <blockquote className="mt-5 max-w-2xl border-l-2 border-forest-600 py-1 pl-4">
              <p className="font-display text-lg font-medium italic leading-relaxed text-forest-700 sm:text-xl">“{about.philosophyText}”</p>
              <cite className="mt-2 block text-sm not-italic text-forest-600">Alex Muthama’s personal philosophy</cite>
            </blockquote>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal-700">{about.philosophyBody}</p>
          </div>
          <figure className="mx-auto w-full max-w-[320px] lg:col-span-5 lg:max-w-[360px]">
            <div className="overflow-hidden bg-sage-200/30">
              <ImagePlaceholder
                src={images.aboutPhoto}
                alt={`${identity.founderName}, founder of Mjenzi Digital`}
                aspectRatio="aspect-[29/36]"
                fit="contain"
                label={about.photoPlaceholder}
                className="[&>img]:!p-0"
              />
            </div>
            <figcaption className="mt-2 text-sm font-medium text-forest-700">{identity.founderName} · Founder, Mjenzi Digital</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-sage-200/70 bg-ivory-300" aria-labelledby="about-stats-heading">
        <div className="container-mj py-8 sm:py-9">
          <div className="mb-5 text-center">
            <h2 id="about-stats-heading" className="font-display text-2xl font-semibold text-forest-800">A clear way of working</h2>
            <p className="mt-1.5 text-sm text-charcoal-700">A snapshot of our services, approach, and the businesses we support.</p>
          </div>
          <ul className="mx-auto grid max-w-3xl grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 sm:gap-6" aria-label="About Mjenzi Digital">
            {aboutStats.map((stat, i) => (
              <li
                key={stat.label}
                className={`flex aspect-square w-full max-w-[190px] flex-col items-center justify-center rounded-full border border-forest-700 bg-forest-700 px-3 text-center ${i === aboutStats.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <span className="font-display text-3xl font-semibold leading-none tabular-nums text-ivory-300 sm:text-4xl">{stat.value}</span>
                <span className="mt-2 max-w-[10rem] text-xs leading-snug text-forest-50 sm:text-sm">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest-800 text-ivory-300">
        <div className="container-mj flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-9">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">{about.closingTitle}</h2>
            <p className="mt-2 leading-relaxed text-forest-50">{about.closingText}</p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0 self-start sm:self-auto">
            Talk with Mjenzi
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
