const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./mongoose-connection");

const postRouter = require("./routes/post");
const indexRouter = require("./routes/index");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/post", postRouter);
app.use("/", indexRouter);

module.exports = app;
