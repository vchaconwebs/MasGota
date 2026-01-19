import { Calendar, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Tu mascota se merece lo mejor
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Déjanos cuidar de tu mejor amigo con el cariño y la profesionalidad que se merece
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            Reserva tu cita ahora
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-800 transition-all hover:scale-105 shadow-xl"
          >
            <MapPin className="w-5 h-5" />
            Ven a MasGota
          </a>
        </div>
      </div>
    </section>
  );
}
