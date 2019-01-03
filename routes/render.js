const express = require('express');
const renderRouter = express.Router();

renderRouter.get("/", function (req, res) {
  res.render("index");
});
renderRouter.get("/quiz", function (req, res) {
  res.render("quiz");
});

module.exports = renderRouter;