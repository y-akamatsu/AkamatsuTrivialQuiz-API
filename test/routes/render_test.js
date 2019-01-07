const request = require('supertest');
const app = require('../../index');

function runRequestTest(app, URL, done) {
  request(app)
    .get(URL)
    .expect(200, done)
}

describe('GET /', () => {
  it('indexファイルのrenderのルーティングの確認', (done) => {
    runRequestTest(app, '/', done)
  });
});

describe('GET /quiz', () => {
  it('quizファイルのrenderのルーティングの確認', (done) => {
    runRequestTest(app, '/quiz', done)
  });
});
