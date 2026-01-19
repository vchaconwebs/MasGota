import { ShoppingBag, Scissors, Check } from 'lucide-react';

export default function Services() {
  const shopServices = [
    'Alimentación premium',
    'Accesorios y complementos',
    'Juguetes interactivos',
    'Productos de higiene y cuidado',
    'Snacks y premios',
    'Camas y transportines'
  ];

  const groomingServices = [
    'Baño completo',
    'Corte de pelo profesional',
    'Deslanado',
    'Corte de uñas',
    'Limpieza de oídos',
    'Tratamientos especiales'
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que tu mascota necesita en un solo lugar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 text-white">
              <ShoppingBag className="w-16 h-16 mb-4" />
              <h3 className="text-3xl font-bold mb-2">Tienda de Mascotas</h3>
              <p className="text-emerald-100">
                Productos seleccionados de las mejores marcas
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {shopServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
              <Scissors className="w-16 h-16 mb-4" />
              <h3 className="text-3xl font-bold mb-2">Peluquería Canina</h3>
              <p className="text-blue-100">
                Resultados profesionales y seguros
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {groomingServices.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
