const users = require("../model/users")

const loginAuth = () => async (req,res,next)=>{
  const {username, password} = req.body
  try{
    const result = await users.findAll({
      where:{username, password}
  })
if(result.length == 0){
    res.render("login",{error: "wrong email or password"})
    return
}
req.session.username= result[0].dataValues.username
req.session.password= result[0].dataValues.password
req.session.fullname= result[0].dataValues.fullname
  }catch(err){
    console.log("ERROR ON DATABASE, HERE ARE THE DETAILS "+err)
    res.send(err)
  }
console.log("you have successfully login")
next()
}
module.exports = loginAuth