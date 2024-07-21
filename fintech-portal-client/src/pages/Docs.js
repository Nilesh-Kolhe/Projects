import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Docs = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('Docs Response: ', todos);

    return (
        <div>
            <h1>MERN Stack Todo App</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>{todo.task} - {todo.completed ? 'true' : 'false'}</li>
                ))}
            </ul>
        </div>
    );
};

export default Docs;