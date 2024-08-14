import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Login.css';
import Button from '../ui-components/Button';
import contact from './images/image3.PNG';

const Login = ({ loginChange }) => {
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const initialLoginFormData = {
        email: '',
        password: ''
    };
    const [loginData, setLoginData] = useState(initialLoginFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });

        switch (name) {
            case 'password':
                if (!value) {
                    setErrors({
                        ...errors,
                        [name]: 'Password is Required !'
                    });
                }
                else {
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
            default:
                break;
        }
    };

    useEffect(() => {
        console.log('Admin Login Errors: ', errors);
        if (Object.keys(errors).length === 2) {
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

    const handleLogin = () => {
        axios.post(`${process.env.REACT_APP_FINTECH_SERVER_URL}/signin`,
            {
                email: loginData.email,
                password: loginData.password
            })
            .then(response => loginChange(response.data))
            .catch(error => loginChange({ message: error.response.data }));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end', height: '370px', width: '100%', margin: '0px 0px', overflow: 'auto' }}>
            <div style={{ position: 'absolute', top: '0px', width: '100%', height: '100%', backgroundImage: `url(${contact})`, backgroundSize: 'cover', zIndex: '-1' }}>
            </div>
            <span style={{ backgroundColor: 'lightgrey', fontWeight: '600', fontFamily: 'auto', fontSize: 'xx-large', padding: '5px 20px' }}> Admin Login </span>
            <div className='login-container'>
                <form id='login' name='Login'>
                    <div className="login-form-group">
                        <div>
                            <label className="login-heading" for="email">Email ID</label>
                            <input
                                type="email"
                                name="email"
                                className={errors.email && 'border-red'}
                                defaultValue={loginData.email}
                                onBlur={handleChange}
                                onFocus={() => {
                                    setErrors(errors => {
                                        const { email, ...rest } = errors;
                                        return rest;
                                    });
                                    loginChange({});
                                }}
                            />
                        </div>
                        <div style={{ paddingLeft: '60px' }}>
                            {errors.email && (
                                <span className="login-error-message">
                                    {errors.email}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="login-form-group">
                        <div>
                            <label className="login-heading" for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                className={errors.password && 'border-red'}
                                defaultValue={loginData.password}
                                onKeyUp={handleChange}
                                onBlur={handleChange}
                                onFocus={() => {
                                    setErrors(errors => {
                                        const { password, ...rest } = errors;
                                        return rest;
                                    });
                                    loginChange({});
                                }}
                            />
                        </div>
                        <div style={{ paddingLeft: '82px' }}>
                            {errors.password && (
                                <span className="login-error-message">
                                    {errors.password}
                                </span>
                            )}
                        </div>
                    </div>
                </form>
                <Button disabled={!isFormValid} type='button' bg="green" onClick={() => handleLogin()}> Login </Button>
            </div>
        </div>
    );
};

export default Login;