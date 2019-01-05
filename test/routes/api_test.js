const request = require('supertest');
const app = require('../../index');
const assert = require('power-assert');

describe('GET/api/quiz', () => {
  it('Quizデータが10個返ってくるかのチェック', () => {
    return request(app)
      .get('/api/quiz')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        assert.equal(response.body.length, 10, 'データの数が合っていません');
      });
  });
});