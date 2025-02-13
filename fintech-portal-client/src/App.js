import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Enquiry from "./pages/Enquiry";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import TopNav from "./components/TopNav";
import PersonalLoan from "./pages/PersonalLoan";
import Track from "./pages/Track";
import TopMostNav from "./components/TopMostNav";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 min-h-screen">
      <BrowserRouter>
        <TopMostNav />
        <TopNav />
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Navigate to="landing" />} />
            <Route path="landing" element={<Landing />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="enquiry" element={<Enquiry />} />
            {["enquiry", "enquiry/:contact"].map((path) => (
              <Route path={path} element={<Enquiry />} />
            ))}
            {["track", "track/:id"].map((path) => (
              <Route path={path} element={<Track />} />
            ))}
            <Route path="personalloan" element={<PersonalLoan />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
