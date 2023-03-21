

const express = require('express')
const app = express()
const mysql = require("mysql")
require("dotenv").config()

const cors = require("cors")
app.use(cors())
app.use(express.json())



app.listen(process.env.PORT || 3001,()=>{
  console.log("Running on 3001")
})

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
})

app.post("/create",(req,res)=>{
  const f_name = req.body.fname
  const l_name = req.body.lname
  const age = req.body.age
  const country = req.body.country
  const position = req.body.position
  const wage = req.body.wage

  connection.query("INSERT INTO employee (f_name,l_name,age,country,position,wage) VALUES(?,?,?,?,?,?)",
      [f_name,l_name,age,country,position,wage], (err,res) =>{
        if(err) {console.log(err)}else{console.log(res)}
      })

  // connection.connect((error)=>{
  //   if(error){
  //    console.log(error)
  //   }else {
      
  //   }
  // })
  
})

app.get("/employees",(req,res)=>{
  connection.query("SELECT * FROM employee",(err,result)=>{
    if (err){
      console.log(err)
    }else{
      console.log(result)
       res.send(result)
    }
  })
})








// const data = ""
//   const alldata = async () => {
//     connection.query('SELECT * FROM employee AS data', (error,results) => {
//       return results
//     }).then(results=>{
//       console.log(results)
//     })
//   } 

//   const text = await alldata()






 