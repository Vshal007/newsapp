import React from 'react';

const CropCard = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-[90%] md:w-[90%] lg:w-[90%] mx-auto mb-4 md:mb-0">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover object-center" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default CropCard;
