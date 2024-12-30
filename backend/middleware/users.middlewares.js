const usermodel=require("../models/user_model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser=async(req,res,next)=>{
    const token =req.cookies.token || req.headers.authorization?.split(" ")[1];
  
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    const isBlackListed=await blacklistTokenModel.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET) // decode token
    
        const user=await usermodel.findById(decoded._id) // find user by id

       
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        req.user=user; //set user 
        return next();  // next middleware
         
      
    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }    
}

module.exports.authCaptain=async(req,res,next)=>{
    const token =req.cookies.token || req.headers.authorization?.split(" ")[1];
  
    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }
    const isBlackListed=await blacklistTokenModel.findOne({token:token})
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET) // decode token
    
        const captain=await captainModel.findById(decoded._id) // find user by id

       
        if(!captain){
            return res.status(404).json({message:"Captain not found"})
        }
        req.captain=captain; //set user 
        return next();  // next middleware
         
      
    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }    
}