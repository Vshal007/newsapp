import React from 'react';
import { useTranslation } from '../utils/getTranslation';

const EventDetail = ({ event }) => {
    const { t, language } = useTranslation();
    return (
        <div className="md:w-[60%] p-4 bg-teal-400 md:rounded-l-lg rounded-t-lg md:rounded-tr-none" >
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded" />
            <div className="mt-4">
                {/* <p className="text-blue-600">Detail</p> */}
                <h2 className="text-2xl font-bold">{event.title[language]}</h2>
                <p className="text-gray-600">{event.date}</p>
                <p className="mt-4">{event.detail[language]}</p>
            </div>
        </div>
    );
};

export default EventDetail;
