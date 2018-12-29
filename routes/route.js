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

router.get("/api/quiz", function (req, res) {
  QuizFetcher
    .fetch()
    .then(quizInstanceListMap => {
      res.json(quizInstanceListMap);
    });
});


module.exports = router;