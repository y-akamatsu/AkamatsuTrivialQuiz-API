const express = require('express');
const router = express.Router();
const QuizFetcher = require('../libs/QuizFetcher');

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/quiz", function (req, res) {
  QuizFetcher
    .fetch()
    .then(quizInstances => {
      res.render("quiz", { quizInstances });
    });
});

module.exports = router;