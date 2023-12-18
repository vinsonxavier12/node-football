const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    unique: true,
  },
  league: {
    type: String,
    trim: true,
    default: "not specified",
  },
  team: {
    type: String,
    trim: true,
    required: [true, "Team is required"],
  },
  nationality: {
    type: String,
    trim: true,
    required: [true, "Nationality is requried"],
  },
  ranking: {
    type: Number,
  },
});
const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
