import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import background from './ivan-samkov.jpg';
import backgroundHorizontal from './images/gradient_design_2.PNG';
import backgroundVertical from './images/gradient_design_2_vertical.png';
// import background from './images/Untitled_design_4.PNG';
import Button from "../ui-components/Button";
import './Home.css';

const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('Response: ', todos);

    return (
        <>
            <div id="background-horizontal" style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${backgroundHorizontal})`, backgroundSize: '1366px 545px', zIndex: '-1' }}>
            </div>
            <div id="background-vertical" style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${backgroundVertical})`, zIndex: '-1' }}>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', padding: '40px 10px', rowGap: '150px' }}>
                <div className='info'>
                    <span style={{ fontSize: 'xxx-large', fontWeight: '500', fontVariantCaps: 'petite-caps', padding: '0px 2px' }} >Frontiernext</span> <br />
                    <span style={{ fontSize: 'xx-large', fontWeight: '300', padding: '0px 2px' }} >Your trusted partner for loan guidance</span>
                </div>
                <div className='info'>
                    <span style={{ fontSize: 'x-large', fontWeight: '300', padding: '0px 2px' }}>
                        Earn on every loan enquiry
                    </span> <br />
                    <div style={{ padding: '0px 1px' }}>
                        <Button bg="green"> Enquire Now </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;