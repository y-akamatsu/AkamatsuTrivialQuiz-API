const express = require('express');
const QuizFetcher = require('../libs/QuizFetcher');
const apiRoute = express.Router();


apiRoute.get("/api/", function (req, res) {
  QuizFetcher
    .fetch()
    .then(quizInstanceListMap => {
      res.json(quizInstanceListMap);
    });
});


module.exports = apiRoute;