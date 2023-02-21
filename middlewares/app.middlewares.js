const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const asyncError = require("./errors.Middlewares");
const appRoutes = require("../routes/route");
require("../db/connect")();

module.exports = (app) => {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
  appRoutes(app);

  app.use(asyncError);
};
