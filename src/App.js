
import './App.css';
import React, { Component } from 'react'
import { Routes, Route, Router } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Homepage from './Pages/Homepage';


export default class App extends Component {


  render() {

    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage/>} />
          </Routes>
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

