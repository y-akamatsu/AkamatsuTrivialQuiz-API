const express = require('express');
const routerApi = express.Router();
const QuizFetcher = require('../libs/QuizFetcher');

routerApi.get("/api/quiz", function (req, res) {
  QuizFetcher
    .fetch('http://localhost:3000/api/quiz')
    .then(quizInstanceListMap => {
      res.json(quizInstanceListMap);
    });
});


module.exports = routerApi;