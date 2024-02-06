import User from "../models/user.js";
import jwt from "jsonwebtoken";

const SECRETKEY = "Shreyas";

export const register = async (req, res) => {
  try {
    const { username, password, email } = await req.body;
    const userdata = await User.findOne({ email: email });
    if (userdata) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({ username, email, password });
    const userdat = await user.save();
    const token = jwt.sign({ email }, SECRETKEY);
    res.status(200).json({
      message: "Registration succesfull",
      token,
      id: userdat._id,
      username,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User does not exist" });
    if (password == user.password) {
      const token = jwt.sign({ email }, SECRETKEY);
      return res.status(200).json({
        email: user.email,
        token,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
