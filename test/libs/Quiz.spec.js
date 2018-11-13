const assert = require('power-assert');
const Quiz = require('../../libs/Quiz');

const quiz = new Quiz('category', 'type', 'difficulty', 'question', 'correctAnswer', []);
describe('Quizクラスのテスト', () => {
  it('categoryはプリミティブ型である', () => {
    assert.equal(typeof quiz.category, 'string');
  });

  it('typeはプリミティブ型である', () => {
    assert.equal(typeof quiz.type, 'string');
  });

  it('difficultyはプリミティブ型である', () => {
    assert.equal(typeof quiz.difficulty, 'string');
  });

  it('questionはプリミティブ型である', () => {
    assert.equal(typeof quiz.question, 'string');
  });

  it('correctAnswerはプリミティブ型である', () => {
    assert.equal(typeof quiz.correctAnswer, 'string');
  });

  it('incorrectAnswersはオブジェクト型である', () => {
    assert.deepStrictEqual(typeof quiz.incorrectAnswers, 'object');
  });
});