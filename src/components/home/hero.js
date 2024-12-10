import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp',
      caption: 'Delicious Chocolate Cake',
    },
    {
      image: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp',
      caption: 'Fresh Strawberry Cake',
    },
    {
      image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
      caption: 'Tasty Vanilla Cake',
    },
    {
      image: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp',
      caption: 'Yummy Red Velvet Cake',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-80 overflow-hidden">
      <div className="absolute inset-0 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-black bg-opacity-50 p-4 rounded text-white text-center">
              <h2 className="text-xl font-bold">{slide.caption}</h2>
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">Order Now</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">&#10094;</button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">&#10095;</button>
    </div>
  );
};

export default Hero;
