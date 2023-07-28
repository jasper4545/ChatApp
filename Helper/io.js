const express = require("express")
const app = express()
const server = require("http").createServer(app)
const PORT = process.env.PORT || 4546
const io = require("socket.io")(server,{
cors: {
  origin:"*"
}
})

module.exports = {io, app, server, PORT}