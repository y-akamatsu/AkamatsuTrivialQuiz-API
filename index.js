const express = require("express");
const app = express();
const QuizFetcher = require('./libs/QuizFetcher.js');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("index");
});

app.get("/quiz", function(req, res){
  res.render("quiz", QuizFetcher.fetch().then(quizInstanceListMap => {
    quizInstanceListMap.forEach(function(quizData){
      quizData.question, 
      quizData.correctAnswer, 
      quizData.incorrectAnswers
    });
  }));
});
app.listen(3000, function(){
    console.log("Server has started!");
});