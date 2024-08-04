const express = require('express');
const uerRouter = express.Router();// create a router

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN, {
    lazyLoading: true
})

uerRouter.post('/singin', async (req, res) => {
    const { name, password } = req.body;
    console.log('Name: ', name, ' Password: ', password);
    try {
        const otpResponse = await client.verify
            .v2.services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({
                to: `+${countryCode}${phoneNumber}`,
                channel: "sms",
            });
        res.status(200).send(`OTP send successfully!: ${JSON.stringify(otpResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong!');
    }
});

uerRouter.post('/create', async (req, res) => {
    const { countryCode, phoneNumber } = req.body;
    console.log('Country Code: ', countryCode, ' Phone Number: ', phoneNumber);
    try {
        const otpResponse = await client.verify
            .v2.services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({
                to: `+${countryCode}${phoneNumber}`,
                channel: "sms",
            });
        res.status(200).send(`OTP send successfully!: ${JSON.stringify(otpResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong!');
    }
});

module.exports = uerRouter; // export the router