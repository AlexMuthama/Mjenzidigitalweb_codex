import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

interface ProjectCardProps {
  slug: string;
  name: string;
  category: string;
  status: string;
  cover: string | null;
  summary: string;
}

const statusStyles: Record<string, string> = {
  'In progress': 'bg-lime-400 text-forest-800',
  Concept: 'bg-sage-200 text-forest-800',
  Demo: 'bg-forest-200 text-forest-800',
  Completed: 'bg-forest-500 text-ivory-300',
};

export default function ProjectCard({ slug, name, category, status, cover, summary }: ProjectCardProps) {
  return (
    <Link to={`/work/${slug}`} className="block group">
      <article className="card overflow-hidden h-full">
        <div className="relative">
          <ImagePlaceholder
            src={cover}
            alt={name}
            aspectRatio={slug === 'embu-fashion-weekend-2026' ? 'aspect-video' : 'aspect-[16/10]'}
            label={`Cover image for ${name}`}
            fit={slug === 'embu-fashion-weekend-2026' ? 'contain' : 'cover'}
            blurredBackground={slug === 'embu-fashion-weekend-2026'}
            className="rounded-none rounded-t-xl"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status] || 'bg-sage-200 text-forest-800'}`}>
              {status}
            </span>
          </div>
        </div>
        <div className="p-6">
          <p className="text-xs font-medium text-sage-400 uppercase tracking-wider mb-2">{category}</p>
          <h3 className="font-display font-semibold text-lg text-charcoal-900 leading-snug mb-2">{name}</h3>
          <p className="text-sm text-charcoal-700 leading-relaxed mb-4">{summary}</p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-forest-600 group-hover:text-forest-800 transition-colors">
            View case study
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </article>
    </Link>
  );
}
