// Create elements to build the HTML xxx
// Build Question Array 
// Create Questions
// Build a timer
// localStorage to save highscores

// variables
var questionsAnswers = [
    {q1: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q2: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q3: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q4: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q5: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q6: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q7: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q8: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q9: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"},
    {q10: "Quest1", a1: "Ans1", a2: "Ans2", a3: "Ans3", a4: "Ans4"}
]
var questionBoxEl = document.querySelector('#js-flexbox');
var answersBoxEl = document.querySelector('#js-flexbox');
var timerBoxEl = document.querySelector('#js-flexbox');
var pageContentEl = document.querySelector('#page-content')

var startPhase = function() {
    // create element
    var h2ItemEl = document.createElement("h2");
    h2ItemEl.className = "questions"
    h2ItemEl.textContent = "Welcome to the best quiz ever!"

    var startTextEl = document.createElement("p");
    startTextEl.className = "instructions"
    startTextEl.textContent = "After clicking the start button, we will begin a timer of 120 seconds. Answer the questions as quickly as possible! If you answer incorrectly you will be docked time. Your score will be determined by the time remaining. Good luck!"
    
    var startButton = document.createElement("button");
    startButton.textContent = "Begin!"
    startButton.className = "start-button"

    // display element
    questionBoxEl.appendChild(h2ItemEl);
    questionBoxEl.appendChild(startTextEl);
    questionBoxEl.appendChild(startButton);
};

// detect button click 
var buttonDetection = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".start-button")) {
        startQuiz();
    }
};

// main for loop to begin the quiz
var startQuiz = function() {
    for (i = 0; i < questionsAnswers.length; i++) {
        console.log(questionsAnswers)
    }
}

// eventListeners
pageContentEl.addEventListener('click', buttonDetection);

// functions
startPhase();