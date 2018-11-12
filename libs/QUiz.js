//クイズ1件1件のデータを管理するクラスをつくる。(ここではQuizクラスとする)
//コンストラクタで受け取る値は`results` 1件1件のオブジェクト内容
class Quiz{
  constructor(category, type, difficulty, question, correctAnswer, incorrectAnswers){
  this.category = category;
  this.type = type;
  this.difficulty = difficulty;
  this.question = question;
  this.correctAnsewr = correctAnswer;
  this.incorrectAnswers = incorrectAnswers;
  }
}

module.exports = Quiz;
