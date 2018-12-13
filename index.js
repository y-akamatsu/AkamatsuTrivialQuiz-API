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
    .fetch()
    .then(quizInstanceListMap => {
      // 引数のquizInstancesをejsにわたす
      res.render("quiz", { quizInstanceListMap });
    });
});
app.listen(3000, function () {
  console.log("Server has started!");
});