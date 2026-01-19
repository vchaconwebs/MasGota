import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      text: 'Llevo a mi perro Luna desde hace años. El trato es excepcional y siempre sale preciosa de la peluquería. Totalmente recomendable.',
      rating: 5
    },
    {
      name: 'Carlos Ruiz',
      text: 'Excelente atención y productos de calidad. Mi gato está encantado con el nuevo pienso que me recomendaron. Gracias por el trato tan cercano.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      text: 'Profesionales de verdad. Cuidan a los animales con mucho cariño y respeto. La peluquería es impecable y los precios muy razonables.',
      rating: 5
    },
    {
      name: 'Javier López',
      text: 'Mi golden retriever tiene miedo al agua, pero en MasGota lo tratan con tanta paciencia que ahora el baño es mucho más fácil. Gracias.',
      rating: 5
    },
    {
      name: 'Laura Fernández',
      text: 'Encuentro todo lo que necesito para mis dos gatos. El personal es muy amable y siempre me dan buenos consejos. Una tienda de 10.',
      rating: 5
    },
    {
      name: 'Pedro Sánchez',
      text: 'La mejor peluquería canina de Jerez sin duda. Mi schnauzer siempre sale como nuevo. Instalaciones limpias y personal cualificado.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
