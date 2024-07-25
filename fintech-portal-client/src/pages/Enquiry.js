import './Enquiry.css';
import { useState } from "react";
import contact from './contact1.jpg';

const Enquiry = () => {

    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '100%', width: '100%'}}>
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Enquiry;