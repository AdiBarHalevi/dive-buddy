const { UserModel } = require("../models/user.model");
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
    const token = await user.generateAuthToken();
    res.status(200).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { postAuser };
