const { EventModel } = require("../models/event.model");

const getAllEvents = async (req, res) => {
  try {
    const ans = await EventModel.find({});
    res.status(200).send({ ans });
  } catch (e) {
    res.status(400).send(e);
  }
};

const postEvent = async (req, res) => {
  try {
    const { date, location, participents } = req.body.body;
    const ans = await new EventModel({
      date,
      location,
      isActive: true,
      participents,
    });
    ans.save();
    res.status(200).send(ans);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { getAllEvents, postEvent };
