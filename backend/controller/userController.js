import  User  from "../models/userModels.js";

export const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!fristName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            })
        }

        const user = await User.findone({ email })
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password
        })
        await newUser.save()
        return res.status(200).json({
            success: false,
            message: "User Register Successfully.",
            user:newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}