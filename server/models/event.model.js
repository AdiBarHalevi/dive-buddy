const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  participents: {
    type: Array,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const EventModel = mongoose.model("event", eventSchema);

module.exports = { EventModel };
