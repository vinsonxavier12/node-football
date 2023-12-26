const Player = require("../models/playerModel");

exports.createPlayer = async (req, res) => {
  try {
    const newPlayer = await Player.create(req.body);
    res.status(200).json({
      status: "created",
      player: newPlayer,
    });
  } catch (err) {
    if (err.code === 11000 && err.keyPattern) {
      return res.status(400).json({
        status: "Failed: Duplicate field",
        message: `The field ${JSON.stringify(
          err.keyPattern
        )} is a duplicate value.  Please provide a unique value`,
      });
    }
    res.status(400).json({
      status: "failed",
      errMsg: err.message,
      err,
    });
  }
};

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find(req.query);
    res.status(200).json({
      status: "success",
      players,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      errMsg: err.message,
      err,
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

exports.updatePlayer = async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "success",
      updatedPlayer,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      errMsg: err.message,
    });
  }
};

exports.deletePlayer = async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Deleted",
      deletedPlayer,
    });
  } catch (err) {
    res.status(400).json({
      status: "Error",
      errMsg: err.message,
    });
  }
};
