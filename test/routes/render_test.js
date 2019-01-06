const request = require('supertest');
const app = require('../../index');

describe('GET/', () => {
  it('indexファイルのrenderのルーティングの確認', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('GET/quiz', () => {
  it('quizファイルのrenderのルーティングの確認', (done) => {
    request(app)
      .get('/quiz')
      .expect(200, done);
  });
});
