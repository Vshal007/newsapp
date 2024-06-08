import React from 'react';
import { Link } from 'react-router-dom';

const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    }
    return text;
};

const ImageOverlayCard = ({ title, details, imageSrc, date, link }) => {
    const truncatedDetails = truncateText(details, 30);

    return (
        <Link to={link} className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 block mx-5 mb-8">
            <img src={imageSrc} alt={title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center">
                <div className="text-center text-white p-4">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-sm mb-2 break-words max-w-[200px] group-hover:opacity-0">{truncatedDetails}</p>
                    {date && <p className="text-xs text-gray-300">{date}</p>}
                </div>
            </div>
        </Link>
    );
};

export default ImageOverlayCard;
