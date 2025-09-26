const userModels = require('../Models/userModels')
const fs = ('fs')

exports.signUp = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, password, confirmPassword } = req.body
        const userExists = await userModels.findOne({ email: email.toLowerCase() });
        if (userExists) {
            res.status(404).json({
                message: `User already exists`
            })
        }
        const saltedRounds = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltedRounds);

        const otp = Math.round(Math.random() * 1e4).toString().padStart(4, '0')
        const user = new userModels({
            firstName,
            lastName,
            email: email.toLowerCase,
            phoneNumber,
            password: hashedPassword,
            otp: otp,
            otpExpired: Date.now() + 1000 * 60
        })
     await user.save()
     res.status(200).json({
        message: `User registered successfully`
     })
    } catch (error) {
        res.status(500).json({
            message: Error.message
        })
    }
}