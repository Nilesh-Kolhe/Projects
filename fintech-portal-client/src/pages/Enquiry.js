import './Enquiry.css';
import { useState } from "react";
import contact from './contact1.jpg';

const Enquiry = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundImage: `url(${contact})`, backgroundSize: '1370px 650px', filter: 'blur(1px)', zIndex: '-1' }}>
            </div>

            <form onSubmit={handleSubmit} style={{ backgroundColor: '#FFF', opacity: '80%',  margin: '35px 0px', padding: '15px 40px', border: '1px solid' }}>

                <div className="form-group">
                    <label className="heading" for="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" />
                </div>

                <div className="form-group">
                    <label className="heading" for="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" />
                </div>

                <div className="form-group">
                    <label className="heading" for="contact">Contact Number</label>
                    <input type="text" id="contact" name="contact" />
                </div>

                <div className="form-group">
                    <label className="heading" for="email">Email ID</label>
                    <input type="email" id="email" name="email" />
                </div>

                {/* <div className="form-group">
                    <label className="heading" for="type">Type</label>
                    <input type="radio" id="self" name="type" value="self" />
                    <label for="self">Self</label><br />
                    <input type="radio" id="referral" name="type" value="referral" />
                    <label for="referral">Referral</label><br />
                </div> */}

                <input type="submit" value="Submit" />

                {/* <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" /> */}
            </form>
        </>
    );
};

export default Enquiry;