
// App.jsx
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ActivityCard from './ActivityCard';
import ActivityData from './Activities.json';

const Activities = () => {
    const defaultSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const [sliderSettings, setSliderSettings] = useState(defaultSettings);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            let slidesToShow = 5;

            if (screenWidth <= 768) {
                slidesToShow = 2;
            } else if (screenWidth <= 1024) {
                slidesToShow = 4;
            }

            setSliderSettings(prevSettings => ({ ...prevSettings, slidesToShow }));
        };

        handleResize(); // Call once to set initial settings
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col items-center bg-green-300">
            <h1 className="font-semibold text-xl lg:text-2xl pt-5">Activities</h1>
            <div className="container mx-auto mt-8">
                <Slider {...sliderSettings}>
                    {ActivityData.activities.map((crop, index) => (
                        <div key={index} className="px-2"> {/* Add some padding for spacing */}
                            <ActivityCard
                                imageSrc={crop.imageSrc}
                                title={crop.title}
                                details={crop.details}
                                link={crop.link}
                                date={crop.date} // Assuming you meant crop.date
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Activities;


// import React, { useState, useEffect } from 'react';
// import ActivityData from './Activities.json'; // Import your activity data

// const Activities = () => {
//     const cardHeight = 150; // Height of each activity card (in pixels)
//     const containerHeight = 3 * cardHeight; // Height of the container (3 cards visible at a time)

//     const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
//     const [visibleActivityIndices, setVisibleActivityIndices] = useState([]);

//     // Automatically scroll through activities
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentActivityIndex((prevIndex) =>
//                 prevIndex === ActivityData.activities.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 5000); // Change the interval as needed (milliseconds)

//         return () => clearInterval(interval);
//     }, []);

//     // Calculate the indices for visible cards
//     useEffect(() => {
//         const startIndex = Math.max(0, currentActivityIndex - 1);
//         const endIndex = Math.min(ActivityData.activities.length - 1, currentActivityIndex + 1);
//         const visibleIndices = [];

//         for (let i = startIndex; i <= endIndex; i++) {
//             visibleIndices.push(i);
//         }

//         setVisibleActivityIndices(visibleIndices);
//     }, [currentActivityIndex]);

//     return (
//         <div className="activities-container flex" style={{ height: containerHeight }}>
//             <div className="left-section flex flex-col justify-center items-center w-[60%] overflow-y-auto" style={{ height: containerHeight }}>
//                 {/* Display cards with title, date, and details */}
//                 {ActivityData.activities.map((activity, index) => (
//                     <div
//                         key={index}
//                         className={`activity-card p-4 mb-4 ${visibleActivityIndices.includes(index) ? 'opacity-100' : 'opacity-0'} ${index === currentActivityIndex ? 'border-blue-200 border-8 active' : 'border-emerald-200 border-4 inactive'}`}
//                         style={{ height: cardHeight, transition: 'opacity 0.5s ease' }}
//                     >
//                         <h2 className="text-xl font-bold mb-2">{activity.title}</h2>
//                         <p className="text-sm">Date: {activity.date}</p>
//                         <p className="text-sm">{activity.details}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className="right-section w-[40%]">
//                 {/* Display image corresponding to the top card */}
//                 <img className="w-full h-auto" src={ActivityData.activities[currentActivityIndex].imageSrc} alt={ActivityData.activities[currentActivityIndex].title} />
//             </div>
//         </div>
//     );
// };

// export default Activities;
