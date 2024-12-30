const { validationResult } = require("express-validator");
const usermodel = require("../models/user_model");
const userService = require("../services/user.service");
const blackListToken=require("../models/blacklistToken.model")

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullName, email, password } = req.body;
  const hashedPassword = await usermodel.hashPassword(password);

  const isUserAlreadyExist = await usermodel.findOne({ email });
  if(isUserAlreadyExist){
    return res.status(400).json({message:"User already exist"})
  }
  const user = await userService.createUser({
    firstName: fullName.firstName,
    lastName: fullName.lastName,
    email,
    password: hashedPassword,
  });
  console.log(user);
  const token = user.generateAuthToken();
  res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  const { email, password } = req.body;
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const user = await usermodel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({ token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token=req.cookies.token|| req.headers.authorization.split(" ")[1];
  await blackListToken.create({token})
  res.status(200).json({ message: "Logout successfully" });
};
