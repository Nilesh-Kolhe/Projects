import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    // const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('Admin Home Response: ', todos);

    return (
        <>
            <div>
            <span style={{ fontSize: '50px', fontWeight: '500', fontFamily: 'ui-serif', padding: '0px 2px', color: '#000' }} >This is Admin Home</span>
            </div>
        </>
    );
};

export default Home;