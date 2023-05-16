const mongoose = require("mongoose");

const bakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["Rachel", "Ross", "Monica", "Joey", "Chandler", "Phoebe"], //These are the only valid options for Bakers.
  },
  startDate: {
    type: Date,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Baker", bakerSchema);
