const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./mongoose-connection");
require("dotenv").config();

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");
const contactRouter = require("./routes/contact");
const projectRouter = require("./routes/project");

const app = express();
app.use("/uploads", express.static("uploads"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/project", projectRouter);

module.exports = app;
