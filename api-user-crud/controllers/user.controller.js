const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const getAllUser = async (req, res) => {
  try {
    let data = await User.find({});
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await User.findById(id);
    return res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


const createUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let user = await User.create(req.body);
    return res.status(201).json({ success: true, message: "User created", user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};


const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    let updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ success: true, message: "User updated", updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await User.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "User deleted", id: data?._id });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    let isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Invalid password" });

    let payload = {
      id: user._id,
      role: user.role,
    };
    let token = jwt.sign(payload, 'private-key', { expiresIn: '1h' });

    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser, login, logout };
