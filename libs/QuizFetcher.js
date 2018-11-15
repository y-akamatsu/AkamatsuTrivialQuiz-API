const APIClient = require('../../libs/APIClient');
const Quiz = require('../../libs/Quiz');

class QuizFetcher {
  static fetch() {
    // 1. APIClient.fetchで問題データ取得
    APIClient.fetch('https://opentdb.com/api.php?amount=10')
      .then(json => {
        // `APIClient.spec.js`のテスト内容より `json.results` がクイズデータになる
        return json.results;
      });
    // json.resultsのデータを使ってQuizクラスのインスタンス生成
    // (json.resultsは複数あるので、ここで複数のQuizクラスのインスタンスを生成)
    // return Quizインスタンスの配列とすることで、呼び出し元はPromiseオブジェクトのthen経由でQuizインスタンスの配列を取得でき
    Quiz(json.results){
      return [this.category,
      this.type,
      this.difficulty,
      this.question,
      this.correctAnswer,
      this.incorrectAnswers];
    };
  }
};

// 3. 2で生成されるQuizクラスのインスタンスは複数(おそらく10個)あるので、それを１つの配列に格納する。
// 4. 3で作ったQuizインスタンスが格納されている配列を呼び出し元に返す



module.exports = QuizFetcher;
