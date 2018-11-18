const APIClient = require('../../libs/APIClient');
const Quiz = require('../../libs/Quiz');

class quizFetcher {
  static fetch() {
    // 1. APIClient.fetchで問題データ取得
    APIClient.fetch('https://opentdb.com/api.php?amount=10')
      .then(response => {
        return response.json();
        // `APIClient.spec.js`のテスト内容より `json.results` がクイズデータになる
        // json.resultsのデータを使ってQuizクラスのインスタンス生成
        const quiz = new Quiz('category', 'type', 'difficulty', 'question', 'correctAnswer', [0, 1, 2]);
      });
    // (json.resultsは複数あるので、ここで複数のQuizクラスのインスタンスを生成)
  }
};

// 3. 2で生成されるQuizクラスのインスタンスは複数(おそらく10個)あるので、それを１つの配列に格納する。
// 4. 3で作ったQuizインスタンスが格納されている配列を呼び出し元に返す



module.exports = quizFetcher;
