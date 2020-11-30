const express = require('express');
const HR = express.Router();
const db = require('../config/database')


HR.post("/",async(req,res,next)=>{
    const {nombre , apellido, numero , correo, direccion} = req.body

    if(nombre && apellido && numero && correo && direccion){
       let query = `Insert Into hr_employee(nombre , apellidos, Telefono , correo, direccion)`
       query += `VALUES ('${nombre}','${apellido}','${numero}','${correo}','${direccion}')`
       const rows = await db.query(query)
       if(rows.affectedRows ==1){
        return res.status(201).json({code:201,message:"Employe added Correctly"})

    }else{
        return res.status(500).json({code:500,message:"Error"})
    }
    }
    else{
        res.status(500).json({code:500,message:"Campos Incompletos"})
    }
})

HR.put("/:id([0-9]{1,3})",async(req,res,next)=>{
    const id = req.params.id
    const {nombre , apellido, numero , correo, direccion} = req.body
    if(nombre && apellido && numero && correo && direccion){
        let query = `Update  hr_employee set nombre = '${nombre}' , apellidos = '${apellido}'  , Telefono ='${numero}'  , correo ='${correo}'  , direccion = '${direccion}' `
        query += `where id = ${id}`
        const rows = await db.query(query)
        if(rows.affectedRows ==1){
         return res.status(201).json({code:201,message:"Employe edited correctly"})
 
     }else{
        return res.status(500).json({code:500,message:"Error"})
     }
    }else{
        res.status(500).json({code:500,message:"Campos Incompletos"})
    }

})


HR.delete("/:id([0-9]{1,3})",async(req,res,next)=>{

    const query = `DELETE FROM hr_employee Where id=${req.params.id}`

    const rows  = await db.query(query)
    if(rows.affectedRows == 1 ){
    
        return res.status(200).json({code:200,message:"Empleado Borrado"})
    
    }
    else{return res.status(404).json({code:404,message:`Empleado ${req.params.id} no encontrado`})
    }

})

HR.get("/",async(req,res,next)=>{
    const HR_emp = await db.query("SELECT * FROM hr_employee")
    res.status(200)
    res.json({code:200,message:HR_emp})
    })



HR.get('/:name([A-Za-z]+)',async(req,res,next)=>{
    const name = req.params.name
    const name2 = name.toLowerCase()

    const HR_emp = await db.query("Select * from hr_employee where Nombre = ?",[name2])
        res.status(200).json({code:200,message:HR_emp})
    })

HR.get('/:id([0-9]{1,9})',async(req,res,next)=>{
        const id = req.params.id
        
    
        const HR_emp = await db.query("Select * from hr_employee where ID = ?",[id])
            res.status(200).json({code:200,message:HR_emp})
        })

module.exports = HR