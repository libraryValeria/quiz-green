var theQuestionIndex = 0;
function begin() {
   
    getQuestion();
  }
 
function getQuestion(){
    // get question from object array in questions.js
    var theQuestion = questions[theQuestionIndex];

    //update question (HTML) with theQuestion (JS)
    var questionEl = document.getElementById('question');
    questionEl.textContent = theQuestion;

}