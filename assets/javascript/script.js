// Create elements to build the HTML xxx
// Build Question Array xxx 
// Create Questions xxx
// delete old elements
// write new question to page
// accept answer or 
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
var aButtonEl = document.querySelector('#a-button');
var bButtonEl = document.querySelector('#b-button');
var cButtonEl = document.querySelector('#c-button');
var dButtonEl = document.querySelector('#d-button')

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
        startQuiz();
    }
};

var aDetection = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".a-button")) {
        nextQuiz();
    }
};

var bDetection = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".b-button")) {
        nextQuiz();
    }
};

var cDetection = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".c-button")) {
        nextQuiz();
    }
};

var dDetection = function(event) {
    var targetEl = event.target;

    if (targetEl.matches(".d-button")) {
        nextQuiz();
    }
};

var questOne = function() {
    var h2ItemEl = document.createElement("h2");
    h2ItemEl.className = "questions"
    h2ItemEl.textContent = questions[i].q

    var aButton = document.createElement("button");
    aButton.textContent = questions[i].a
    //aButton.setAttribute()
    aButton.className = "a-button"

    var bButton = document.createElement("button");
    bButton.textContent = questions[i].b
    bButton.className = "b-button"

    var cButton = document.createElement("button");
    cButton.textContent = questions[i].c
    cButton.className = "c-button"

    var dButton = document.createElement("button");
    dButton.textContent = questions[i].d
    dButton.className = "d-button"

    questionBoxEl.appendChild(h2ItemEl);
    questionBoxEl.appendChild(aButton);
    questionBoxEl.appendChild(bButton);
    questionBoxEl.appendChild(cButton);
    questionBoxEl.appendChild(dButton);

};

// // main for loop to begin the quiz
var startQuiz = function() {
    var questions = (i = 0)
    var answer = questOne(questions[i]);

    
};

var nextQuiz = function() {
    questions++
    var taskSelected = document.querySelector("h2");
    taskSelected.remove();
    taskSelected = document.querySelector(".a-button");
    taskSelected.remove();
    taskSelected = document.querySelector(".b-button");
    taskSelected.remove();
    taskSelected = document.querySelector(".c-button");
    taskSelected.remove();
    taskSelected = document.querySelector(".d-button");
    taskSelected.remove();
    var answer = questHandler(questions[i]);
}

// eventListeners
pageContentEl.addEventListener('click', buttonDetection);
aButtonEl.addEventListener('click', aDetection);
bButtonEl.addEventListener('click', bDetection);
cButtonEl.addEventListener('click', cDetection);
dButtonEl.addEventListener('click', dDetection);


// functions
startPhase();


// populate q1

// var codeQuestions = [
//     {question: "Commonly used data types do NOT inclue:",
//     answers: {
//             1: "strings",
//             2: "booleans",
//             3: "alerts",
//             4: "numbers",
//      },
//          rightAnswer: "3"
//     },