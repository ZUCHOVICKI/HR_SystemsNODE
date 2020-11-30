const express = require('express');
const Admin = express.Router();
const db = require('../config/database')
const jwt = require('jsonwebtoken');



Admin.post("/login",async(req,res,next)=>{

    const {email,password} = req.body
    const query = `Select * from admin_hr where email = '${email}' and password = '${password}';`
    const rows = await db.query(query)


if(email&&password){
if(rows.length == 1){
    const token = jwt.sign({
        id : rows[0].ID,
        emial: rows[0].email
    }, 'HR_SYSTEM')
    return res.status(200).json({code:200,message:token})
}
else{

    return res.status(200).json({code:401,message:'Datos incorrectos'})
}

}
return res.status(500).json({code:500,message:'Campos Incompletos'})
})



Admin.get("/",async(req,res,next)=>{

    let query = `Select * from admin_hr`
   const rows = await db.query(query);

   
    return res.status(200).json({code:200,message:rows})

})
module.exports = Admin