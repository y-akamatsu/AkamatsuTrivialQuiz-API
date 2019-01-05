const request = require('supertest');
const app = require('../../index');

describe('GET/', () => {
  it('renderのルーティングの確認', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200, done)
  });
});