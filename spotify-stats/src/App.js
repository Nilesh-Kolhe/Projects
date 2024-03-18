import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/navbar/NavBar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;
