const sequelize = require("../model/sequelize")
const {DataTypes} = require("sequelize")

const users = sequelize.define("users",{
  fullname:{
    type: DataTypes.STRING,
    allownull: false
  },
  username:{
    type: DataTypes.STRING,
    allownull:false
  },
  password: {
    type: DataTypes.STRING,
    allownull:false
  }
})

module.exports = users