import axios from 'axios';
import React, { useState, useEffect } from 'react';
import background from './ivan-samkov.jpg';

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('Response: ', todos);

    return (
        <div style={{height: '650px'}}>
            <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${background})`, backgroundSize: '1400px 700px', filter: 'blur(0px)', zIndex: '-1' }}>
            </div>
            <div id="info" style={{ height: '100%', width: '100%', padding: '40px 10px' }}>
                <h1>We do not Promise to Deliver</h1>
                <h3>We Deliver the Promise</h3>
            </div>
        </div>
    );
};

export default Home;