const express = require('express');
const routerRnder = express.Router();
const QuizFetcher = require('../libs/QuizFetcher');

routerRnder.get("/", function (req, res) {
  res.render("index");
});

routerRnder.get("/quiz", function (req, res) {
  QuizFetcher
    .fetch()
    .then(quizInstances => {
      res.render("quiz", { quizInstances });
    });
});

module.exports = routerRnder;