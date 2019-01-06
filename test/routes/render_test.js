const request = require('supertest');
const app = require('../../index');

describe('GET/', () => {
  it('renderのルーティングの確認', (done) => {
    request(app)
      .get('/', '/quiz')
      .expect(200, done);
  });
});