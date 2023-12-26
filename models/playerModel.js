const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    unique: true,
    minlength: [2, "A player name must have atleast 2 characters"],
    maxlength: [25, "A player name should not exceed more than 25 characters"],
    validate: {
      validator: function (val) {
        const hasInvalidCharacters = /^[a-zA-Z\s]+$/;
        return hasInvalidCharacters.test(val);
      },
      message: "A player name should only consist alphabetes and white spaces.",
    },
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
    required: [true, "Ranking is required"],
    unique: [
      true,
      `Ranking ${this.ranking} is already taken. Must provide another unique value`,
    ],
  },
});
const Player = mongoose.model("Player", playerSchema);
module.exports = Player;
