import { Heart, Award, Users, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Amor por las mascotas',
      description: 'Cada animal es único y especial para nosotros'
    },
    {
      icon: Award,
      title: 'Productos de calidad',
      description: 'Seleccionamos las mejores marcas del mercado'
    },
    {
      icon: Users,
      title: 'Trato personalizado',
      description: 'Atención dedicada para cada cliente y mascota'
    },
    {
      icon: Sparkles,
      title: 'Higiene y bienestar',
      description: 'Instalaciones limpias y servicios profesionales'
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre MasGota
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                En <span className="font-semibold text-emerald-600">MasGota</span>, somos más que una tienda de mascotas.
                Somos un equipo de profesionales apasionados por el bienestar animal, comprometidos con ofrecer
                el mejor cuidado para tus compañeros peludos.
              </p>
              <p>
                Con años de experiencia en el sector, nos hemos convertido en el punto de referencia en
                Jerez de la Frontera para todo lo relacionado con el cuidado de mascotas. Desde alimentación
                de calidad hasta servicios de peluquería profesional, estamos aquí para ayudarte.
              </p>
              <p>
                Creemos que cada mascota merece el mejor trato, por eso trabajamos con dedicación,
                cariño y profesionalidad en cada servicio que ofrecemos.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
