const {UserModel } = require("../models/user.model");
const bcrypt = require("bcryptjs");

const postAuser = async (req, res) => {
  const {
    password,
    firstName,
    lastName,
    dateOfBirth,
    email,
    skillLevel,
  } = req.body.body;
  try {
    const user = await new UserModel({
      firstName,
      lastName,
      dateOfBirth,
      email,
      skillLevel,
      password,
    });
    await user.save();
    const token = await user.generateAuthToken()
    res.status(200).send({user,token});
  } catch (e) {
     res.status(400).send(e);
  }
};

// to validate
// const findByCredentials=async (req,res)=>{
//     try{
//         const {password,email} = req.body.body
//         const loginUser = await userModel.findOne({email:email})
//         res.status(200).json({"success":loginUser})
//     } catch(e){return res.status(400).json({ "error": e });}
// }

module.exports = { postAuser };
