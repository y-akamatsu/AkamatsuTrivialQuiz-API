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
        assert.equal(Array.isArray(response.body), true, '配列ではありません');
        assert.equal(response.body.length, 10, 'データの数が合っていません');
        response.body.forEach(quizData => {
          assert.equal(typeof quizData.category, 'string', 'プロパティの型が正しくありません');
          assert.equal(typeof quizData.type, 'string', 'プロパティの型が正しくありません');
          assert.equal(typeof quizData.difficulty, 'string', 'プロパティの型が正しくありません');
          assert.equal(typeof quizData.question, 'string', 'プロパティの型が正しくありません');
          assert.equal(typeof quizData.correctAnswer, 'string', 'プロパティの型が正しくありません');
          assert.equal(Array.isArray(quizData.incorrectAnswers), true, 'プロパティの型が配列になっていません');
          assert.equal(quizData.incorrectAnswers.length > 0, true, 'プロパティの型に値が一つも入っていません');
        });
      });
  });
});