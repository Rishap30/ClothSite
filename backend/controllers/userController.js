import User from "../models/User.js";

// CREATE
export const createUser = async (req, res) => {
  const user = await User.create({ name: req.body.name });
  res.json(user);
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