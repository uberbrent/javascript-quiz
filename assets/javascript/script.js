// Create elements to build the HTML xxx
// Build Question Array xxx 
// Create Questions xxx
// delete old elements xxx
// write new question to page xxx
// accept answer or return penalty xxx
// Build a timer xxx
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
var highScores = []
var questionBoxEl = document.querySelector('#js-flexbox');
var answersBoxEl = document.querySelector('#js-flexbox');
var timerBoxEl = document.querySelector('#js-flexbox');
var pageContentEl = document.querySelector('#page-content');
var questionIndex = 0
var answerVal = 0
var timeLeft = 5

var startPhase = function() {
    // create element
    var h2ItemEl = document.createElement("h2");
    h2ItemEl.className = "questions"
    h2ItemEl.textContent = "Welcome to the best quiz ever!"

    var startTextEl = document.createElement("p");
    startTextEl.className = "instructions"
    startTextEl.textContent = "After clicking the start button, we will begin a timer of 90 seconds. Answer the questions as quickly as possible! If you answer incorrectly you will be docked time. Your score will be determined by the time remaining. Good luck!"
    
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
    }  else if (targetEl.matches(".a-button")) {
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
    } else if (targetEl.matches(".save-score")) {
        hiScoreHandler();
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
    timerBoxEl.textContent = "5 seconds remaining!"
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
            failClear();
        }
    }, 1000)
};

var failClear = function() {
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
    endScreen();
};

var hiScoreHandler = function() {
    //preventDefault();

    var textInput = document.querySelector("input[name='initials']").value
    var scoreInput = timeLeft

    console.log(textInput)
    
     if (!textInput) {
         alert("Please enter your initials!")
         return false
     } else {
         var hiScoreObj = {
             name: textInput,
             score: scoreInput
         }
     }
     textFieldEl.reset();
     highScores.push(hiScoreObj)
     rankList();
}

var endScreen = function() {
    var h2ItemEl = document.createElement("h2");
    h2ItemEl.className = "congrats"
    h2ItemEl.textContent = "Congratulations!"

    var h3ItemEl = document.createElement("h3");
    h3ItemEl.className = "end-score"
    h3ItemEl.textContent = "Your score is " + timeLeft + "!"

    var textFieldEl = document.createElement("div");
    textFieldEl.innerHTML = "<input type='text' name='initials' class='initials-input' placeholder='Enter Initials Here!' />"
    var saveButton = document.createElement("button");
    saveButton.className = "save-score"
    saveButton.textContent = "Ok"

    questionBoxEl.appendChild(h2ItemEl);
    questionBoxEl.appendChild(h3ItemEl);
    questionBoxEl.appendChild(textFieldEl);
    questionBoxEl.appendChild(saveButton);
};

var rankList = function() {

}

// eventListeners
pageContentEl.addEventListener('click', buttonDetection);

// functions
startPhase();
