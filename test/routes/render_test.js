const request = require('supertest');
const app = require('../../index');
const assert = require('power-assert');

function runRequestTest(url) {
  request(app)
    .get(url)
    .expect(200);
}

describe('GET /', () => {
  it('indexファイルのrenderのルーティングの確認', () => {
    return request(app)
      .get('/')
      .expect(200)
      .then(response => {
        assert(response, '/');
      });
  });
});

describe('GET /quiz', () => {
  it('quizファイルのrenderのルーティングの確認', () => {
    return runRequestTest('/quiz')
  });
});

