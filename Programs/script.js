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
    question: "What is the primary objective of the Beti Bachao Beti Padhao initiative?",
    options: ["To provide free meals to children", "To promote gender equality and educate girls", "To improve infrastructure in schools"],
    answer: "To promote gender equality and educate girls"
  },
  {
    question: "In which year was the Sarva Shiksha Abhiyan launched?",
    options: ["1995", "2000", "2005"],
    answer: "2000"
  },
  {
    question: "Which program provides financial incentives to families for enrolling girls in secondary education?  ",
    options: ["Mid-Day Meal Scheme", "National Scheme of Incentive to Girls for Secondary Education", "Beti Bachao Beti Padhao"],
    answer: "National Scheme of Incentive to Girls for Secondary Education"
  },
  {
    question: "What is a key feature of the Mid-Day Meal Scheme?",
    options: ["It offers scholarships for college students", "It provides free meals to schoolchildren to encourage attendance", "It builds new schools in rural areas"],
    answer: "It provides free meals to schoolchildren to encourage attendance"
  },
  {
    question: "The Pradhan Mantri Vidya Lakshmi Karyakram aims to:",
    options: ["mprove the quality of primary education", "Promote vocational training for youth", "Provide education loans for higher studies"],
    answer: "Provide education loans for higher studies"
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