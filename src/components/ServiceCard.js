// ImageOverlayCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ImageOverlayCard = ({ imageSrc, title, details, link }) => {
    return (
        <Link to={link} className="block group">
            <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer" style={{ width: '300px', height: '400px', margin: '20px' }}>
                <img src={imageSrc} alt="Overlay" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xl font-bold text-white transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                        {title}
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {details}
                </div>
            </div>
        </Link>
    );
};

export default ImageOverlayCard;
