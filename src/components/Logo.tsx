import { Link } from 'react-router-dom';
import { identity } from '@/content';

const logoSource = '/MJENZI_Digital_Growth_Logo.png';

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center group"
      aria-label={`${identity.brandName} - home`}
    >
      <img
        src={logoSource}
        alt={`${identity.brandName} logo`}
        className="w-[168px] sm:w-[190px] h-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
      />
    </Link>
  );
}
