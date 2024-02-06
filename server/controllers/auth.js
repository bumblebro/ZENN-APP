import User from "../models/user.js";
import jwt from "jsonwebtoken";

const SECRETKEY = "Shreyas";

export const register = async (req, res) => {
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
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const data = User.findOne({ email });
  console.log(data);
};
