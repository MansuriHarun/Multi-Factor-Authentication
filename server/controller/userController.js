const randomize = require('randomatic');
const userModel = require("../model/userModel");
const sendOtpEmail = require("../utils/sendOtpEmail");

const register = async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(200).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    try {
        const user = await userModel.findOne({ email, password });
        console.log(user);
        if (!user) {
            return res.json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const generatedOtp = randomize('0', 6);
        user.otp = generatedOtp;
        await user.save();

        sendOtpEmail(email, generatedOtp);

        return res.status(200).json({
             success: true,
             message: "Email sent successfully"
             });
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({
            success: false,
            message: 'An error occurred during login'
        });
    }
}

const verifyOtp = async (req, res) => {
    const { otp } = req.body;

    try {
        const user = await userModel.findOne({ otp });

        if (!user) {
            return res.json({ success: false, message: 'Invalid OTP' });
        }

        user.otp = "";
        await user.save();

        return res.json({ 
            success: true,
            message: "Login successful"
         });
    } catch (error) {
        console.error('Error during OTP verification:', error.message);
        return res.status(500).json({
            success: false,
            message: 'An error occurred during OTP verification'
        });
    }
}

module.exports = {
    register,
    login,
    verifyOtp
}