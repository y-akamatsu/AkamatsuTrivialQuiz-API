const APIClient = require('./APIClient');
const Quiz = require('./QUiz');

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
      　// 3.resultsのデータをコールバック関数のquizDataでQuizクラスのインスタに渡し.map()で新しい配列を作る
        const quizInstanceListMap = results.map(quizData => {
          const quiz = new Quiz(
            quizData.category,
            quizData.type,
            quizData.difficulty,
            quizData.question,
            quizData.correct_answer,
            quizData.incorrect_answers
          )
          return quiz;
        });
        // 4. 3で作ったQuizインスタンスが格納されている配列を呼び出し元に返す
        return quizInstanceListMap;
      });
  }
};
module.exports = QuizFetcher;
