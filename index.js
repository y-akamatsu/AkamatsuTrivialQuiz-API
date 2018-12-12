const express = require("express");
const app = express();
const QuizFetcher = require('./libs/QuizFetcher');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/quiz", function (req, res) {
  QuizFetcher
    .fetch(quizInstances => {
      quizInstances.forEach(function (quizInstance) {
        quizInstance.category,
        quizInstance.type,
        quizInstance.difficulty,
        quizInstance.question,
        quizInstance.correctAnswer,
        quizInstance.incorrectAnswers
      });
      res.render("./quiz.ejs", quizInstances);
    });
});
app.listen(3000, function () {
  console.log("Server has started!");
});