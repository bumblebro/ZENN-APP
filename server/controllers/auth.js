import User from "../models/user.js";

export const login = async (req, res) => {
  const { username, password, email } = await req.body;
  const userdata = await User.findOne({ email: email });

  if (userdata) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = new User({ username, email, password });
  const userdat = await user.save();
  res.status(200).json({ message: "Completed" });
};

export const register = async (req, res) => {
  const { email, password } = req.body;
};
