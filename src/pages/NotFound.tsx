import { Link } from 'react-router-dom';
import { Home, ArrowRight, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="animate-fade-in">
      <section className="bg-ivory-300 relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-400/5 rounded-full blur-3xl" />
        <div className="container-mj relative py-20 text-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-forest-800 text-lime-400 mx-auto mb-8">
            <Compass className="w-8 h-8" />
          </div>
          <p className="font-display font-bold text-7xl md:text-8xl text-forest-800 mb-4">404</p>
          <h1 className="text-display-lg text-charcoal-900 mb-4">
            This page does not exist
          </h1>
          <p className="text-lg text-charcoal-700 max-w-xl mx-auto mb-10 leading-relaxed">
            The page you are looking for may have been moved or never existed. Let us get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary text-base">
              <Home className="w-5 h-5" />
              Back to home
            </Link>
            <Link to="/work" className="btn-secondary text-base">
              Explore our work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
