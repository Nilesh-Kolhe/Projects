import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from "../ui-components/Button";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div id="home">
                <div className='info'>
                    <span className='info-head'>Frontiernext</span>
                    <br />
                    <span className='info-sub-head' >Your trusted partner for loan guidance</span>
                </div>
                <div className='info'>
                    <span style={{ fontSize: 'x-large', fontWeight: '300', padding: '0px 2px' }}>
                        Earn on every loan enquiry
                    </span> <br />
                    <div style={{ padding: '10px 1px' }}>
                        <Button bg="green" onClick={() => { navigate("/enquiry") }} > Apply Now </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;