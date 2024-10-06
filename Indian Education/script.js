const quizBox = document.querySelector('.quiz-box');
const startBtn = document.querySelector('#start-btn');
const quizContent = document.querySelector('#quiz-content');
const questionContainer = document.querySelector('#question-container');
const submitBtn = document.querySelector('#submit-btn');
const resultDiv = document.querySelector('#result');
let count = 0;

let currentQuestion = 0;
let questions = [
  {
    question: "What age group does pre-primary education typically cater to?",
    options: ["0-3 years", "3-6 years", "6-14 years"],
    answer: "3-6 years"
  },
  {
    question: "How many years does primary education generally last in India?",
    options: ["5 years", "8 years", "10 years"],
    answer: "8 years"
  },
  {
    question: "Which of the following is NOT a stream offered in higher secondary education?",
    options: ["Science", "Commerce", "Technology"],
    answer: "Technology"
  },
  {
    question: "What is the purpose of the National Education Policy (NEP)?",
    options: ["To standardize fees across all schools", "To promote holistic and multidisciplinary learning", "To eliminate all forms of private education"],
    answer: "To promote holistic and multidisciplinary learning"
  },
  {
    question: "Which of the following boards is NOT associated with Indian education?",
    options: ["CBSE", "ICSE", "GCSE"],
    answer: "GCSE"
  }
  // add more questions here
];

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  quizContent.style.display = 'block';
  startBtn.style.display = 'none';
  displayQuestion();
}

function displayQuestion() {
  const question = questions[currentQuestion];
  const questionHTML = `
    <p>${question.question}</p>
    <input type="radio" id="option1" name="answer" value="${question.options[0]}">
    <label for="option1">${question.options[0]}</label>
    <input type="radio" id="option2" name="answer" value="${question.options[1]}">
    <label for="option2">${question.options[1]}</label>
    <input type="radio" id="option3" name="answer" value="${question.options[2]}">
    <label for="option3">${question.options[2]}</label>
  `;
  questionContainer.innerHTML = questionHTML;
}

submitBtn.addEventListener('click', checkAnswer);

function checkAnswer() {
  const answer = document.querySelector('input[name="answer"]:checked').value;
  if (answer === questions[currentQuestion].answer) {
    resultDiv.innerHTML = 'Correct!';
    count+=1;
  } else {
    resultDiv.innerHTML = 'Incorrect.';
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    // quiz is complete, display final result
    resultDiv.innerHTML = `Quiz completed! You scored ${count} out of ${questions.length}.`;
  }
}