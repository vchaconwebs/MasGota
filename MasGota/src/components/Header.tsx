import { Heart, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-emerald-600" fill="currentColor" />
            <span className="text-2xl font-bold text-gray-900">MasGota</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-700 hover:text-emerald-600 transition-colors">Inicio</a>
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-emerald-600 transition-colors">Nosotros</a>
            <a href="#servicios" className="text-gray-700 hover:text-emerald-600 transition-colors">Servicios</a>
            <a href="#galeria" className="text-gray-700 hover:text-emerald-600 transition-colors">Galería</a>
            <a href="#contacto" className="text-gray-700 hover:text-emerald-600 transition-colors">Contacto</a>
          </nav>

          <a
            href="tel:+34697631097"
            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Llamar</span>
          </a>
        </div>
      </div>
    </header>
  );
}
