const APIClient = require('../../libs/APIClient');
const Quiz = require('../../libs/Quiz');

class QuizFetcher {
  static fetch() {
    // 1. APIClient.fetchで問題データ取得
    APIClient.fetch('https://opentdb.com/api.php?amount=10')
      .then(json => {
        return json();
      });
  }
  // 2. 1で取得した問題データを使ってQuizクラスのインスタンス生成

};

// 3. 2で生成されるQuizクラスのインスタンスは複数(おそらく10個)あるので、それを１つの配列に格納する。
// 4. 3で作ったQuizインスタンスが格納されている配列を呼び出し元に返す



module.exports = QuizFetcher;
