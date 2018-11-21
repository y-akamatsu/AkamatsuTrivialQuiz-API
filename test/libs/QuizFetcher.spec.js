const assert = require('power-assert');
const QuizFetcher = require('../../libs/QuizFetcher');

describe('QuizFetcherクラスのテスト', () => {
  it('QuizFetcher.fetchメソッドの実行結果の確認', () => {
    // QuizFetcher.fetchはPromiseオブジェクトを返すため、returnをつけることで非同期のテストが出来る
    // 以前作っていただいた、test/libs/APIClient.spec.jsでも同じことをしている
    // 1. QuizFetcher.fetchを実行
    return QuizFetcher
      .fetch(quizInstanceList => { 
        // 2. QuizFetcher.fetchを実行した際に、Promise経由で値を取得する。
        assert.equal(Array.isArray(quizInstanceList), true);
        // 3. 2で取得した値の内容がQuizインスタンスの配列であるかどうか確認する。
        // 4. 各Quizインスタンスのプロパティに値が入っていることを確認する
      });
  });
});