export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/6568939/pexels-photo-6568939.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Perro en peluquería'
    },
    {
      url: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Gato siendo cuidado'
    },
    {
      url: 'https://images.pexels.com/photos/7210340/pexels-photo-7210340.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Peluquería profesional'
    },
    {
      url: 'https://images.pexels.com/photos/8434791/pexels-photo-8434791.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mascota feliz'
    },
    {
      url: 'https://images.pexels.com/photos/6001527/pexels-photo-6001527.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Productos para mascotas'
    },
    {
      url: 'https://images.pexels.com/photos/8434794/pexels-photo-8434794.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cuidado profesional'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras instalaciones y algunos de nuestros trabajos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
