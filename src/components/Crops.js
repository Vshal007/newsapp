import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CropCard from './CropCard';
import cropData from './cropData.json';

const Crops = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5, // Default number of slides to show
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setSliderSettings({ ...sliderSettings, slidesToShow: 2 });
      } else if (screenWidth <= 1024) {
        setSliderSettings({ ...sliderSettings, slidesToShow: 4 });
      } else {
        setSliderSettings({ ...sliderSettings, slidesToShow: 5 });
      }
    };

    handleResize(); // Call once to set initial settings
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="p-5 flex flex-col justify-center items-center bg-teal-200">
      <h1 className="font-semibold text-2xl lg:text-4xl pb-10">Major Crops</h1>

      <h1 className="font-semibold text-xl lg:text-2xl pt-5">Cash Crops</h1>
      <div className="container mx-auto mt-8">
        <Slider {...sliderSettings}>
          {cropData.cashCrops.map((crop, index) => (
            <div key={index}>
              <CropCard
                imageUrl={crop.imageUrl}
                title={crop.title}
                description={crop.description}
              />
            </div>
          ))}
        </Slider>
      </div>

      <h1 className="font-semibold text-xl lg:text-2xl pt-20">Vegetables</h1>
      <div className="container mx-auto mt-8">
        <Slider {...sliderSettings}>
          {cropData.vegetables.map((crop, index) => (
            <div key={index}>
              <CropCard
                imageUrl={crop.imageUrl}
                title={crop.title}
                description={crop.description}
              />
            </div>
          ))}
        </Slider>
      </div>

      <h1 className="font-semibold text-xl lg:text-2xl pt-20">Fruits</h1>
      <div className="container mx-auto mt-8">
        <Slider {...sliderSettings}>
          {cropData.fruits.map((crop, index) => (
            <div key={index}>
              <CropCard
                imageUrl={crop.imageUrl}
                title={crop.title}
                description={crop.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Crops;
