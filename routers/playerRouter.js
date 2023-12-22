const express = require("express");
const playerController = require("../controllers/playerController");

const router = express.Router();

router
  .route("")
  .post(playerController.createPlayer)
  .get(playerController.getAllPlayers);

router
  .route("/:id")
  .get(playerController.getPlayer)
  .put(playerController.updatePlayer)
  .delete(playerController.deletePlayer);

module.exports = router;
