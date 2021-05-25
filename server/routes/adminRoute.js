const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const app = express();

router
  .post("/user", async (req, res) => {
    adminController.postAuser(req,res)
  })
  .post("/user/login", async (req, res) => {
    adminController.logAuser(req,res)
  })


module.exports = router;
