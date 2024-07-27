import React, { useState } from 'react';
import { useTranslation } from '../utils/getTranslation';
import ServiceData from '../components/Services.json';

const Services = () => {
    const { t, language } = useTranslation();
    const [expandedService, setExpandedService] = useState(null);

    const handleCardClick = (service) => {
        // Log the clicked service to ensure it's being recognized
        console.log('Clicked service:', service);
        // Toggle the expansion of the clicked service
        setExpandedService(expandedService === service ? null : service);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-green-300 py-5">
            <h1 className="font-semibold text-2xl lg:text-3xl pb-5">SERVICES</h1>
            <div className="flex flex-wrap justify-center bg-green-300">
                {ServiceData.services.map((service, index) => (
                    <div key={index} className="w-full md:w-1/3 p-2">
                        <div
                            className="cursor-pointer bg-white p-4 rounded shadow-lg hover:bg-gray-100"
                            onClick={() => handleCardClick(service)}
                        >
                            <img
                                src={service.imageSrc}
                                alt={service.title[language] || "Service Image"}
                                className="w-full object-cover rounded"
                            />
                            <h2 className="text-xl font-bold mt-3">{service.title[language] || "Service Title"}</h2>
                            <p className="mt-2">{service.details[language] || "Service details not available"}</p>
                        </div>
                        {expandedService === service && (
                            <div className="mt-3 p-4 bg-white rounded shadow-md">
                                <p>{service.details[language]}</p>
                                <a
                                    href={service.link}
                                    className="text-blue-500 hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t('Learn More')}
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
