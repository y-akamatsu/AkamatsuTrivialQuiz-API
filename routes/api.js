const express = require('express');
const QuizFetcher = require('../libs/QuizFetcher');
const apiRouter = express.Router();


apiRouter.get("/api/quiz", function (req, res) {
  QuizFetcher
    .fetch()
    .then(quizInstanceListMap => {
      res.json(quizInstanceListMap);
    });
});


module.exports = apiRouter;