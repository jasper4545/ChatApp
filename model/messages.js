const sequelize = require("../model/sequelize")
const {DataTypes} = require("sequelize")

const messages = sequelize.define("messages",{
  username:{
    type: DataTypes.STRING,
    allownull: false
  },
  sender:{
    type: DataTypes.STRING,
    allownull:false
  },
  message:{
    type: DataTypes.STRING,
    allownull:false
  },
  timeSent:{
    type: DataTypes.STRING,
    allownull:false
  }
})

module.exports = messages