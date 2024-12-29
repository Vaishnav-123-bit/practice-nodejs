const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const jwt =require("jsonwebtoken")
const userSchema=new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required :true,
            minlength:[3, "FirstName required "]

        }
        ,
        lastName:{
            type:String,
     
            minlength:[3, "Lastname required "]
        }
    },
    email:{
        type:String,
        required :true,
        unique:true,
        minlength:[5, "email required "]
    },
    password:{
       
            type:String,
            required :true,
            minlength:[5, "password is required "],
            select:false,  // password not used for finding the user 
        
    },
    socketId:{
        type:String,

    }
})


// method

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this.id}, process.env.JWT_SECRET, {expiresIn:'24h'})
    return token
}

userSchema.methods.comparePassword=async function (password){
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashPassword=async function (password) {
    return await bcrypt.hash(password,10);
    

}

const usermodel=mongoose.model("user",userSchema);

module.exports=usermodel