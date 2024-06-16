import './App.css';
import React, { Component } from 'react'
import { Routes, Route, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Aboutpage from './Pages/Aboutpage'

export default class App extends Component {
  render() {

    return (
      <div>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
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

