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
        quizInstanceListMap.forEach(function(quiz) {
          assert.equal(quiz.category, 'category', 'プロパティの値が違います。');
          assert.equal(quiz.type, 'type');
          assert.equal(quiz.difficulty, 'dificulty');
          assert.equal(quiz.question, 'question');
          assert.equal(quiz.correctAnswer, 'correctAnswer');
          assert.equal(quiz.incorrectAnswer, [0, 1, 2]);

        });
      });
  });
});