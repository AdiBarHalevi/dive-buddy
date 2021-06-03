const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const { UserModel } = require("../models/user.model");
const eventController = require("../controllers/event.controller");
const { auth } = require("../middleware/auth");
const app = express();

router
  .get("/", async (req, res) => {
    try {
      eventController.getAllEvents(req, res);
    } catch (e) {
      console.log(e);
    }
  })
  .post("/", async (req, res) => {
    try {
      eventController.postEvent(req, res);
    } catch (e) {
      console.log(e);
    }
  })
  .put("/", async (req, res) => {
    try {
      eventController.joinAnEvent(req, res);
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
