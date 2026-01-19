import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cómo encontrarnos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ven a visitarnos, estaremos encantados de atenderte
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Dirección</h3>
                <p className="text-gray-700">
                  Calle Hijuela De La Canaleja, 13<br />
                  11406 Jerez de la Frontera, Cádiz
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Horario</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Lunes a Viernes: 9:30 - 13:30 / 16:00 - 20:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Teléfono y WhatsApp</h3>
                <a href="tel:+34697631097" className="text-gray-700 hover:text-emerald-600 transition-colors">
                  +34 697 63 10 97
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">Email</h3>
                <a href="mailto:info@masgota.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  azuydani7@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-4">Síguenos en redes sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/masgota13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/MasGota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12799.29485232591!2d-6.120893549999999!3d36.6787394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc74c034bfb99%3A0x80070aff748bfdc9!2sMasGota!5e0!3m2!1ses!2ses!4v1768848999214!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación MasGota"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

