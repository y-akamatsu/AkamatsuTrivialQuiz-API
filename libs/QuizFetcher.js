const APIClient = require('../../libs/APIClient');
const Quiz = require('../../libs/Quiz');

class QuizFetcher {
  // APIClient.fetchメソッドを使ってクイズデータを取得
  APIClient() {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(response => {
        return response.json();
      });
  }
  //クイズデータをQuizクラスのインスタンスとしてデータを保持
  Quiz() {
    return [
      this.category = category,
      this.type = type,
      this.difficulty = difficulty,
      this.question = question,
      this.correctAnswer = correctAnswer,
      this.incorrectAnswers = incorrectAnswers];
  }
};
