import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Mascotas felices"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Cuidamos a tu mascota<br />
          <span className="text-emerald-400">como si fuera nuestra</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10">
          Tienda y peluquería de mascotas en Jerez de la Frontera
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all hover:scale-105 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Pide tu cita
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            <MapPin className="w-5 h-5" />
            Visítanos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
