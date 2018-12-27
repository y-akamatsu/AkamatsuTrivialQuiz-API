const APIClient = require('./APIClient');
const Quiz = require('./Quiz');

class QuizFetcher {
  static fetch() {
    // 1. APIClient.fetchで問題データ取得
    return APIClient
      .fetch('https://opentdb.com/api.php?amount=10')
      .then(quizDataObj => {
        const quizInstanceListMap = quizDataObj.results.map(quizData => {
          const quiz = new Quiz(
            quizData.category,
            quizData.type,
            quizData.difficulty,
            quizData.question,
            quizData.correct_answer,
            quizData.incorrect_answers
          );
          return quiz;
        });
        return quizInstanceListMap;
      });
  }
};
module.exports = QuizFetcher;
