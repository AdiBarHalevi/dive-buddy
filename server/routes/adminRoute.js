const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const { userModel } = require("../models/user.model");
const app = express();

router
  .post("/user", (req, res) => {
    adminController.postAuser(req,res)
  })

  .post("/user/login", async (req, res) => {
    const {email,password} = req.body.body
  try{
    const user = userModel.findByCredentials(email,password)
    res.send(user)
  }
    catch(e){res.status(400).send(e)}
  })


module.exports = router;
