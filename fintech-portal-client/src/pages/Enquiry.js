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
    let typeRef = useRef();
    let contactRef = useRef();
    let emailRef = useRef();
    let otpRef = useRef();

    const [isEnquiryFormValid, setIsEnquiryFormValid] = useState(false);
    const [isEnquiryReceived, setIsEnquiryReceived] = useState(false);
    const [isOtpDisabled, setIsOtpDisabled] = useState({
        isSendOtpDisabled: false,
        isVerifyOtpDisabled: false
    });
    const [otpMessage, setOtpMessage] = useState({
        sendOtp: '',
        verifyOtp: ''
    });
    const [formData, setFormData] = useState({
        firstName: { value: '', message: '' },
        lastName: { value: '', message: '' },
        contact: { value: '', message: '' },
        type: { value: '', message: '' },
        email: { value: '', message: '' }
    });

    useEffect(() => {
        // fnameRef.current.focus();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('On Blur Name: ', name, ' Value: ', value);
        switch (name) {
            case 'firstName':
                if (!value) {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: 'First name is required'
                        },
                    });
                    setIsEnquiryFormValid(false);
                } else {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: ''
                        },
                    });
                    console.log('On Blur FirstName FormData: ', formData);
                    setIsEnquiryFormValid(true);
                }
                break;

            case 'lastName':
                if (!value) {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: 'Last name is required'
                        },
                    });
                    setIsEnquiryFormValid(false);
                } else {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: ''
                        },
                    });
                    console.log('Handle Change FormData: ', formData);
                    setIsEnquiryFormValid(true);
                }
                break;

            case 'contact':
                if (!value) {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: 'Contact Number is required'
                        },
                    });
                    setIsEnquiryFormValid(false);
                } else if (value.length < 10) {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: 'Contact Number should be atleast 10 digits'
                        },
                    });
                    setIsEnquiryFormValid(false);
                } else {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: ''
                        },
                    });
                    console.log('Handle Change FormData: ', formData);
                    setIsEnquiryFormValid(true);
                }
                break;

            case 'email':
                if (!value) {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: 'Email is required'
                        },
                    });
                    setIsEnquiryFormValid(false);
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: 'Email is invalid'
                        },
                    });
                    setIsEnquiryFormValid(false);
                } else {
                    setFormData({
                        ...formData,
                        [name]: {
                            value: value,
                            message: ''
                        },
                    });
                    console.log('Handle Change FormData: ', formData);
                    setIsEnquiryFormValid(true);
                }
                break;
            default:
        }
    };

    const sendOTP = (event) => {
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/otp/send`, {
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
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/otp/verify`, {
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

    const validateForm = () => {
        let isValid = true;
        console.log('Validate Form Data: ', formData);
        for (const data in formData) {
            console.log('Data: ', data, ' formData[data]', formData[data])
            if (formData[data].message !== '') {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setIsEnquiryFormValid(validateForm());
        console.log('isForm Valid: ', isEnquiryFormValid, ' Submit Form Data: ', formData);

        if (!isEnquiryFormValid) { return };
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/submitEnquiry`, {
            firstName: fnameRef.current.value,
            lastName: lnameRef.current.value,
            type: typeRef.current.value,
            contact: contactRef.current.value,
            email: emailRef.current.value
        })
            .then(response => {
                console.log('Save Enquiry Response: ', response);
                setIsEnquiryReceived(true);
            })
            .catch(error => console.error(error));

    }

    return (
        <>
            <div style={{ display: 'flex', columnGap: '155px', height: '750px', width: '100%' }}>
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${contact})`, filter: 'blur(2px)', zIndex: '-1' }}>
                </div>
                <div id='call-img-container'>
                    <img src={call} style={{ height: '350px', width: '350px' }} />
                </div>
                {!isEnquiryReceived ? <>
                    <div style={{ marginTop: '30px' }}>
                        <span className='head'>Post an Enquiry</span>
                        <br />
                        <span className='sub-head' >Please fill in the details  below to go to the next step</span>
                        <form id='enquire' name='Enquire Now'>
                            <div className="form-group">
                                <label className="heading" for="fname">First Name</label>
                                <input
                                    ref={fnameRef}
                                    type="text"
                                    id="fname"
                                    name="firstName"
                                    defaultValue={formData.firstName.value}
                                    onBlur={handleChange}
                                    onFocus={(e) => setFormData({
                                        ...formData,
                                        [e.target.name]: {
                                            value: e.target.value,
                                            message: ''
                                        },
                                    })}
                                />
                                {formData.firstName.message && (
                                    <span className="error-message">
                                        {formData.firstName.message}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="heading" for="lname">Last Name</label>
                                <input
                                    ref={lnameRef}
                                    type="text"
                                    id="lname"
                                    name="lastName"
                                    defaultValue={formData.lastName.value}
                                    onBlur={handleChange}
                                    onFocus={(e) => setFormData({
                                        ...formData,
                                        [e.target.name]: {
                                            value: e.target.value,
                                            message: ''
                                        },
                                    })}
                                />
                                {formData.lastName.message && (
                                    <span className="error-message">
                                        {formData.lastName.message}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="heading" for="type">Type</label>
                                <select
                                    id='enquiry-type'
                                    ref={typeRef}
                                    name="type"
                                    defaultValue={formData.type.value}
                                    onBlur={handleChange}
                                    onFocus={(e) => setFormData({
                                        ...formData,
                                        [e.target.name]: {
                                            value: e.target.value,
                                            message: ''
                                        },
                                    })}
                                >
                                    <option value="self">Self</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="heading" for="contact">Contact Number</label>
                                <input
                                    ref={contactRef}
                                    type="text"
                                    id="contact"
                                    name="contact"
                                    defaultValue={formData.contact.value}
                                    onBlur={handleChange}
                                    onFocus={(e) => setFormData({
                                        ...formData,
                                        [e.target.name]: {
                                            value: e.target.value,
                                            message: ''
                                        },
                                    })}
                                />
                                <Button disabled={isOtpDisabled.isSendOtpDisabled} onClick={sendOTP} style={{ fontSize: 'small' }} >Send OTP</Button>
                                {formData.contact.message && (
                                    <span className="error-message">
                                        {formData.contact.message}
                                    </span>
                                )}
                                <label className='message'> {otpMessage.sendOtp} </label>
                            </div>

                            <div className="form-group">
                                <label className="heading" for="otp">OTP</label>
                                <input
                                    ref={otpRef}
                                    type="text"
                                    id="otp"
                                    name="otp" />
                                <Button disabled={!isOtpDisabled.isSendOtpDisabled || isOtpDisabled.isVerifyOtpDisabled} onClick={verifyOTP} style={{ fontSize: 'small' }} >Verify OTP</Button>
                                <label className='message'> {otpMessage.verifyOtp} </label>
                            </div>

                            <div className="form-group">
                                <label className="heading" for="email">Email ID</label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    id="email"
                                    name="email"
                                    defaultValue={formData.email.value}
                                    onBlur={handleChange}
                                    onFocus={(e) => setFormData({
                                        ...formData,
                                        [e.target.name]: {
                                            value: e.target.value,
                                            message: ''
                                        },
                                    })}
                                />
                                {formData.email.message && (
                                    <span className="error-message">
                                        {formData.email.message}
                                    </span>
                                )}
                            </div>

                            <Button disabled={!isEnquiryFormValid} type='button' bg="green" onClick={handleSubmit}> Submit </Button>
                            <Button> Reset </Button>

                        </form>
                    </div>
                </> : <>
                    <div style={{ marginTop: '170px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'lightgrey', width: '100%', padding: '30px 30px', opacity: '80%' }}>
                            <span className='head' style={{ fontSize: 'xx-large' }}> Enquiry Received ! </span>
                            <span className='sub-head' style={{ fontSize: 'x-large' }}> Our team will get back to you shortly. </span>
                            <Button type='button' bg='green' onClick={() => setIsEnquiryReceived(false)} style={{ fontSize: 'large', width: '250px' }}> Submit Another Enquiry </Button>
                        </div>
                    </div>
                </>}
            </div>
            <Footer />
        </>
    );
};

export default Enquiry;