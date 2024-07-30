import axios from 'axios';
import './Enquiry.css';
import { useState, useEffect, useRef } from "react";
import contact from './images/Untitled_design_8.PNG';
import call from './images/Enq.jpg';
import Footer from '../components/Footer';
import Button from '../ui-components/Button';

const Enquiry = () => {
    let fnameRef = useRef();
    let lnameRef = useRef();
    let contactRef = useRef();
    let emailRef = useRef();
    let otpRef = useRef();
    let details = {};

    const [isOtpDisabled, setIsOtpDisabled] = useState({
        isSendOtpDisabled: false,
        isVerifyOtpDisabled: false
    });

    const [otpMessage, setOtpMessage] = useState({
        sendOtp: '',
        verifyOtp: ''
    });

    const sendOTP = (event) => {
        // event.preventDefault();

        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/sendOTP`, {
            countryCode: '+91',
            phoneNumber: contactRef.current.value
        })
            .then(response => { console.log('sendOTP Response: ', response) })
            .catch(error => console.error(error));

        setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: true }));
        setOtpMessage((prevState) => ({
            ...prevState, sendOtp: 'OTP Sent Successfully !'
        }));

        setTimeout(() => (setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: false })),
            (setIsOtpDisabled((prevState) => ({ ...prevState, isVerifyOtpDisabled: false }))),
            setOtpMessage((prevState) => ({
                ...prevState,
                sendOtp: '',
                verifyOtp: ''
            }))
        ), 600000);
    }

    const verifyOTP = (event) => {
        // event.preventDefault();
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/verifyOTP`, {
            countryCode: '+91',
            phoneNumber: contactRef.current.value,
            otp: otpRef.current.value
        })
            .then(response => {
                console.log('sendOTP Response: ', response);
                setIsOtpDisabled((prevState) => ({ ...prevState, isVerifyOtpDisabled: true }));
                setOtpMessage((prevState) => ({
                    ...prevState, verifyOtp: 'OTP Verified Successfully !'
                }));
            })
            .catch(error => console.error(error));
    }

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
        <>
            <div style={{ display: 'flex', columnGap: '155px', height: '600px', width: '100%' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${contact})`, filter: 'blur(2px)', zIndex: '-1' }}>
                </div>
                <div id='call-img-container'>
                    <img src={call} style={{ height: '350px', width: '350px' }} />
                </div>
                <div style={{ marginTop: '30px' }}>
                    <span id='head'>Post an Enquiry</span>
                    <br />
                    <span id='sub-head' >Please fill in the details  below to go to the next step</span>
                    <form id='enquire' onSubmit={handleSubmit} name='Enquire Now'>
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
                            <Button disabled={isOtpDisabled.isSendOtpDisabled} onClick={sendOTP} >Send OTP</Button>
                            <label className='message'> {otpMessage.sendOtp} </label>
                        </div>

                        <div className="form-group">
                            <label className="heading" for="otp">OTP</label>
                            <input ref={otpRef} type="text" id="otp" name="otp" />
                            <Button disabled={!isOtpDisabled.isSendOtpDisabled || isOtpDisabled.isVerifyOtpDisabled} onClick={verifyOTP} >Verify OTP</Button>
                            <label className='message'> {otpMessage.verifyOtp} </label>
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
        </>
    );
};

export default Enquiry;