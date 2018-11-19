const APIClient = require('./APIClient');
const Quiz = require('./Quiz');

class QuizFetcher {
  static fetch() {
    // 1. APIClient.fetchで問題データ取得
    return APIClient
      .fetch('https://opentdb.com/api.php?amount=10')
      .then(response => {
        //コールバック関数の引数のresponseオブジェクトでresultsの配列を受け取る
        //変数resultsにresponse.resultsを代入
        const results = response.results;
        // 2. 1で取得した問題データを使ってQuizクラスのインスタンス生成
        //quizInstanceListという空の配列を作成
        const quizInstanceList = [];
        //forEachでresultsの配列から1つづつ値を取得しコールバック関数の引数のquizDataに代入する
        results.forEach(quizData => {
          const quiz = new Quiz(
            quizData.category,
            quizData.type,
            quizData.difficulty,
            quizData.question,
            quizData.correctAnswer,
            quizData.incorrectAnswers
          );
          // 3. 2で生成されるQuizクラスのインスタンスは複数(おそらく10個)あるので、それを１つの配列に格納する。
          //quizInstanceListの配列の要素に対して新たな配列を生成して戻り値を返す
          quizInstanceList.map(quiz);
        });
        // 4. 3で作ったQuizインスタンスが格納されている配列を呼び出し元に返す
        return quizInstanceList;
      });
  }
};

module.exports = QuizFetcher;