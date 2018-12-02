const assert = require('power-assert');
const QuizFetcher = require('../../libs/QuizFetcher');

describe('QuizFetcherクラスのテスト', () => {
  it('QuizFetcher.fetchメソッドの実行結果の確認', () => {
    return QuizFetcher
      .fetch()
      .then(quizInstanceListMap => {
        assert.equal(Array.isArray(quizInstanceListMap), true);
        assert.equal(quizInstanceListMap);
      });
  });
});