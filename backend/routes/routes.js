const express = require("express");
const router = express.Router();
const userController = require("../controller/user_model");
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid email"),
    body(`fullName.firstName`).isLength({ min: 3 }).withMessage("3 chars long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be length 6"),
  ],
  userController.registerUser
);
module.exports = router;