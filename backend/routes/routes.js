const express = require("express");
const router = express.Router();
const userController = require("../controller/user_model");
const { body } = require("express-validator");


const authMiddleware = require("../middleware/users.middlewares");
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

router.post('/login',[
  body("email").isEmail().withMessage("invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be length 6"),
]
,userController.loginUser)

router.get("/profile",authMiddleware.authUser, userController.getUserProfile);

router.get("/logout",authMiddleware.authUser, userController.logoutUser); 
module.exports = router;
