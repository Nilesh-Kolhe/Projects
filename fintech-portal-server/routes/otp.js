const express = require('express');
const otpRouter = express.Router();// create a router

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN, {
    lazyLoading: true
})

otpRouter.post('/send', async (req, res) => {
    const { countryCode, phoneNumber } = req.body;
    console.log('Country Code: ', countryCode, ' Phone Number: ', phoneNumber);
    try {
        const otpResponse = await client.verify
            .v2.services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({
                to: `+${countryCode}${phoneNumber}`,
                channel: "sms",
            });
        res.status(200).send(`OTP sent successfully!: ${JSON.stringify(otpResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong!');
    }
});

otpRouter.post('/verify', async (req, res) => {
    const { countryCode, phoneNumber, otp } = req.body;
    console.log('Country Code: ', countryCode, ' Phone Number: ', phoneNumber, ' OTP: ', otp);
    try {
        const verifiedResponse = await client.verify
            .v2.services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({
                to: `+${countryCode}${phoneNumber}`,
                code: otp,
            });
        res.status(200).send(`OTP verified successfully!: ${JSON.stringify(verifiedResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong');
    }
});

module.exports = otpRouter; // export the router