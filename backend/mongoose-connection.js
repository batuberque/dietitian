const mongoose = require("mongoose");

const connectionUrl =
  process.env.MONGODB_CONNECTION_STRING || "mongodb://mongodb/construction";

mongoose.connect(connectionUrl);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we are connected to mongodb!");
});
