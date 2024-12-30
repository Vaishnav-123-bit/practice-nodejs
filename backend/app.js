const dotenv=require('dotenv');
dotenv.config();
const express= require('express');
const app=express();
const cors=require('cors')
const connectToDb=require('./db/db')
const userRoutes=require("./routes/routes")
const captainRoutes=require("./routes/captain.routes")
const cookieParser=require('cookie-parser')
connectToDb()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser())


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/users',userRoutes)
app.use('/captains',captainRoutes)

module.exports=app;