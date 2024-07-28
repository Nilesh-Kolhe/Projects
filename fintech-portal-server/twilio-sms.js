const { Twilio_SERVICE_SID, Twilio_ACCOUNT_SID, Twilio_AUTH_TOKEN } = process.env;
const client = require('twilio')(Twilio_ACCOUNT_SID, Twilio_AUTH_TOKEN, {
    lazyLoading: true
})


/**
 * send OTP
 * @param {*} req
 * @param {*} res 
 * @param {*} next
 */
const sendOTP = async (req, res, next) => {
    const { countryCode, phoneNumber } = req.body;
    // const countryCode = '+91';
    // const phoneNumber = '9673973040';
    try {

        const otpResponse = await client.verify
            .services(Twilio_SERVICE_SID)
            .verifications.create({
                to: `+${countryCode}${phoneNumber}`,
                channel: "sms",
            });
        res.status(200).send(`OTP send successfully!: ${JSON.stringify(otpResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong!');
    }
};


/**
 * verify otp
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const verifyOTP = async (req, res, next) => {
    const { countryCode, phoneNumber, otp } = req.body;
    try {
        const verifiedResponse = await client.verify
            .services(Twilio_SERVICE_SID)
            .verificationChecks.create({
                to: `+${countryCode}${phoneNumber}`,
                code: otp,
            });
        res.status(200).send(`OTP verified successfully!: ${JSON.stringify(verifiedResponse)}`);
    } catch (error) {
        res.status(error?.status || 400).send(error?.message || 'something went wrong');
    }
};