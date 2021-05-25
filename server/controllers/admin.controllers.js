const { userModel } = require("../models/user.model")

const postAuser= async (req,res)=>{
    try{
        const {firstName,lastName,dateOfBirth,email,skillLevel} = req.body.body
        const user = await  new userModel({
            firstName,
            lastName,
            dateOfBirth,
            email,
            skillLevel
        })
        user.save()
        res.status(200).json({"success":user})
    } catch(e){return res.status(400).json({ "error": e });}
}

// to validate
const logAuser=async (req,res)=>{
    try{
        const {password,email} = req.body.body
        const loginUser = await userModel.findOne({email:email})
        res.status(200).json({"success":loginUser})
    } catch(e){return res.status(400).json({ "error": e });}
}

module.exports={postAuser,logAuser}