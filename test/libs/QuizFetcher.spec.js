const assert = require('power-assert');
const QuizFetcher = require('../../libs/QuizFetcher');

describe('QuizFetcherクラスのテスト', () => {
  it('QuizFetcher.fetchメソッドの実行結果の確認', () => {
    // 1. QuizFetcher.fetchを実行
    return QuizFetcher
      .fetch()
      // 2. QuizFetcher.fetchを実行した際に、Promise経由で値を取得する。
      .then(quizInstanceListMap => {
        // 3. 2で取得した値の内容がQuizインスタンスの配列であるかどうか確認する。
        assert.equal(Array.isArray(quizInstanceListMap), true);
        // 4. 各Quizインスタンスのプロパティに値が入っていることを確認する。
        quizInstanceListMap.forEach(function (quizData) {
          assert.equal(typeof quizData.category, 'string', 'プロパティに値が入っていません');
          assert.equal(typeof quizData.type, 'string', 'プロパティに値が入っていません');
          assert.equal(typeof quizData.difficulty, 'string', 'プロパティに値が入っていません');
          assert.equal(typeof quizData.question, 'string', 'プロパティに値が入っていません');
          assert.equal(typeof quizData.correctAnswer, 'string', 'プロパティに値が入っていません');
          assert.equal(Array.isArray(quizData.incorrectAnswers), true, 'プロパティに値が入っていません');
          assert.equal(quizData.incorrectAnswers.length > 0, true, '配列に値が一つも入っていません');
        });
      });
  });
});