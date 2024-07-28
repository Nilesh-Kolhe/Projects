const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
require('dotenv').config();

// const {Twilio_SERVICE_SID, Twilio_ACCOUNT_SID, Twilio_AUTH_TOKEN } = process.env;
// const client = require('twilio')(Twilio_ACCOUNT_SID,Twilio_AUTH_TOKEN, {
//     lazyLoading: true
// })

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN, {
    lazyLoading: true
})


// Connect to MongoDB
mongoose.connect("mongodb+srv://admin-0:admin0@mern-stack-db.zijgsnb.mongodb.net/test_db?retryWrites=true&w=majority")
    .then(res => console.log("Success ! "))
    .catch(err => console.log("Error: ", err));

const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
});

const todoModel = mongoose.model('todos', todoSchema);

// Define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/todos', async (req, res) => {
    const todos = await todoModel.find();
    console.log("Server Response: ", todos);
    res.json(todos);
});

app.post('/sendOTP', async (req, res) => {
    const { countryCode, phoneNumber } = req.body;
    console.log('Country Code: ', countryCode, ' Phone Number: ', phoneNumber);
    try {
        const otpResponse = await client.verify
            .services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({
                to: `+${countryCode}${phoneNumber}`,
                channel: "sms",
            });
        res.status(200).send(`OTP send successfully!: ${JSON.stringify(otpResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong!');
    }
});

app.post('/verifyOTP', async (req, res) => {
    const { countryCode, phoneNumber, otp } = req.body;
    try {
        const verifiedResponse = await client.verify
            .services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({
                to: `+${countryCode}${phoneNumber}`,
                code: otp,
            });
        res.status(200).send(`OTP verified successfully!: ${JSON.stringify(verifiedResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong');
    }
});