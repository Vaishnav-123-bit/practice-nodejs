const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const captainSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "FirstName required "]

        },
        lastName: {
            type: String,

            minlength: [3, "Lastname required "]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [5, "email required "]
    },
    password: {
        type: String,
        required: true,
        minlength: [5, "password is required "],
        select: false,  // password not used for finding the user 

    },
    socketId: {
        type: String,
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,"color required"]
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,"plate required"]
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"capacity must be greater than 0"]
        },
        vehicleType:{
            type:String,
            enum:["car","motercycle","auto"],
            required:true,
        },
    },
  
    location:{
        latitude:{
            type:Number,
          
        },
        longitude:{
            type:Number,
        }
    }
})


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}    
const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel