import { useState, useEffect } from "react";

const carouselData = [
  {
    image: "./1.png",
    caption: "Delicious Chocolate Cake",
    buttonText: "Order Now",
  },
  {
    image: "./2.png",
    caption: "Fresh Strawberry Cake",
    buttonText: "Order Now",
  },
  {
    image: "3.jpg",
    caption: "Tasty Vanilla Cake",
    buttonText: "Order Now",
  },
  {
    image: "4.jpg",
    caption: "Yummy Red Velvet Cake",
    buttonText: "Order Now",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Manually change slides
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] overflow-hidden group">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-cover transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${carouselData[currentSlide].image})`,
        }}
      >
        {/* Caption Text */}
        <div className="flex flex-col justify-around items-center w-full h-full text-white text-center px-4">
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 transform transition-all duration-500 ease-in-out drop-shadow-lg">
            {carouselData[currentSlide].caption}
          </h2> */}
          {/* <button className="bg-pink-500 mt-6 sm:mt-52 text-white py-2 px-6 text-sm sm:text-md md:text-lg lg:text-xl rounded-2xl  transition duration-300 ease-in-out">
            {carouselData[currentSlide].buttonText}
          </button> */}
        </div>
      </div>

      {/* Next and Previous buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hover:bg-opacity-75 shadow-xl sm:p-3 md:p-4 lg:p-5"
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          &larr;
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hover:bg-opacity-75 shadow-xl sm:p-3 md:p-4 lg:p-5"
      >
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          &rarr;
        </span>
      </button>
    </div>
  );
};

export default Carousel;
