import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Track from "./pages/Track";
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import './App.css';
import TopMostNav from './components/TopMostNav';

const App = () => {
  return (
    <div className="App" style={{ height: '100%', width: '100%' }}>

      <TopMostNav />
      <TopNav />
      <div style={{ height: '100%', width: '100%', margin: '0px 0px', overflow: 'auto' }}>
        <Home />
        <Partners />
        <Enquiry />
        <About />
        <Track />
      <Footer />
      </div>

      {/* <BrowserRouter>
        <TopMostNav />
        <TopNav />
        <div style={{ display: 'flex', height: '100%', width: '100%', margin: '0px 0px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="Partners" element={<Partners />} />
            <Route path="enquiry" element={<Enquiry />} />
            <Route path="about" element={<About />} />
            {['track', 'track/:id'].map(path =>
              <Route path={path} element={<Track />} />
            )}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter > */}
    </div>
  );
};
export default App;