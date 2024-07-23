import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import background from './ivan-samkov.jpg';
import background from './images/gradient_design_2.PNG';
// import background from './images/Untitled_design_4.PNG';
import Button from "../ui-components/Button";

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    console.log('Response: ', todos);

    return (
        // <div style={{height: '650px'}}>
        <>
            <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${background})`, backgroundSize: '1366px 545px', zIndex: '-1' }}>
            </div>
            <div id="info" style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', padding: '40px 10px', rowGap: '150px' }}>
                <div>
                    <span style={{ fontSize: 'xxx-large', fontWeight: '500', fontVariantCaps: 'petite-caps', padding: '0px 20px' }} >Frontiernext</span> <br />
                    <span style={{ fontSize: 'xx-large', fontWeight: '300', padding: '0px 20px' }} >Your trusted partner for loan guidance</span>
                </div>
                <div>
                    <span style={{ fontSize: 'x-large', fontWeight: '300', padding: '0px 20px' }}>
                        Earn on every loan enquiry
                    </span> <br />
                    <div style={{ padding: '0px 20px' }}>
                        <Button bg="green"> Enquire Now </Button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default Home;