import React, { useRef, useEffect, useState } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  
  // Lista de imágenes para el carrusel
  const images = [
    '/carrusel01.jpeg', 
    '/carusel02.jpeg',
    '/carusel03.jpeg', 
    '/carusel04.jpeg',
    '/carusel05.jpeg',
    


  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia de imagen cada 10 segundos

    return () => clearInterval(intervalId); // Limpieza del intervalo al desmontar
  }, []);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
     <section className="w-full flex flex-col items-center">
  <div className="relative w-full max-w-md h-[400px] overflow-hidden flex items-center justify-center">
    
    <div
      ref={carouselRef}
      className="absolute flex transition-transform duration-700 ease-in-out h-full"
      style={{
        transform: `translateX(-${index * 100}%)`,
        width: `${images.length * 100}%`
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="w-full h-full flex-shrink-0 flex items-center justify-center"
        >
          <img
            className="w-full h-full object-contain rounded-2xl bg-white"
            src={src}
            alt={`Imagen ${i + 1}`}
          />
        </div>
      ))}
    </div>

    {/* Botones */}
    <button
      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white"
      onClick={prevImage}
    >
      ‹
    </button>

    <button
      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white"
      onClick={nextImage}
    >
      ›
    </button>
  </div>

  {/* Indicadores */}
  <div className="flex justify-center mt-4">
    {images.map((_, i) => (
      <span
        key={i}
        className={`h-2 w-2 mx-1 rounded-full transition ${
          index === i ? "bg-[#9E8E7B] scale-125" : "bg-gray-400"
        }`}
      />
    ))}
  </div>
</section>
  );
};

export default Carousel;
