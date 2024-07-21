import axios from 'axios';
import React, { useState, useEffect } from 'react';
import background from './contact1.jpg';

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('Response: ', todos);

    return (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div id="info">
                    <p>This is Info about the service one provided by the Fintech solutions</p>
                </div>
                <div id="image">
                    <img src={background} />
                </div>
            </div>
            <div> </div>
            <div> </div>
        </div>
        // </div>
    );
};

export default Home;