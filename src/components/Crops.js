import React from 'react';
import CropCard from './CropCard';
import cropData from './cropData.json';

const Crops = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center bg-teal-200">
      <h1 className="font-semibold text-2xl lg:text-4xl">Major Crops</h1>
      <div className="container mx-auto mt-8 flex flex-wrap gap-4">
        {cropData.crops.map((crop, index) => (
          <CropCard
            key={index}
            imageUrl={crop.imageUrl}
            title={crop.title}
            description={crop.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Crops;
