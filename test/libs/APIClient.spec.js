const assert = require('power-assert');
const APIClient = require('../../libs/APIClient');

describe('APIClientクラスのテスト', () => {
  it('APIClient.fetchの挙動チェック', () => {
    return APIClient
      .fetch('https://opentdb.com/api.php?amount=10')
      .then(json => {

        assert(json.results, Array.isArray, true);
        assert.equal(json.results.length, 10);
      });
  });
});