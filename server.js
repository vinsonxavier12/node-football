require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successfull");
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at ", port);
});
