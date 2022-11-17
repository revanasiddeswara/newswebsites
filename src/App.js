// import logo from './logo.svg';
import './App.css';


  import React, { Component } from 'react'
import Navbar from './component/Navbar';
import Newsbody from './component/Newsbody';
import Footer from './component/Footer';
import {
  BrowserRouter,
  Route,
  Routes,


} from "react-router-dom";
document.title="ವೃತ್ತಾಂತ"
      setInterval(() => {
        document.title="top news"
      },2000);
      setInterval(() => {
        document.title="ವೃತ್ತಾಂತ"
      },1000);
      setInterval(() => {
        document.title="Breaking news"
      },1500);
  export class App extends Component { 
    
    pageSize=6;
    render() {
      return (
        <div> 
          
          <BrowserRouter>
          <Navbar />

          <Routes> 
          <Route exact path="/" element = {<Newsbody key="general" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route exact path="/business" element={<Newsbody key="business" pageSize={this.pageSize} country="in" category="Business"/>}/> 
          <Route exact path="/entertainment" element={<Newsbody key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/> 
          <Route exact path="/general" element={<Newsbody key="general" pageSize={this.pageSize} country="in" category="General"/>}/> 
          <Route exact path="/health" element={<Newsbody key="health" pageSize={this.pageSize} country="in" category="Health"/>}/> 
          <Route exact path="/science" element={<Newsbody key="science" pageSize={this.pageSize} country="in" category="Science"/>}/> 
          <Route exact path="/sports" element={<Newsbody key="sports" pageSize={this.pageSize} country="in" category="Sports"/>}/> 
          <Route exact path="/technology" element={<Newsbody key="technology" pageSize={this.pageSize} country="in" category="Technology"/>}/> 
          {/* <Route exact path="/" element = {<Newsbody key="us" pageSize={this.pageSize} country="us" category="us"/>}/> */}

        </Routes> 
          </BrowserRouter> 
          <Footer/>
        </div>
      )
    }
  }
  
  
  
export default App;
