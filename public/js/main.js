const questionElement = document.getElementById("mondai");
const answersElement = document.getElementById('answers');
const resultAnswer = document.getElementById("result");
const resetButton = document.getElementById("reset");
resetButton.style.display = "none";
const questionNumber = document.getElementById("question_number");

let currentQuestionIndex = 0;
let numCorrect = 0;
let results = [];
function setQuestion() {
  if (results.length <= currentQuestionIndex) {
    alert('check the answers');
    resultQuestion();
    return;
  }
  const questionData = results[currentQuestionIndex];
  const answers = [];
  answers.push(questionData.correctAnswer);
  questionData.incorrectAnswers.forEach(incorrectAnswer => {
    answers.push(incorrectAnswer);
  });
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
  const copiedAnswers = answers.slice();
  let length, i, j, tmp;

  for (length = copiedAnswers.length, i = length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = copiedAnswers[i];
    copiedAnswers[i] = copiedAnswers[j];
    copiedAnswers[j] = tmp;
  }
  return copiedAnswers;
}

function selectAnswer(event) {
  const answer = event.target.innerText;
  const questionData = results[currentQuestionIndex];
  if (answer === questionData.correctAnswer) {
    numCorrect++;
    alert('correct!');
  } else {
    alert('inccorect!');
  }
  currentQuestionIndex++;
  setQuestion();
}

function resetQuestion() {
  fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(quizInstnacesListMap => {
      currentQuestionIndex = 0;
      numCorrect = 0;
      resultAnswer.innerHTML = "";
      results = quizInstnacesListMap;
      resetButton.style.display = "none";
      setQuestion();
    });
}

function resultQuestion() {
  resultAnswer.innerHTML = `you had ${numCorrect} correct answers of ${results.length} questions`;
  resetButton.style.display = "block";
}

resetButton.addEventListener('click', resetQuestion);
window.addEventListener('load', () => {
  resetQuestion();
});