const express = require("express");

// Import note route
const routes = require("./routes");

const app = express();

app.use("/routes", routesRouter);

module.exports = app;
