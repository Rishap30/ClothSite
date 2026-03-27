import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { verifyEmail } from "../emailVerify/verifyEmail.js";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // ✅ validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ check existing user
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ create user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    // ✅ FIX: don't overwrite jwt
    const token = jwt.sign(
      { id: newUser._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // ✅ send email
    verifyEmail(token, email);

    // ✅ save token
    newUser.token = token;
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const authHeader = req.heders.authorization
    if (!authHeader || !authHeader.startWith('Bearer ')) {
      register.status(400).json({
        success: false,
        message: "Authorization token is missing or invalid"
      })
    }

    const token = authHeader.split(" ")[1]
    let decoded
    try {
      decoded = jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(400).sjson({
          success: false,
          message: "The register token has expired"
        })
      }
      return res.status(400).json({
        success: false,
        message: 'Token verification failed'
      })
    }

    const user = await User.findById(decoded.id)
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User not found'
      })
    }
    user.token = null
    user.isVerified = true
    await user.save()
    return res.status(200).json({
      success: true,
      message: 'Email verified Successfully'
    })
  } catch (errro) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}