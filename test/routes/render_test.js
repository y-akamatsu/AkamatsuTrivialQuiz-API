const request = require('supertest');
const app = require('../../index');

function runRequestTest(url) {
  return new Promise(function (resolve) {
    request(app)
      .get(url)
      .expect(200);
    resolve(url);
  });
}

describe('GET /', () => {
  it('indexファイルのrenderのルーティングの確認', () => {
    runRequestTest()
      .then(url => {
        assert.equal(url, '/');
      });
  });
});

describe('GET /quiz', () => {
  it('quizファイルのrenderのルーティングの確認', () => {
    return runRequestTest()
      .then(url => {
        assert.equal(url, '/quiz');
      });
  });
});
