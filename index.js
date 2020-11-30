const express = require("express");
const app = express();
const morgan = require('morgan');

const employee = require("./Routes/Employee")
const admin = require("./Routes/Admin")


const auth = require("./middleware/authentication.js")
const cors = require("./middleware/cors")

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


app.get("/",(req,res,next)=>{
    res.status(200).json({code:200,message:"HR SYSTEMS"})
})
app.use("/Admin",admin)
app.use(auth)
app.use("/HR",employee)


app.listen(process.env.PORT ||4000,()=>{

    console.log("HR SYSTEM RUNNING...")
})
