import React, { useState, useEffect } from 'react';
import EventList from './EventList';
import EventDetail from './EventDetail';
import eventsData from './events.json';
import event1 from '../images/events/event1.jpeg'
const Events = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Simulate fetching data from JSON file
        setEvents(eventsData);
        setSelectedEvent(eventsData[0]);
    }, []);

    return (
        <div className='flex flex-col bg-green-300 items-center'>
            <h1 className='pt-10 text-3xl font-semibold'>EVENTS</h1>
            <div className="flex flex-col lg:flex-row m-5">
                {selectedEvent && <EventDetail event={selectedEvent} />}
                <EventList events={events} onSelect={setSelectedEvent} />
            </div>
        </div>

    );
};

export default Events;
