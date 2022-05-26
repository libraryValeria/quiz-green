var theQuestionIndex = 0;

// DOM elements
var questionsEl = document.getElementById("questions");
var startBtn = document.getElementById("start-button");

// begin quiz function
function begin() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.style.display = "none";

  getQuestion();
  getOptions();
}
// get question function
function getQuestion() {
  var questionTitle = document.querySelector("h3");
  var questionAsked = questions[0].question;

  // display question function
  questionTitle.innerHTML = questionAsked;

  console.log(questionTitle);
  console.log(questionAsked);
}
// get options function
function getOptions() {
  var optionA = document.getElementById("option-a");
  var optionB = document.getElementById("option-b");
  var optionC = document.getElementById("option-c");

  var optionAy = questions[0].options[0];
  var optionBe = questions[0].options[1];
  var optionCe = questions[0].options[2];
  // display options function
  optionA.innerHTML = optionAy;
  optionB.innerHTML = optionBe;
  optionC.innerHTML = optionCe;

  correctAnswer();
}

function questionTwo() {
  var questionTitle = document.querySelector("h3");
  var questionAsked = questions[1].question;
  questionTitle.innerHTML = questionAsked;

  optionsTwo();
}

function optionsTwo() {
  var optionA = document.getElementById("option-a");
  var optionB = document.getElementById("option-b");
  var optionC = document.getElementById("option-c");

  var optionAy = questions[1].options[0];
  var optionBe = questions[1].options[1];
  var optionCe = questions[1].options[2];
  // display options function
  optionA.innerHTML = optionAy;
  optionB.innerHTML = optionBe;
  optionC.innerHTML = optionCe;
}
// hide last question
// get next question
// display next options

//if the correct answer is selected 'oat' -- then user is shown a fun fact
// user collects a green heart
function correctAnswer() {
  var funFactEl = document.getElementById("fun-fact");
  var answerOne = questions[0].answer;

  console.log(answerOne);
}
// if the incorrect answer is selected -- then user is show fun fact
// user collects a broken heart
