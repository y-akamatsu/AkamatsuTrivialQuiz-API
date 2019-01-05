const request = require('supertest');
const app = require('../../index');

describe('GET/', () => {
  it('renderのルーティングの確認', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});