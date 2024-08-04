import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../ui-components/Button';
import { useNavigate } from "react-router-dom";

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
        <div id="about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <h1>This is About Page</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>{todo.task} - {todo.completed ? 'true' : 'false'}</li>
                ))}
            </ul>
            <Button onClick={() => navigate("/aboutus")}>Read More</Button>
        </div>
    );
};

export default About;