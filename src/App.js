import './App.css';
import React, { Component } from 'react'
import { Routes, Route, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Aboutpage from './Pages/Aboutpage'
import Servicepage from './Pages/Servicepage'
import Contactpage from './Pages/Contactpage';
import ContactBar from './components/ContactBar';
import LanguageSwitcher from './components/LanguageSwitcher';

export default class App extends Component {
  render() {

    return (
      <div>

        <BrowserRouter>

          <Navbar />
          <ContactBar />
          <LanguageSwitcher />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/services" element={<Servicepage />} />
            <Route path="/contact" element={<Contactpage />} />
          </Routes>
          <Footer />
        </BrowserRouter>

        {/* <Cards /> */}
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

