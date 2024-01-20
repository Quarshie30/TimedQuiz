// Variables
var currentQuestion = 0; // index for questions
var timeLeft = 50; // Adjust the time limit as needed
var score = 0; // score counter
var timerInterval; // time interval

// DOM Elements
var startScreen = document.getElementById("start-screen");
var questionsDiv = document.getElementById("questions");
var endScreen = document.getElementById("end-screen");
var timeSpan = document.getElementById("time");
var choicesDiv = document.getElementById("choices");
var feedbackDiv = document.getElementById("feedback");
var finalScoreSpan = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var startButton = document.getElementById("start");

// Event listeners 
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitScore);

// Functions 
function startQuiz() {
  startScreen.classList.add("hide");
  questionsDiv.classList.remove("hide");

   // Start the timer
    timerInterval = setInterval(function() { // fucntion used for intervals.. allowing restart of timer
    timeLeft--;
    timeSpan.textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);


  showQuestion();
}

// display current question and choice
function showQuestion() {
  var currentQ = questions[currentQuestion]; // get current question object 
  document.getElementById("question-title").textContent = currentQ.question;

  choicesDiv.innerHTML = ""; // reseet current choices 

  for (var i = 0; i < currentQ.choices.length; i++) { // constant loop through choices 
    var choiceBtn = document.createElement("button"); // dom to create new button 

    choiceBtn.textContent = currentQ.choices[i];

    choiceBtn.setAttribute("data-index", i)// store index choice in menemory 
    choiceBtn.addEventListener("click", checkAnswer); // button listener for click
    choicesDiv.appendChild(choiceBtn);
  }
}