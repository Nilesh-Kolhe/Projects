import axios from 'axios';
import './Enquiry.css';
import { useState, useEffect, useRef } from "react";
import contact from './images/Untitled_design_8.PNG';
import call from './images/Enq.jpg';
import Footer from '../components/Footer';
import Button from '../ui-components/Button';

const Enquiry = () => {
    let otpRef = useRef();
    const [isEnquiryReceived, setIsEnquiryReceived] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [isOtpDisabled, setIsOtpDisabled] = useState({
        isSendOtpDisabled: false,
        isVerifyOtpDisabled: false
    });
    const [otpMessage, setOtpMessage] = useState({
        sendOtp: '',
        verifyOtp: ''
    });
    const initialData = {
        name: '',
        contact: '',
        type: '',
        email: ''
    };
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        switch (name) {
            case 'name':
                if (!value) {
                    setErrors({
                        ...errors,
                        [name]: 'Name is Required !'
                    });
                }
                else {
                    setErrors({
                        ...errors,
                        [name]: ''
                    });
                }
                break;
            case 'contact':
                if (!value) {
                    setErrors({
                        ...errors,
                        [name]: 'Contact number is Required !'
                    });
                } else if (value.length < 10) {
                    setErrors({
                        ...errors,
                        [name]: 'Contact number should be atleast 10 digits !'
                    });
                }
                else {
                    setErrors({
                        ...errors,
                        [name]: ''
                    });
                }
                break;
            case 'type':
                if (value === 'select') {
                    setErrors({
                        ...errors,
                        [name]: 'Please select enquiry type'
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: ''
                    });
                }
                break;
            case 'email':
                if (!value) {
                    setErrors({
                        ...errors,
                        [name]: 'Email is Required !'
                    });
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    setErrors({
                        ...errors,
                        [name]: 'Email is not valid !'
                    });
                } else {
                    setErrors({
                        ...errors,
                        [name]: ''
                    });
                }
                break;
        }
    };

    const sendOTP = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/otp/send`, {
            countryCode: '+91',
            phoneNumber: formData.contact
        })
            .then(response => { console.log('sendOTP Response: ', response) })
            .catch(error => console.error(error));

        setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: true }));
        setOtpMessage((prevState) => ({
            sendOtp: 'OTP Sent Successfully !'
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
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/otp/verify`, {
            countryCode: '+91',
            phoneNumber: formData.contact,
            otp: otpRef.current.value
        })
            .then(response => {
                console.log('sendOTP Response: ', response);
                setIsOtpDisabled((prevState) => ({ ...prevState, isVerifyOtpDisabled: true }));
                setOtpMessage((prevState) => ({
                    verifyOtp: 'OTP Verified Successfully !'
                }));
                setErrors({
                    ...errors,
                    isContactVerified: ''
                });
            })
            .catch(error => {
                setOtpMessage((prevState) => ({
                    verifyOtp: 'Unable to verify OTP !'
                }));
                setErrors({
                    ...errors,
                    isContactVerified: 'Unable to verify contact number'
                });
                console.error('Error verifiying OTP ', error)
            });
    }

    useEffect(() => {
        console.log('Errors: ', errors);
        if (Object.keys(errors).length === 6) {
            let isValid = true;
            for (var error in errors) {
                if (errors[error] !== "") {
                    isValid = false;
                    break;
                }
            }
            setIsFormValid(isValid);
        }
    }, [errors]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('FormData: ', formData);
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/submitEnquiry`, {
            name: formData.name,
            type: formData.type,
            contact: formData.contact,
            email: formData.email
        })
            .then(response => {
                console.log('Save Enquiry Response: ', response);
                setIsEnquiryReceived(true);
            })
            .catch(error => console.error(error));
    }

    const resetFormData = (event) => {
        event.preventDefault();
        setErrors({});
        setFormData(initialData);
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
                                <label className="heading" for="fname">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className={errors.name && 'border-red'}
                                    defaultValue={formData.name}
                                    onBlur={handleChange}
                                    onFocus={() => {
                                        setErrors(errors => {
                                            const { name, ...rest } = errors;
                                            return rest;
                                        });
                                    }}
                                />
                                {errors.firstName && (
                                    <span className="error-message">
                                        {errors.firstName}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="heading" for="type">Type</label>
                                <select
                                    name="type"
                                    className={errors.type && 'border-red'}
                                    defaultValue={formData.type}
                                    onBlur={handleChange}
                                    onFocus={() => {
                                        setErrors(errors => {
                                            const { type, ...rest } = errors;
                                            return rest;
                                        });
                                    }}
                                >
                                    <option value="select">--select--</option>
                                    <option value="self">Self</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.type && (
                                    <span className="error-message">
                                        {errors.type}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="heading" for="contact">Contact Number</label>
                                <input
                                    type="text"
                                    name="contact"
                                    className={errors.contact && 'border-red'}
                                    defaultValue={formData.contact}
                                    onBlur={handleChange}
                                    onFocus={() => {
                                        setErrors(errors => {
                                            const { contact, ...rest } = errors;
                                            return rest;
                                        });
                                    }}
                                />
                                <Button disabled={isOtpDisabled.isSendOtpDisabled} onClick={sendOTP} style={{ fontSize: 'small' }} >Send OTP</Button>
                                {errors.contact && (
                                    <span className="error-message">
                                        {errors.contact}
                                    </span>
                                )}
                                <label className='message'> {otpMessage.sendOtp} </label>
                            </div>

                            <div className="form-group">
                                <label className="heading" for="otp">OTP</label>
                                <input
                                    ref={otpRef}
                                    type="text"
                                    name="otp" />
                                <Button disabled={!isOtpDisabled.isSendOtpDisabled || isOtpDisabled.isVerifyOtpDisabled} onClick={verifyOTP} style={{ fontSize: 'small' }} >Verify OTP</Button>
                                <label className='message'> {otpMessage.verifyOtp} </label>
                            </div>

                            <div className="form-group">
                                <label className="heading" for="email">Email ID</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={errors.email && 'border-red'}
                                    defaultValue={formData.email}
                                    onBlur={handleChange}
                                    onFocus={() => {
                                        setErrors(errors => {
                                            const { email, ...rest } = errors;
                                            return rest;
                                        });
                                    }}
                                />
                                {errors.email && (
                                    <span className="error-message">
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            <Button disabled={!isFormValid} type='button' bg="green" onClick={handleSubmit}> Submit </Button>
                            <Button onClick={resetFormData}> Reset </Button>
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