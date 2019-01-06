const request = require('supertest');
const app = require('../../index');

const appRequest = request(app);

describe('GET/', () => {
  it('indexファイルのrenderのルーティングの確認', (done) => {
    appRequest
      .get('/')
      .expect(200, done);
  });
});

describe('GET/quiz', () => {
  it('quizファイルのrenderのルーティングの確認', (done) => {
    appRequest
      .get('/quiz')
      .expect(200, done);
  });
});
