const request = require('supertest');
const app = require('../../index');

//テストコードを関数化する

function runRequestTest(url, statusCode) {
  return request(app)
    .get(url)
    .expect(statusCode);
}

describe('GET /', () => {
  it('indexファイルのrenderのルーティングの確認', () => {
    return runRequestTest('/', 200);
  });
});

describe('GET /quiz', () => {
  it('quizファイルのrenderのルーティングの確認', () => {
    return runRequestTest('/quiz', 200);
  });
});

describe('GET /aaa', () => {
  it('renderのルーティングのエラー確認', () => {
    return runRequestTest('/aaa', 404);
  });
});

