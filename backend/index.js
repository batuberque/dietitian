const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");

require("./mongoose-connection");
require("dotenv").config();
require("./fileSync");

const authRouter = require("./routes/auth");
const indexRouter = require("./routes/index");
const contactRouter = require("./routes/contact");
const projectRouter = require("./routes/project");

const app = express();

app.use(helmet());
app.use(compression());

const corsOptions = {
  origin: [process.env.FRONTEND_DOMAIN, process.env.REAL_DOMAIN],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/uploads", express.static("uploads"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/contact", contactRouter);
app.use("/project", projectRouter);

module.exports = app;
