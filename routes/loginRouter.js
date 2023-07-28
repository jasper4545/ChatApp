const express = require("express");
const loginRouter = express.Router()
const loginAuth = require("../middleware/loginAuth")

loginRouter.route("/")
  .get((req,res)=>{
    res.render("login");
  })
  .post(loginAuth(),(req,res)=>{
    res.redirect("messages")
  })
  
  module.exports = loginRouter