import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Enquiry from './pages/Enquiry';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMostNav from './components/TopMostNav';
import TopNav from './components/TopNav';
import { Navigate } from 'react-router-dom';
import SideNav from './components/SideNav';

const App = () => {
  const [profile, setProfile] = useState({});

  const setLoggedinProfile = (profile) => {
    setProfile(profile);
    console.log('Profile: ', profile);
  }

  return (
    <div className="App" style={{ height: '100%', width: '100%' }}>
      <BrowserRouter>
        <TopMostNav />
        <TopNav profile={profile} />
        {(Object.keys(profile).length > 1) ?
          <>
            <div style={{ display: 'flex', columnGap: '50px', height: '100%', width: '100%', margin: '0px 0px', overflow: 'auto' }}>
              <SideNav />
              <div style={{ width: '100%', marginTop: '10px' }}>
                <Routes>
                  <Route path="/" element={<Navigate to="home" />} />
                  <Route path="home" element={<Home />} />
                  <Route path="enquiries" element={<Enquiry />} />
                </Routes>
              </div>
            </div>
          </>
          :
          <>
            <Login loginChange={(profile) => setLoggedinProfile(profile)} />
          </>}
      </BrowserRouter >
      <div style={{ color: 'red', fontSize: 'medium' }}>
        {profile.message ?? profile.message}
      </div>
    </div>
  );
}

export default App;