import React from 'react';

const EventList = ({ events, onSelect }) => {
    return (

        <div className="md:w-[40%] bg-green-900 text-white p-4 md:rounded-r-lg rounded-b-lg md:rounded-bl-none">
            {events.map((event) => (
                <div
                    key={event.id}
                    className="flex items-center p-2 mb-4 cursor-pointer hover:bg-green-700"
                    onClick={() => onSelect(event)}
                >
                    <img src={event.image} alt={event.title} className="w-16 h-16 mr-4 object-cover rounded" />
                    <div>
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <p className="text-sm">{event.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EventList;
