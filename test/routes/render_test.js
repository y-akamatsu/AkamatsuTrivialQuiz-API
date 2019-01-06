const request = require('supertest');
const app = require('../../index');

function appRequest() {
  request(app)
    .get()
    .expect(200, done)
};

describe('GET/', () => {
  it('indexファイルのrenderのルーティングの確認', () => {
    appRequest()
  });
});

describe('GET/quiz', () => {
  it('quizファイルのrenderのルーティングの確認', (done) => {
    request(app)
      .get('/quiz')
      .expect(200, done);
  });
});