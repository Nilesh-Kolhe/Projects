import './App.css';
import Home from './pages/Home';
import Enquiry from './pages/Enquiry';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopMostNav from './components/TopMostNav';
import TopNav from './components/TopNav';
import { Navigate } from 'react-router-dom';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App" style={{ height: '100%', width: '100%' }}>
      <BrowserRouter>
        <TopMostNav />
        <TopNav />
        <div style={{ display: 'flex', columnGap: '50px', height: '100%', width: '100%', margin: '0px 0px', overflow: 'auto' }}>
          <SideNav />
          <div style={{ width: '100%', marginTop: '10px' }}>
            <Routes>
              <Route path="/" element={<Navigate to="login" />} />
              {/* <Route path="login" element={<Login />} /> */}
              <Route path="home" element={<Home />} />
              <Route path="enquiries" element={<Enquiry />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter >
    </div>
  );
}

export default App;
