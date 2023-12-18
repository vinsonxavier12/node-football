const Player = require("../models/playerModel");

exports.createPlayer = async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.status(200).json({
      status: "created",
      player: newPlayer,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      errMsg: err.message,
    });
  }
};

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json({
      status: "success",
      players,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      errMsg: err.message,
    });
  }
};

exports.getPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    res.status(200).json({
      status: "success",
      player,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      errMsg: err.message,
    });
  }
};
