const assert = require('power-assert');
const Quiz = require('../../libs/Quiz');

const quiz = new Quiz('category', 'type', 'difficulty', 'question', 'correctAnswer', [0, 1, 2]);
describe('Quizクラスのテスト', () => {
  it('categoryはプリミティブ型である', () => {
    assert.equal(typeof quiz.category, 'string');
  });
  it('プロパティの値はcategoryである', () => {
    assert.equal(quiz.category, 'category', true);
  });

  it('typeはプリミティブ型である', () => {
    assert.equal(typeof quiz.type, 'string');
  });
  it('プロパティの値はtypeである', () => {
    assert.equal(quiz.type, 'type', true);
  });

  it('difficultyはプリミティブ型である', () => {
    assert.equal(typeof quiz.difficulty, 'string');
  });
  it('プロパティの値はdifficultyである', () => {
    assert.equal(quiz.difficulty, 'difficulty', true);
  });

  it('questionはプリミティブ型である', () => {
    assert.equal(typeof quiz.question, 'string');
  });
  it('プロパティの値はquestionである', () => {
    assert.equal(quiz.question, 'question', true);
  });

  it('correctAnswerはプリミティブ型である', () => {
    assert.equal(typeof quiz.correctAnswer, 'string');
  });
  it('プロパティの値はcorrectAnswerである', () => {
    assert.equal(quiz.correctAnswer, 'correctAnswer', true);
  });

  it('incorrectAnswersはオブジェクト型である', () => {
    assert.equal(Array.isArray(quiz.incorrectAnswers), true);
  });
  it('プロパティの値はincorrectAnswersである', () => {
    assert.deepStrictEqual(quiz.incorrectAnswers, [0, 1, 2], true);
  });
});