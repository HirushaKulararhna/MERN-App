console.log("hello world");
//2g4K9cCPDfaH9Er


const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use("/" ,(req, res, next) => {
    res.send("It is working.......................................");
})

mongoose.connect("mongodb+srv://admin:2g4K9cCPDfaH9Er@cluster0.qou9a.mongodb.net/")
.then(() => console.log("Connected to MongoGB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));