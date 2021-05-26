const jwt = require("jsonwebtoken")
const {UserModel} = require("../models/user.model")

const auth = async(req,res,next)=>{
    try{
        const token = req.header("authorization").replace("Bearer ","")
        
        const decoded = jwt.verify(token,"newUserSecret")
       
        const user = await UserModel.findOne({_id:decoded._id,"tokens.token":token})
        if(!user){
            throw new Error
        }
        req.token = token
        req.user = user
        

        next()
        
    }catch(e){res.status(401).send({error:"please authenticate"})}
}

module.exports={auth}