const express = require("express");
const messagesRouter = express.Router();
const {io,app} = require("../Helper/io")
const users = require("../model/users")
const messages = require("../model/messages")
const cache = require("../Helper/cache")


const dataCache = () => (req,res,next)=>{
 io.once("connection", socket=>{
      socket.join(req.session.fullname)
      console.log(`${req.session.fullname} is waiting for sender`)
      socket.on("receiveMessage", async (data)=>{
        await messages.create({
          username: req.session.username,
          sender: data.sender,
          message: data.message
        }).then(()=> console.log("data save to database")).catch((e)=> console.log("error "+e))
    })
 })
   const caching = cache.get("messageCache")
   if(caching){
     const newCache = JSON.parse(caching)
     console.log("we use cache data now")
      res.render("messages", {owner: req.session.fullname, messages: newCache})
      return;
   }
   next()
}

       //message
messagesRouter.route("/")
  .get(dataCache(), async(req,res)=>{
   
    const result = await users.findAll()
    console.log("caching data first")
    cache.set("messageCache", JSON.stringify(result))
    const data = cache.get("messageCache")
     res.render("messages", {owner: req.session.fullname, messages: JSON.parse(data)})
  })

messagesRouter.route("/:user")
  .get((req, res) => {
    io.once("connection", socket=>{
      socket.join(req.session.fullname)
    console.log(req.session.fullname+" entering message mode")
      socket.on("message", data=>{
        console.log(`${data.sender} send message to ${data.receiver}`)
        io.to(data.receiver).emit("receiver", data)
      })
  })// user endpoint
    res.render("conversation", { receiver: req.params.user, sender: req.session.fullname, owner: req.session.fullname})
  });

 


  module.exports = messagesRouter