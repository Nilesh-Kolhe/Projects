import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
import Button from '../ui-components/Button';

const Login = ({ loginChange }) => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('Admin Login Response: ', todos);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', width: '100%', margin: '0px 0px', overflow: 'auto' }}>
            <h2> This is Login </h2>
            <Button onClick={() => loginChange(true)}> Login </Button>
        </div>
    );
};

export default Login;