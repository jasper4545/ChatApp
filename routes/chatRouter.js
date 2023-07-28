const express = require("express")
const chatRouter = express.Router()
const {io} = require("../Helper/io")
chatRouter.route("/")
  .get((req,res)=>{
  
    res.render("index")
  })
chatRouter.route("/new")
  .get((req,res)=>{
    res.render("conversation")
  })
  io.on("connection", socket=>{
      console.log("Someone connected")
      socket.to("jasper").emit("room", "hallu")
      socket.on("client-response", data=>{
        console.log("chat")
        socket.broadcast.emit("client-receive", data)
      })
    })
  
  module.exports = chatRouter;