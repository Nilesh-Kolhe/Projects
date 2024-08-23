import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../ui-components/Button';
import { useNavigate } from "react-router-dom";
import AboutBackground from './images/Whoweare-1.jpg';
import './About.css';

const About = () => {

    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const todosUri = `${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`;
        console.log('Todos URI: ', todosUri);
        axios.get(todosUri)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('About Response: ', todos);

    return (
        <div id="about">
            <div style={{ width: '100%', height: '100%', backgroundImage: `url(${AboutBackground})`, backgroundSize: '1350px 910px' }}>
            </div>
            <p id='about-para'>
                <span style={{ fontWeight: '700' }}>Finwizz</span> is the partner to top Premier Institutions serving you with the best possible deals
                from the basket of loans we provide. Your trust is our biggest asset – Something you can bank on !
            </p>
            <Button onClick={() => navigate("/aboutus")}>Read More</Button>
        </div>
    );
};

export default About;