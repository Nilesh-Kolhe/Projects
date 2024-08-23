import axios from 'axios';
import './Enquiry.css';
import { useState, useEffect, useRef } from "react";
import ContactBackground from './images/Contact.PNG';
import call from './images/Enq.jpg';
import Footer from '../components/Footer';
import Button from '../ui-components/Button';
import { useParams } from "react-router-dom";

const Enquiry = () => {
    let otpRef = useRef();
    const [isEnquiryReceived, setIsEnquiryReceived] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const { contact } = useParams();
    console.log('URL Contact: ', contact);
    const [isReferred] = useState(contact !== undefined);
    const TXT_REFERRAL = 'referral';
    const [errors, setErrors] = useState({});
    const [isOtpDisabled, setIsOtpDisabled] = useState({
        isSendOtpDisabled: false,
        isVerifyOtpDisabled: false
    });
    const initialOtpmessageState = {
        sendOtp: '',
        verifyOtp: ''
    };
    const [otpMessage, setOtpMessage] = useState(initialOtpmessageState);
    const initialFormData = {
        // name: '',
        contact: contact || '',
        type: isReferred ? TXT_REFERRAL : '',
        // email: ''
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log('Handle Change Form Data: ', formData);
        switch (name) {
            // case 'name':
            //     if (!value) {
            //         setErrors({
            //             ...errors,
            //             [name]: 'Name is Required !'
            //         });
            //     }
            //     else {
            //         setErrors({
            //             ...errors,
            //             [name]: ''
            //         });
            //     }
            //     break;
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
            case 'referral':
                if (!value) {
                    setErrors({
                        ...errors,
                        [name]: 'Referral contact number is Required !'
                    });
                } else if (value.length < 10) {
                    setErrors({
                        ...errors,
                        [name]: 'Referral contact number should be atleast 10 digits !'
                    });
                }
                else {
                    setErrors({
                        ...errors,
                        [name]: ''
                    });
                }
                break;
            // case 'email':
            //     if (!value) {
            //         setErrors({
            //             ...errors,
            //             [name]: 'Email is Required !'
            //         });
            //     } else if (!/\S+@\S+\.\S+/.test(value)) {
            //         setErrors({
            //             ...errors,
            //             [name]: 'Email is not valid !'
            //         });
            //     } else {
            //         setErrors({
            //             ...errors,
            //             [name]: ''
            //         });
            //     }
            //     break;
        }
    };

    const sendOTP = (event) => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/otp/send`, {
            countryCode: '+91',
            phoneNumber: formData.contact
        })
            .then(response => {
                console.log('sendOTP Response: ', response);
                setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: true }));
                setOtpMessage(() => ({
                    sendOtp: 'OTP Sent Successfully !'
                }));

                setTimeout(() => (setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: false })),
                    (setIsOtpDisabled((prevState) => ({ ...prevState, isVerifyOtpDisabled: false }))),
                    setOtpMessage((prevState) => ({
                        ...prevState,
                        sendOtp: '',
                        verifyOtp: ''
                    }))
                ), 600000); // 1000
            })
            .catch(error => {
                console.error(error);
                setOtpMessage(() => ({
                    sendOtp: 'Unable to send OTP'
                }));
            });

        // setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: true }));
        // setOtpMessage(() => ({
        //     sendOtp: 'OTP Sent Successfully !'
        // }));

        // setTimeout(() => (setIsOtpDisabled((prevState) => ({ ...prevState, isSendOtpDisabled: false })),
        //     (setIsOtpDisabled((prevState) => ({ ...prevState, isVerifyOtpDisabled: false }))),
        //     setOtpMessage((prevState) => ({
        //         ...prevState,
        //         sendOtp: '',
        //         verifyOtp: ''
        //     }))
        // ), 600000); // 1000
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
        console.log('UseEffect Errors: ', errors);
        const numberOfErrors = (formData.type === TXT_REFERRAL ? 4 : 3);
        if (Object.keys(errors).length === numberOfErrors) {
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

    useEffect(() => {
        console.log('Initial UseEffect Errors: ', errors);
        if (isReferred) {
            setErrors({
                ...errors,
                contact: ''
            });
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Handle Submit FormData: ', formData);
        let body = {
            name: formData.name,
            type: formData.type,
            contact: formData.contact,
            email: formData.email
        };
        body = {
            ...body,
            ...(formData.type === TXT_REFERRAL ? { referral: formData.referral } : {})
        };
        console.log('Body: ', body);
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/submitEnquiry`, body)
            .then(response => {
                console.log('Save Enquiry Response: ', response);
                setIsEnquiryReceived(true);
            })
            .catch(error => console.error(error));
    }

    const resetFormData = (event) => {
        event.preventDefault();
        setErrors({});
        setOtpMessage(initialOtpmessageState);
        setFormData(initialFormData);
    }

    return (
        <>
            <div id='enquiry-container'>
                <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${ContactBackground})`, filter: 'blur(2px)', zIndex: '-1' }}>
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
                                <label className="heading" htmlFor="fname">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className={errors.name && 'border-red'} //
                                    defaultValue={formData.name} //
                                    onBlur={handleChange}
                                    onFocus={() => {
                                        setErrors(errors => {
                                            const { name, ...rest } = errors;
                                            return rest;
                                        });
                                    }} //
                                />
                                {errors.firstName && (
                                    <span className="error-message">
                                        {errors.firstName}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className='heading mandatory' htmlFor="contact">Contact Number</label>
                                <input
                                    type="text"
                                    name="contact"
                                    className={errors.contact && 'border-red'}
                                    defaultValue={!isReferred ? formData.contact : undefined}
                                    value={isReferred ? formData.contact : undefined}
                                    readOnly={formData.contact}
                                    onBlur={handleChange}
                                    onFocus={() => {
                                        setErrors(errors => {
                                            const { contact, ...rest } = errors;
                                            return rest;
                                        });
                                    }}
                                />
                                {!isReferred ? <>
                                    <Button disabled={isOtpDisabled.isSendOtpDisabled} onClick={sendOTP} style={{ fontSize: 'small' }} >Send OTP</Button>
                                    {errors.contact && (
                                        <span className="error-message">
                                            {errors.contact}
                                        </span>
                                    )}
                                    <label className='message'> {otpMessage.sendOtp} </label>
                                </> : <></>}
                            </div>

                            <div className="form-group">
                                <label className="heading mandatory" htmlFor="type">Type</label>
                                <select
                                    name="type"
                                    className={errors.type && 'border-red'}
                                    value={formData.type}
                                    onBlur={handleChange} //
                                    onChange={handleChange}
                                    onFocus={() => {
                                        setErrors(errors => {
                                            const { type, ...rest } = errors;
                                            return rest;
                                        });
                                    }}
                                >
                                    <option value="select">--select--</option>
                                    <option value="self">Self</option>
                                    <option value="referral">Referral</option>
                                </select>
                                {errors.type && (
                                    <span className="error-message">
                                        {errors.type}
                                    </span>
                                )}
                                {formData.type === TXT_REFERRAL && (<>
                                    <label className='heading mandatory' htmlFor="fname">Referral Number</label>
                                    <input
                                        type="text"
                                        name="referral"
                                        className={errors.referral && 'border-red'}
                                        // defaultValue={formData.referral}
                                        onBlur={handleChange}
                                        onFocus={() => {
                                            setErrors(errors => {
                                                const { referral, ...rest } = errors;
                                                return rest;
                                            });
                                        }}
                                    />
                                </>)}
                                {isReferred ? <>
                                    <Button disabled={isOtpDisabled.isSendOtpDisabled} onClick={sendOTP} style={{ fontSize: 'small' }} >Send OTP</Button>
                                    <label className='message'> {otpMessage.sendOtp} </label>
                                </> : <></>}
                                {errors.referral && (
                                    <span className="error-message">
                                        {errors.referral}
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label className='heading mandatory' htmlFor="otp">OTP</label>
                                <input
                                    ref={otpRef}
                                    type="text"
                                    name="otp" />
                                <Button disabled={!isOtpDisabled.isSendOtpDisabled || isOtpDisabled.isVerifyOtpDisabled} onClick={verifyOTP} style={{ fontSize: 'small' }} >Verify OTP</Button>
                                {/* <Button onClick={verifyOTP} style={{ fontSize: 'small' }} >Verify OTP</Button> */}
                                <label className='message'> {otpMessage.verifyOtp} </label>
                            </div>

                            <div className="form-group">
                                <label className='heading' htmlFor="email">Email ID</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={errors.email && 'border-red'} //
                                    defaultValue={formData.email}
                                    onBlur={handleChange}
                                    onFocus={() => {
                                        setErrors(errors => {
                                            const { email, ...rest } = errors;
                                            return rest;
                                        });
                                    }} //
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
                            <Button type='button' bg='green' onClick={(e) => {
                                resetFormData(e);
                                setIsEnquiryReceived(false);
                            }}
                                style={{ fontSize: 'large', width: '250px' }}> Submit Another Enquiry </Button>
                        </div>
                    </div>
                </>
                }
            </div >
            <Footer />
        </>
    );
};

export default Enquiry;