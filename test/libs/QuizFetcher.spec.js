const assert = require('power-assert');
const QuizFetcher = require('../../libs/QuizFetcher');

describe('QuizFetcherクラスのテスト', () => {
  it('QuizFetcher.fetchメソッドの実行結果の確認', () => {
    // QuizFetcher.fetchはPromiseオブジェクトを返すため、returnをつけることで非同期のテストが出来る
    // 1. QuizFetcher.fetchを実行
    return QuizFetcher
      // 2. QuizFetcher.fetchを実行した際に、Promise経由で値を取得する。
      .fetch()
      .then(quizInstanceListMap => {
        // 3. 2で取得した値の内容がQuizインスタンスの配列であるかどうか確認する。
        assert.equal(Array.isArray(quizInstanceListMap), true);
      });
  });
  // 4. 各Quizインスタンスのプロパティに値が入っていることを確認する
});