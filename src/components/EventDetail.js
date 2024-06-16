import React from 'react';

const EventDetail = ({ event }) => {
    return (
        <div className="md:w-[60%] p-4 bg-teal-400 md:rounded-l-lg rounded-t-lg md:rounded-tr-none" >
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded" />
            <div className="mt-4">
                {/* <p className="text-blue-600">Detail</p> */}
                <h2 className="text-2xl font-bold">{event.title}</h2>
                <p className="text-gray-600">{event.date}</p>
                <p className="mt-4">{event.detail}</p>
            </div>
        </div>
    );
};

export default EventDetail;
