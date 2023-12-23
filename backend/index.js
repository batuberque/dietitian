const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./mongoose-connection");
require("dotenv").config();

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");
const postRouter = require("./routes/post");
const contactRouter = require("./routes/contact");
const projectRouter = require("./routes/project");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/post", postRouter);
app.use("/contact", contactRouter);
app.use("/project", projectRouter);

module.exports = app;
