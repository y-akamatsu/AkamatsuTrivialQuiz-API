const request = require('supertest');
const app = require('../../routes/render');

describe('/', () => {
  it('renderのルーティングの確認', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});