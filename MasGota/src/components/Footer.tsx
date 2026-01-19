import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-emerald-400" fill="currentColor" />
              <span className="text-2xl font-bold">MasGota</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu tienda de confianza para el cuidado y bienestar de tus mascotas en Jerez de la Frontera.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Calle Hijuela de la Canaleja, 13</li>
              <li>11406 Jerez de la Frontera</li>
              <li>Teléfono: +34 697 63 10 97</li>
              <li>Email: azuydani7@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MasGota. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
