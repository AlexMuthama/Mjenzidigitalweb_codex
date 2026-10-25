import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { nav, contact } from '@/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory-300/95 backdrop-blur-md border-b border-forest-800/8 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-mj flex items-center justify-between h-16 md:h-20">
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {nav.links.map((item) => {
            const active = location.pathname === item.link;
            return (
              <li key={item.link}>
                <Link
                  to={item.link}
                  className={`btn-ghost ${active ? 'text-forest-800 font-semibold' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Link to={nav.ctaButton.link} className="btn-primary text-sm">
            {nav.ctaButton.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-forest-800 hover:bg-forest-800/8 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-ivory-300 z-40 animate-fade-in overflow-y-auto">
          <div className="container-mj py-8 flex flex-col gap-2">
            {nav.links.map((item, i) => {
              const active = location.pathname === item.link;
              return (
                <Link
                  key={item.link}
                  to={item.link}
                  className={`flex items-center justify-between py-4 px-4 rounded-xl text-lg font-display font-semibold transition-all animate-slide-in ${
                    active
                      ? 'bg-forest-800 text-ivory-300'
                      : 'text-forest-800 hover:bg-forest-800/6'
                  }`}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {item.label}
                  <ArrowRight className="w-5 h-5 opacity-50" />
                </Link>
              );
            })}
            <Link to={nav.ctaButton.link} className="btn-primary mt-4 justify-center text-base">
              {nav.ctaButton.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="mt-6 pt-6 border-t border-forest-800/10">
              <p className="text-sm text-sage-400 font-medium mb-3">Get in touch</p>
              <div className="flex flex-col gap-2">
                {contact.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url.startsWith('http') ? s.url : `mailto:${s.url}`}
                    className="text-forest-800 hover:text-forest-600 font-medium text-sm"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
