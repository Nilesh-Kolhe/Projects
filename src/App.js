import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import SideNav from './components/SideNav/SideNav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div style={{ display: 'flex', height: '100%' }}>
          <SideNav />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}

export default App;
