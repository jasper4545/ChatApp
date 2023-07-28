require("dotenv").config()
const express = require("express")
const {io, server, app, PORT} = require("./Helper/io")
const session = require("express-session")
      //middlewares
 
app.use(session({
  secret: "jasperSystem",
  resave:false,
  saveUninitialized: false,
  cookie:{ maxAge: null },
}))
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

    //ROTES
app.get("/", (req,res)=>{
  res.render("index")
})
app.use("/login", require("./routes/loginRouter"))
app.use(require("./middleware/userChecker"))
app.use("/messages", require("./routes/messagesRouter"))
app.use("/message", require("./routes/chatRouter"))

server.listen(PORT, ()=>{
  console.log("Server Started!")
})