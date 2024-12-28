const { validationResult } = require("express-validator")
const usermodel=require("../models/user_model")
const userService=require("../services/user.service")


module.exports.registerUser=async(req,res,next)=>{
const errors=validationResult(req)
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array() })
}

const {fullName,email,password}=req.body;
const hashedPassword=await usermodel.hashPassword(password);

const user=await userService.createUser({
    firstName:fullName.firstName,
    lastName:fullName.lastName,
    email,
    password:hashedPassword
})
console.log(user)
const token=user.generateAuthToken();
res.status(201).json({token,user})

}