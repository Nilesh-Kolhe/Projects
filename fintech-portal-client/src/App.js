import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import Docs from "./pages/Docs";
import Track from "./pages/Track";
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import './App.css';
import TopMostNav from './components/TopMostNav';

const App = () => {
  return (
    <div className="App" style={{ height: '100%', width: '100%' }}>
      <BrowserRouter>
        <TopMostNav />
        <TopNav />
        <div style={{ display: 'flex', height: '100%', width: '100%', margin: '0px 0px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} /> For Local
            <Route path="home" element={<Home />} />
            <Route path="enquiry" element={<Enquiry />} />
            <Route path="docs" element={<Docs />} />
            {['track', 'track/:id'].map(path =>
              <Route path={path} element={<Track />} />
            )}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter >
    </div>
  );
};
export default App;