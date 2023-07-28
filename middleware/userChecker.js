
const userChecker = (req,res,next)=>{
  if(req.session.fullname == undefined){
    res.redirect("/login")
    return
  }
  next()
}

module.exports = userChecker