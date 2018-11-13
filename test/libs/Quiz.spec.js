const assert = require('power-assert');
const Quiz = require('../../libs/Quiz');

const quiz = new Quiz('category', 'type', 'difficulty', 'question', 'correctAnswer', [0, 1, 2]);
describe('Quizクラスのテスト', () => {
  it('categoryはstring型で値はcategoryである', () => {
    assert.equal(typeof quiz.category, 'string');
    assert.equal(quiz.category, 'category', 'プロパティの値が違います。');
  });

  it('typeはstring型で値はtypeである', () => {
    assert.equal(typeof quiz.type, 'string');
    assert.equal(quiz.type, 'type', 'プロパティの値が違います。');
  });

  it('difficultyはstring型であり値はdifficultyである', () => {
    assert.equal(typeof quiz.difficulty, 'string');
    assert.equal(quiz.difficulty, 'difficulty', 'プロパティの値が違います。');

  });

  it('questionはstring型であり値はquestionである', () => {
    assert.equal(typeof quiz.question, 'string');
    assert.equal(quiz.question, 'question', 'プロパティの値が違います。');
  });

  it('correctAnswerはstring型であり値はcorrectAnswerである', () => {
    assert.equal(typeof quiz.correctAnswer, 'string');
    assert.equal(quiz.correctAnswer, 'correctAnswer', 'プロパティの値が違います。');
  });

  it('incorrectAnswersはオブジェクト型であり値は配列である', () => {
    assert.equal(Array.isArray(quiz.incorrectAnswers), true);
    assert.deepStrictEqual(quiz.incorrectAnswers, [0, 1, 2]);
  });
});