import { User } from "../models/User.js";
import bcrypt from "bcryptjs";

// CREATE
export const register = async (req, res) => {
  try {
    const {firstName, lastName, email, password} = req.body;
    if(!firstName || !lastName || !email || !password){
      res.status(400).json({message: "All fields are required"});
    }

    const user = await User.findOne({email});
    if(user){
      res.status(400).json({message: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10) 
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password:hashedPassword
    })
    await newUser.save()
    
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user:newUser 
    }) 
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

// READ ALL
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// READ ONE
export const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ msg: "Not found" });

  res.json(user);
};

// UPDATE
export const updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  res.json(user);
};

// DELETE
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};