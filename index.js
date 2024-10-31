//This creates a mini server

require('dotenv').config()


const express = require('express')

//imort express from "express" same as above but module js style, the above is common js style

//contains all the functionalities of express
const app = express()

//can choose any port from total 65,535 ports
const port = 3000


//get request and give response , / is home route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/google", (req,res)=>{res.send("Saiesh Sharma")})

app.get("/login", (req,res)=>{res.send('<h1>Please Login<h1>')})

//always listens for requests on the port
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
