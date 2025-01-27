const { error } = require('console');
const express = require('express');
const otpRouter = express.Router();// create a router

const client = require('twilio')(process.env.TWILIO_FRONTIERNEXT_ACCOUNT_SID, process.env.TWILIO_FRONTIERNEXT_AUTH_TOKEN, {
    lazyLoading: true
})

otpRouter.post('/send', async (req, res) => {
    const { countryCode, phoneNumber } = req.body;
    try {
        // const otpResponse = await client.verify
        //     .v2.services(process.env.TWILIO_FRONTIERNEXT_SERVICE_ID)
        //     .verifications.create({
        //         to: `+${countryCode}${phoneNumber}`,
        //         channel: "sms",
        //     });
        const mockOtpResponse = {
            "sid": "VEa19fa85d343c2576dd06cb3a31db936c",
            "serviceSid": "VAf6465441a6573e4d350cbb99285bc6cd",
            "accountSid": "AC363c848eabda91ece8584360bb9171cc",
            "to": "+919673973040",
            "channel": "sms",
            "status": "pending",
            "valid": false,
            "lookup": {
              "carrier": {
                "mobile_country_code": "404",
                "type": "mobile",
                "error_code": null,
                "mobile_network_code": "90",
                "name": "Bharti Airtel - Maharashtra & Goa (90)"
              }
            },
            "amount": null,
            "payee": null,
            "sendCodeAttempts": [
              {
                "attempt_sid": "VLcfe47fbd0b3ebccbc17be67a973128f3",
                "channel": "sms",
                "time": "2024-08-23T05:31:59.066Z"
              }
            ],
            "dateCreated": "2024-08-23T05:31:59.000Z",
            "dateUpdated": "2024-08-23T05:31:59.000Z",
            "url": "https://verify.twilio.com/v2/Services/VAf6465441a6573e4d350cbb99285bc6cd/Verifications/VEa19fa85d343c2576dd06cb3a31db936c"
          };

        // res.status(200).send(`OTP sent successfully!: ${JSON.stringify(otpResponse)}`);
        res.status(200).send(`OTP sent successfully!: ${JSON.stringify(mockOtpResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong!');
    }
});

otpRouter.post('/verify', async (req, res) => {
    const { countryCode, phoneNumber, otp } = req.body;
    try {
        // const verifiedResponse = await client.verify
        //     .v2.services(process.env.TWILIO_FRONTIERNEXT_SERVICE_ID)
        //     .verificationChecks.create({
        //         to: `+${countryCode}${phoneNumber}`,
        //         code: otp,
        //     });
            const mockVerifiedResponse = {
                "sid": "VEa19fa85d343c2576dd06cb3a31db936c",
                "serviceSid": "VAf6465441a6573e4d350cbb99285bc6cd",
                "accountSid": "AC363c848eabda91ece8584360bb9171cc",
                "to": "+919673973040",
                "channel": "sms",
                "status": "approved",
                "valid": true,
                "amount": null,
                "payee": null,
                "dateCreated": "2024-08-23T05:31:59.000Z",
                "dateUpdated": "2024-08-23T05:32:31.000Z"
              };
        // res.status(200).send(`OTP verified successfully!: ${JSON.stringify(verifiedResponse)}`);
        if(otp == 489424) {
            res.status(200).send(`OTP verified successfully!: ${JSON.stringify(mockVerifiedResponse)}`);
        }
        else {
            throw new Error();
        }
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong');
    }
});

module.exports = otpRouter; // export the router