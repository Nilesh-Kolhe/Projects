import './SideNav.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const SideNav = () => {
    const navigate = useNavigate();
    return (
        <div className='sidenav'>
            <ul className='side-nav-list'>
                <li onClick={() => navigate("/dashboard")}>
                    <i class="bi bi-house-fill"></i>
                    <span style={{ fontWeight: 700, marginLeft: 10 }}> Home </span>
                </li>
                <li style={{backgroundColor: '#FFF', padding: 0.5, height: 0}}>
                </li>
                <li onClick={() => navigate("/home")}>
                    <i class="bi bi-info-circle-fill"></i>
                    <span style={{ fontWeight: 700, marginLeft: 10 }}> About </span>
                </li>
                <li onClick={() => navigate("/home")}>
                    <i class="bi bi-bookmarks-fill"></i>
                    <span style={{ fontWeight: 700, marginLeft: 10 }}> Docs </span>
                </li>
                <li style={{backgroundColor: '#FFF', padding: 0.5, height: 0}}></li>
            </ul>
            {/* <hr style={{ color: '#FFF' }} />
            <a href="#"><i class="bi bi-house-fill"></i> <span style={{ fontWeight: 700, marginLeft: 10 }}> Home </span> </a>
            <hr style={{ color: '#FFF' }} />
            <a href="#"><i class="bi bi-info-circle-fill"></i><span style={{ fontWeight: 700, marginLeft: 10 }}> About </span></a>
            <hr style={{ color: '#FFF' }} />
            <a href="#"><i class="bi bi-bookmarks-fill"></i><span style={{ fontWeight: 700, marginLeft: 10 }}> API Docs </span></a>
            <hr style={{ color: '#FFF', marginBottom: 0 }} /> */}
        </div>
    );
}

export default SideNav;