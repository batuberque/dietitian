const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./mongoose-connection");

const indexRouter = require("./routes/index");
const postRouter = require("./routes/post");
const contactRouter = require("./routes/contact");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/post", postRouter);
app.use("/contact", contactRouter);

module.exports = app;
