import axios from 'axios';
import React, { useState, useEffect } from 'react';

const About = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todosUri = `${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`;
        console.log('Todos URI: ', todosUri);
        axios.get(todosUri)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('About Response: ', todos);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <h1>Data from MongoDB</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>{todo.task} - {todo.completed ? 'true' : 'false'}</li>
                ))}
            </ul>
        </div>
    );
};

export default About;