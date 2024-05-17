// App.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServiceData from './Services.json';


const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-green-300 py-5">
            <h1 className="font-semibold text-2xl lg:text-3xl pb-5">Services</h1>
            <div className="flex flex-wrap justify-center bg-green-300">
                {ServiceData.services.map((crop, index) => (
                    <div key={index}>
                        <ServiceCard
                            imageSrc={crop.imageSrc}
                            title={crop.title}
                            details={crop.details}
                            link={crop.link}
                        />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Services;
