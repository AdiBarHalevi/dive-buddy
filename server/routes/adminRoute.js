const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controllers");
const { UserModel } = require("../models/user.model");
const { auth } = require("../middleware/auth");

const app = express();

router
  .get("/user/me", auth, async (req, res) => {
    try {
      res.send(req.user);
    } catch (e) {
      console.log(e);
    }
  })
  .post("/user/signin", (req, res) => {
    adminController.postAuser(req, res);
  })

  .post("/user/login", async (req, res) => {
    try {
      const { email, password } = req.body.body;
      const user = await UserModel.findByCredentials(email, password);

      const token = await user.generateAuthToken();
      res.status(200).send({ user, token });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  })
  .post("/user/logout", auth, async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.user.save();
      res.send("user is out");
    } catch (e) {
      res.status(500).send({ error: e });
    }
  })
  .post("/user/logoutAll", auth, async (req, res) => {
    try {
      req.user.tokens = [];
      await req.user.save();
      res.send("user is out");
    } catch (e) {
      res.status(500).send({ error: e });
    }
  });

module.exports = router;
