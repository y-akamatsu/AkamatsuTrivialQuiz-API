const request = require('supertest');
const app = require('../../index');

function runRequestTest(url) {
  return Promise.resolve(
  request(app)
  .get(url)
  .expect(200)
  );
}

describe('GET /', () => {
  it('indexファイルのrenderのルーティングの確認', () => {
    return runRequestTest('/')
  });
});

describe('GET /quiz', () => {
  it('quizファイルのrenderのルーティングの確認', () => {
    return runRequestTest('/quiz')
  });
});

