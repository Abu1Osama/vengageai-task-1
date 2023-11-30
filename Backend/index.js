const express = require("express");
const app = express();
const connection = require("./Config/db");
require("dotenv").config();
const {ContactRouter} =require ("./Routes/contact.route")
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to home page,change route to get details")
})
app.use(ContactRouter)

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
  }
  console.log(`http://localhost:${process.env.port}`);
});
