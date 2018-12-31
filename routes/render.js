const express = require('express');
const renderRoute = express.Router();

renderRoute.get("/", function (req, res) {
  res.render("index");
});

renderRoute.get("/quiz", function (req, res) {
  res.render("quiz", );
});

module.exports = renderRoute;