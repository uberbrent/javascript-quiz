// Create elements to build the HTML xxx
// Build Question Array xxx 
// Create Questions xxx
// delete old elements xxx
// write new question to page xxx
// accept answer or return penalty xxx
// Build a timer
// localStorage to save highscores

// variables
var questions = [
    {q: "How Old Am I?", a: "39", b: "25", c: "34", d: "28"},
    {q: "Favorite Food", a: "Hamburger", b: "Pizza", c: "Steak", d: "Pasta"},
    {q: "First Video Game", a: "Super Mario Bros", b: "Halo", c: "Golf", d: "Sonic"},
    {q: "Favorite Final Fantasy", a: "6", b: "7", c: "10", d: "1"},
    {q: "Favorite Zelda", a: "Link To The Past", b: "Ocarina of Time", c: "Majora's Mask", d: "Legend of Zelda"},
    {q: "Favorite Game Console", a: "PlayStation", b: "Super Nintendo", c: "N64", d: "DreamCast"},
    {q: "Number of Earth's Moons", a: "2", b: "6", c: "0", d: "1"},
    {q: "Shape of the Earth", a: "Flat", b: "Sphere", c: "Octahedron", d: "Ring"},
    {q: "Best Number", a: "1", b: "69", c: "3", d: "1077"},
    {q: "Favorite Daughter", a: "Elly", b: "Sophia", c: "Gretchen", d: "Sarah"}
]
var questionBoxEl = document.querySelector('#js-flexbox');
var answersBoxEl = document.querySelector('#js-flexbox');
var timerBoxEl = document.querySelector('#js-flexbox');
var pageContentEl = document.querySelector('#page-content');
var questionIndex = 0
var answerVal = 0
var timeLeft = 90

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
        var taskSelected = document.querySelector("h2");
        taskSelected.remove();
        taskSelected = document.querySelector("p");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        countdown();
        questHandler();
    } else if (targetEl.matches(".a-button")) {
        var taskSelected = document.querySelector("h2");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        answerVal = 1
        ansHandler();
    } else if (targetEl.matches(".b-button")) {
        var taskSelected = document.querySelector("h2");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        answerVal = 2
        ansHandler();
    } else if (targetEl.matches(".c-button")) {
        var taskSelected = document.querySelector("h2");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        answerVal = 3
        ansHandler();
    } else if (targetEl.matches(".d-button")) {
        var taskSelected = document.querySelector("h2");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        taskSelected = document.querySelector("button");
        taskSelected.remove();
        answerVal = 4
        ansHandler();  
    }
};


var questHandler = function() {
    var h2ItemEl = document.createElement("h2");
    h2ItemEl.className = "questions"
    h2ItemEl.textContent = questions[questionIndex].q

    var aButton = document.createElement("button");
    aButton.textContent = questions[questionIndex].a
    aButton.className = "a-button"

    var bButton = document.createElement("button");
    bButton.textContent = questions[questionIndex].b
    bButton.className = "b-button"

    var cButton = document.createElement("button");
    cButton.textContent = questions[questionIndex].c
    cButton.className = "c-button"

    var dButton = document.createElement("button");
    dButton.textContent = questions[questionIndex].d
    dButton.className = "d-button"

    questionBoxEl.appendChild(h2ItemEl);
    questionBoxEl.appendChild(aButton);
    questionBoxEl.appendChild(bButton);
    questionBoxEl.appendChild(cButton);
    questionBoxEl.appendChild(dButton);
};

var ansHandler = function() {
    if (answerVal === 1 && questionIndex === 3 ||
        answerVal === 1 && questionIndex === 4 ||
        answerVal === 1 && questionIndex === 9) {
        alert("correct");
    } else if (answerVal === 2 && questionIndex === 5 ||
        answerVal === 2 && questionIndex === 7) {
        alert("correct");
    } else if (answerVal === 3 && questionIndex === 0 ||
        answerVal === 3 && questionIndex === 2 ||
        answerVal === 3 && questionIndex === 8) {
        alert("correct");
    } else if (answerVal === 4 && questionIndex === 1 ||
        answerVal === 4 && questionIndex === 6) {
        alert("correct");
    } else {
        alert("incorrect!")
        timeLeft = timeLeft - 10
    }
    nextQuiz();
}

var nextQuiz = function() {
    questionIndex++
    if (questionIndex < 10) {
    questHandler(questions[questionIndex])
    } else {
        endScreen();
    }
};

function countdown() {
    var timerBoxEl = document.createElement("p");
    timerBoxEl.className = "timer"
    timerBoxEl.textContent = "90 seconds remaining!"
    questionBoxEl.appendChild(timerBoxEl);

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerBoxEl.textContent = timeLeft + " seconds remaining!"
            timeLeft--;
        } else if (timeLeft === 1) {
            timerBoxEl.textContent = timeLeft + " second remaining!"
            timeLeft--;
        } else {
            timerBoxEl.textContent = "Time Expired!"
            clearInterval(timeInterval);
        }
    }, 1000)
};

var endScreen = function() {

}

// eventListeners
pageContentEl.addEventListener('click', buttonDetection);

// functions
startPhase();
