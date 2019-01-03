const request = require('supertest');
const app = require('../../routes/api');

describe('apiファイルのルーティングのテスト', () => {
  it('apiのルーティングの確認', () => {
    request(app)
      .get('/quiz')
      .expect('Content-Type', /json/)
  });
});