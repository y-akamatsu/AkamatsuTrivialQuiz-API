const questionElement = document.getElementById("mondai");
const answersElement = document.getElementById('answers');
const resultAnswer = document.getElementById("result");
const resetButton = document.getElementById("reset");
resetButton.style.display = "none";
const questionNumber = document.getElementById("question_number");

//変数constは再代入不可、基本的にcosntを使用。letは再代入可能
//次の問題を選択するときは＋１する
//1件目のデータを問題に使う
let currentQuestionIndex = 0;
let numCorrect = 0;
//fecthのresultsの値を格納する（問題リストがはいる）
let results = [];
function setQuestion() {
  if (results.length <= currentQuestionIndex) {
    alert('check the answers');
    resultQuestion();
    return;
  }
  const questionData = results[currentQuestionIndex];
  const answers = [];
  answers.push(questionData.correct_answer);
  questionData.incorrect_answers.forEach(incorrect_answer => {
    answers.push(incorrect_answer);
  });
  //innerTextは中身を書き換える
  //innerTextだと「""」や「''」が変な文字に変換されるためinnerHTMLを使うようにした
  questionElement.innerHTML = questionData.question;
  answersElement.innerHTML = ''
  arrShuffle(answers).forEach(answer => {
    const liElement = document.createElement('li');
    answersElement.appendChild(liElement);
    liElement.innerHTML = answer;
    liElement.addEventListener('click', selectAnswer);
  });
  const numQuestion = currentQuestionIndex + 1;
  questionNumber.innerHTML = `Question No.${numQuestion}`;

}

function arrShuffle(answers) {
  //配列(answers)はオブジェクトになるため引数で渡す場合参照渡しになる。
  //参照渡しの場合、関数の引数の値arrshuffle(answers)を変更すると関数実行時に引数として渡した値（オブジェクト）も変更になる。
  //それを防ぐために.slice()メソッドを使い引数として渡ってきた配列のコピーを作成しコピーを変更することで、元の値の変更を防ぐ。
  const copiedAnswers = answers.slice();
  //事前にletを使って変数宣言、この変数は関数内のみ使える。（カプセル化、プライべート変数化する）
  let length, i, j, tmp;
  //length => 4(copiedAnswers.length)
  //i => 3(4 - 1)
  // ループ毎にi変数の値は3→2→1と減りループが3回で終了
  for (length = copiedAnswers.length, i = length - 1; i > 0; i--) {
    //Math.floor() => 引数の数値の小数点以下を切り捨てる。例：Math.floor(3.5) => 3
    //Math.random() => 0以上～1未満のランダムな値を返す。
    //Math.random() * ( i + 1)は最大でも4未満となる。
    j = Math.floor(Math.random() * (i + 1));
    //以下バブルソートアルゴリズムにて配列内の値を入れ替える
    //配列要素i番目の値をtmp変数に一時的に格納
    tmp = copiedAnswers[i];
    //copiedAnswers配列の中のj番目の値をcopiedAnswers配列のi番目に代入する
    copiedAnswers[i] = copiedAnswers[j];
    //answers配列のj番目に一時的に格納していたanswerws[i]の値を格納する
    copiedAnswers[j] = tmp;
  }
  return copiedAnswers;
}

function selectAnswer(event) {
  const answer = event.target.innerText;
  const questionData = results[currentQuestionIndex];
  if (answer === questionData.correct_answer) {
    numCorrect++;
    alert('correct!');
  } else {
    alert('incorrect!');
  }
  //次の問題へ
  currentQuestionIndex++;
  setQuestion();
}
//resetQuestion関数定義
//fetchにてデータを取得し問題をセット、クイズのインデックス番号を０にする
function resetQuestion() {
  fetch('https://opentdb.com/api.php?amount=10&category=15')
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log('data:', json);
      currentQuestionIndex = 0;
      numCorrect = 0;
      resultAnswer.innerHTML = "";
      results = json.results;
      resetButton.style.display = "none";
      setQuestion();
    });
}

function resultQuestion() {
  resultAnswer.innerHTML = `you had ${numCorrect} correct answers out of ${results.length} questions`;
  resetButton.style.display = "block";
}
//変数.addEventListener('イベント名', 関数);
//addEventListenerのクリックアクションでresetQuestionを呼び出す。
resetButton.addEventListener('click', resetQuestion);
window.addEventListener('load', () => {
  resetQuestion();
});


