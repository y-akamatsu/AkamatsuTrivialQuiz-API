const request = require('supertest');
const app = require('../../routes/api');

describe('GET/api/quiz', () => {
  it('responds with json', () => {
    return request(app)
      .get('/api/quiz')
      .set('Accept', 'application/json')
      .expect(200)
      .then(json => {
        assert(json.body.length, 10);
      })
  });
});