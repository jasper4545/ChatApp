const sequel = require("sequelize")

const sequelize = new sequel("chatApp","root", "",{
  host:"localhost",
  dialect: "mysql",
  logging:false
})
module.exports = sequelize