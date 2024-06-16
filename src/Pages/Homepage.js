import React from 'react'
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar/Navbar';
import Crops from '../components/Crops';
import Services from '../components/Services';
import Activities from '../components/Activities';
import Events from '../components/Events';


let slides = [
    "https://images.unsplash.com/photo-1484151709479-3996843263cf?h=500&w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    // "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    // "https://wallpapercave.com/wp/wp3386769.jpg",
    // "https://wallpaperaccess.com/full/809523.jpg",
    // "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    "https://images.unsplash.com/photo-1484151709479-3996843263cf?h=500&w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
];

const Homepage = () => {
    return (
        <div>
            <div className="w-[100%] z-0">
                <Carousel slides={slides} />
            </div>
            <Services />
            <Crops />
            {/* <Activities /> */}
            <Events/>
        </div>
    )
}

export default Homepage