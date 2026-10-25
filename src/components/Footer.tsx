import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { footer, nav, contact, identity } from '@/content';

export default function Footer() {
  return (
    <footer className="bg-forest-800 text-ivory-300 mt-24">
      <div className="container-mj py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5 rounded-xl bg-ivory-300/95 px-4 py-3 w-fit">
              <img
                src="/MJENZI_Digital_Growth_Logo.png"
                alt={`${identity.brandName} logo`}
                className="w-[220px] h-auto object-contain"
              />
            </div>
            <p className="text-lime-400 font-display text-xl font-semibold mb-3">
              {footer.tagline}
            </p>
            <p className="text-sage-200 text-sm leading-relaxed max-w-md">
              {footer.philosophy}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-sage-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {nav.links.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className="text-ivory-300/80 hover:text-lime-400 text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-sage-300 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-ivory-300/80 hover:text-lime-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ivory-300/80 hover:text-lime-400 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ivory-300/80 hover:text-lime-400 text-sm transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-ivory-300/80 hover:text-lime-400 text-sm transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-700/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sage-300 text-xs">
            &copy; {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="text-sage-300 text-xs flex items-center gap-1">
            {identity.brandName} - {identity.location}
            <ArrowUpRight className="w-3 h-3" />
          </p>
        </div>
      </div>
    </footer>
  );
}
