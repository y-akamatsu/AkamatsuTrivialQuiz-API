//クイズ1件1件のデータを管理するクラスをつくる。(ここではQuizクラスとする)
//コンストラクタで受け取る値は`results` 1件1件のオブジェクト内容
class Quiz{
  constructor(category, type, difficulty, question, coorect_answer, incorrect_answers){
  this.category = category;
  this.type = type;
  this.difficulty = difficulty;
  this.question = question;
  this.correct_ansewr = correct_answer;
  this.incorrect_answers = incorrect_answers;
  }
}

module.exports = Quiz;
