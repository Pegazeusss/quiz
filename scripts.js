const quizData = [
  {
    question: "How old is Bogo?",
    a: "10",
    b: "17",
    c: "21",
    d: "26",
    correct: "c",
  },
  {
    question: "How much longer is Bogo dogo gonna live?",
    a: "SGIN THE CONTRACT",
    b: "Year",
    c: "2 year",
    d: "Alreay cloned",
    correct: "a",
  },
  {
    question: "Who won king of the court yesterday?",
    a: "Me",
    b: "Sale",
    c: "Mirza",
    d: "BOGO",
    correct: "a",
  },
  {
    question: "Who did best? ",
    a: "BOGO",
    b: "BOGO",
    c: "BOGO MAMA",
    d: "BOGO",
    correct: "c",
  },
  {
    question: "How much did i get on MIT test? ",
    a: "A",
    b: "B",
    c: "C",
    d: "FAILED",
    correct: "b",
  },
];
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
// let answer = undefined;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  deselectAnswers();
}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deselectAnswers() {
  //  const answerEls = document.querySelectorAll(".answer");

  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2><button onClick = "location.reload()">Reload</button>`;
    }
  }
});
