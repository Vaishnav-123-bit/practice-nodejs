const usermodel=require("../models/user_model")

module.exports.createUser=async({
    firstName,lastName,email,password
})=>{
    if(!firstName || !email || !password){
        throw new Error("All fields required")
    }
    const user=usermodel.create({
        fullName:{
            firstName,
            lastName,

        },
        email,
        password
    })

    return user
}
