import './Enquiry.css';
import { useState, useRef } from "react";
import contact from './images/Untitled_design_8.PNG';
import call from './images/Enq.jpg';
import Footer from '../components/Footer';
import Button from '../ui-components/Button';

const Enquiry = () => {
    let fnameRef = useRef();
    let lnameRef = useRef();
    let contactRef = useRef();
    let emailRef = useRef();

    let details = {};

    const handleSubmit = (event) => {
        event.preventDefault();
        details = {
            firstName: fnameRef.current.value,
            lastName: lnameRef.current.value,
            contact: contactRef.current.value,
            email: emailRef.current.value
        }

        console.log('Form Submitted with Values: ', details);
    }

    return (
        <div>
            <div style={{ display: 'flex', columnGap: '155px', height: '500px', width: '100%' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${contact})`, filter: 'blur(2px)', zIndex: '-1' }}>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={call} style={{ height: '350px', width: '350px' }} />
                </div>
                <div style={{ marginTop: '30px' }}>
                    <span style={{ fontSize: 'x-large', fontWeight: '500', padding: '0px 2px' }} >Post an Enquiry</span>
                    <br />
                    <span style={{ fontSize: 'large', fontWeight: '200', padding: '0px 2px' }} >Please fill in the details  below to go to the next step</span>
                    <form onSubmit={handleSubmit} name='Enquire Now' style={{ backgroundColor: '#FFF', opacity: '80%', margin: '15px 0px', padding: '15px 40px', border: '1px solid' }}>
                        <div className="form-group">
                            <label className="heading" for="fname">First Name</label>
                            <input ref={fnameRef} type="text" id="fname" name="firstname" />
                        </div>

                        <div className="form-group">
                            <label className="heading" for="lname">Last Name</label>
                            <input ref={lnameRef} type="text" id="lname" name="lastname" />
                        </div>

                        <div className="form-group">
                            <label className="heading" for="contact">Contact Number</label>
                            <input ref={contactRef} type="text" id="contact" name="contact" />
                        </div>

                        <div className="form-group">
                            <label className="heading" for="email">Email ID</label>
                            <input ref={emailRef} type="email" id="email" name="email" />
                        </div>
                        <Button bg="green"> Submit </Button>
                        <Button> Reset </Button>
                    </form>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Enquiry;