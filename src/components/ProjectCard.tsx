import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

interface ProjectCardProps {
  slug: string;
  name: string;
  category: string;
  status: string;
  cover: string | null;
  summary: string;
  fullDescription?: string;
  demoLinks?: { label: string; url: string }[];
}

const statusStyles: Record<string, string> = {
  'In progress': 'bg-lime-400 text-forest-800',
  Concept: 'bg-sage-200 text-forest-800',
  Demo: 'bg-forest-200 text-forest-800',
  Completed: 'bg-forest-500 text-ivory-300',
};

export default function ProjectCard({ slug, name, category, status, cover, summary, fullDescription, demoLinks }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionId = `project-description-${slug}`;

  return (
    <article className="card overflow-hidden h-full">
      <Link to={`/work/${slug}`} className="block group">
        <div className="relative">
          <ImagePlaceholder
            src={cover}
            alt={name}
            aspectRatio={slug === 'embu-fashion-weekend-2026' ? 'aspect-video' : 'aspect-[16/10]'}
            label={`Cover image for ${name}`}
            fit={slug === 'embu-fashion-weekend-2026' || slug === 'marine-retreat-vlog' ? 'contain' : 'cover'}
            blurredBackground={slug === 'embu-fashion-weekend-2026'}
            className={`rounded-none rounded-t-xl ${slug === 'marine-retreat-vlog' ? '[&>img]:!p-0' : ''}`}
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status] || 'bg-sage-200 text-forest-800'}`}>
              {status}
            </span>
          </div>
        </div>
        <div className="p-6 pb-3">
          <p className="text-xs font-medium text-sage-400 uppercase tracking-wider mb-2">{category}</p>
          <h3 className="font-display font-semibold text-lg text-charcoal-900 leading-snug mb-2">{name}</h3>
          <p className="text-sm text-charcoal-700 leading-relaxed">{summary}</p>
        </div>
      </Link>
      <div className="px-6 pb-6">
        {fullDescription && (
          <p id={descriptionId} hidden={!isExpanded} className="text-sm text-charcoal-700 leading-relaxed mb-4">
            {fullDescription}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {fullDescription && (
            <button
              type="button"
              aria-expanded={isExpanded}
              aria-controls={descriptionId}
              onClick={() => setIsExpanded((expanded) => !expanded)}
              className="inline-flex items-center gap-1 text-sm font-semibold text-forest-600 hover:text-forest-800 transition-colors"
            >
              {isExpanded ? 'View less' : 'View more'}
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          )}
          <Link to={`/work/${slug}`} className="group inline-flex items-center gap-1 text-sm font-semibold text-forest-600 hover:text-forest-800 transition-colors">
            View case study
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
      {demoLinks && demoLinks.length > 0 && (
        <div className="border-t border-forest-800/8 px-6 py-4 flex flex-col items-start gap-2">
          {demoLinks.map((demo) => (
            <a
              key={demo.url}
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-1.5 text-xs sm:text-sm font-semibold leading-snug text-forest-600 hover:text-forest-800 transition-colors"
            >
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 mt-px" />
              <span>{demo.label}</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
