
import './App.css';
import React, { Component } from 'react'
import Responsive from './components/Responsive';
import Button from './components/Button';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import DropdownHover from './components/DropdownHover';
import DropdownBar from './components/DropdownBar';
import Navbar from './components/Navbar/Navbar';


let slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];
export default class App extends Component {


  render() {

    return (
      <div>

        <Navbar />
        <div className="w-[100%]">
          <Carousel slides={slides} />
        </div>
        <Cards />
        <Footer />
        {/* <DropdownHover/>
         <DropdownBar/>
         <Carousel/>
         <Cards/>
         <Cards/>
         <Footer/> */}
        {/* <Responsive/>
         <Button/> */}
      </div>
    )
  }
}

