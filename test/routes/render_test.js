const request = require('supertest');
const app = require('../../index');

function runRequestTest(url) {
  request(app)
    .get(url)
    .expect(200);
}

describe('GET /', () => {
  it('indexファイルのrenderのルーティングの確認', () => {
    return runRequestTest('/')
    .then(app)
  });
});

describe('GET /quiz', () => {
  it('quizファイルのrenderのルーティングの確認', () => {
    return runRequestTest('/quiz')
    .then(app)
  });
});

