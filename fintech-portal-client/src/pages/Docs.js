import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Docs = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.FINTECH_SERVER_URL}/todos`)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('Docs Response: ', todos);

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

export default Docs;