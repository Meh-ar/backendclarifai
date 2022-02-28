const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const knex = require("knex");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors())
const database = {
  users: [
    {
      name: "mehdi",
      email: "mehdi@gmail.com",
      password: "green",
      entries : 0 , 
      joined : new Date()
    },
    {
        name: "sal",
        email: "sali@gmail.com",
        password: "worms",
        entries : 0 , 
        joined : new Date()
    },
  ],
};
app.get("/", (req, res) => {
  console.log("hello");
  res.json(database);
});
app.post("/", (req, res) => {
    console.log("hello");
    res.json(database);
  });
app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("signin successfull");
    console.log("sign in successfull");
  } else {
    res.status(400).json("wrong credientials");
    console.log("wrong")
  }
});
app.post("/register" , (req,res)=>{
   const {email , password , name} = req.body; 
   if(email.includes("@gmail.com") && password.length >=5  ){
   database.users.push({name : name , password : password ,
                  email : email , entries : 0 ,  joined : new Date()})
               return res.json("user registered")
            }
                
   else
   { return res.status(400).json("please use a valid email and password")}
})

app.listen("3001");
