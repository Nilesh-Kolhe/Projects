import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Partners.css';
import SBI from './images/banks/SBI.png';
import ICICI from './images/banks/ICICI.png';
import Yes from './images/banks/Yes.png';
import Indian from './images/banks/Indian.png';
import Axis from './images/banks/Axis.png';
import Kotak from './images/banks/Kotak.png';
import BOI from './images/banks/BOI.png';
import CBI from './images/banks/CBI.png';

const Partners = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todosUri = `${process.env.REACT_APP_FINTECH_SERVER_URL}/todos`;
        console.log('Todos URI: ', todosUri);
        axios.get(todosUri)
            .then(response => setTodos(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div id="partners">
            <span id='headline'>Our Partners</span>
            <span id='sub-heading' style={{ fontStyle: 'italic', fontWeight: '100' }} >&quot;Empowering your financial journey with trusted partnership from leading banks.&quot;</span>
            <div style={{ display: 'flex', rowGap: '40px', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <img className='bank-image' src={SBI} />
                    <img className='bank-image' src={ICICI} />
                    <img className='bank-image' src={Yes} />
                </div>
                <div>
                    <img className='bank-image' src={Indian} />
                    <img className='bank-image' src={Axis} />
                    <img className='bank-image' src={Kotak} />
                </div>
                <div>
                    <img className='bank-image' src={BOI} />
                    <img className='bank-image' src={CBI} />
                </div>
            </div>
        </div>
    );
};

export default Partners;