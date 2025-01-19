import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Enquiry from "./pages/Enquiry";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import TopNav from './components/TopNav';
import './App.css';
import PersonalLoan from './pages/PersonalLoan';
import Track from './pages/Track';

const App = () => {
  return (
    <div className="App" style={{ height: '100%', width: '100%' }}>

      <BrowserRouter>
        {/* <TopMostNav /> */}
        <TopNav />
        <div style={{ height: '100%', width: '100%', margin: '0px 0px', overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<Navigate to="landing" />} />
            <Route path="landing" element={<Landing />} />
            <Route path="aboutus" element={<AboutUs />} />
            {/* <Route path="enquiry" element={<Enquiry />} /> */}
            {['enquiry', 'enquiry/:contact'].map(path =>
              <Route path={path} element={<Enquiry />} />
            )}
            {['track', 'track/:id'].map(path =>
              <Route path={path} element={<Track />} />
            )}
            <Route path="personalloan" element={<PersonalLoan />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div>
  );
};
export default App;