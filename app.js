const express = require("express");
const morgan = require("morgan");
const app = express();
const playerRouter = require("./routers/playerRouter");

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/players", playerRouter);

module.exports = app;
