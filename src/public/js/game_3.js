let timer = document.getElementsByClassName("timer")[0];
let quizContainer = document.getElementById("container");
let nextButton = document.getElementById("next-button");
let numOfQuestions = document.getElementsByClassName("number-of-questions")[0];
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 10;
let countdown;
//For hex codes
let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//Questions and Options Array
let quizArray = [];

const generateRandomValue = (array) =>
  array[Math.floor(Math.random() * array.length)];

//Generate Hex Codes
const colorGenerator = () => {
  newColor = "#";
  for (let i = 0; i < 6; i++) {
    newColor += generateRandomValue(letters);
  }
  return newColor;
};

//Create Options
const populateOptions = (optionsArray) => {
  let expectedLength = 4;
  while (optionsArray.length < expectedLength) {
    let color = colorGenerator();
    if (!optionsArray.includes(color)) {
      optionsArray.push(color);
    }
  }
  return optionsArray;
};

//Create quiz Objecy
const populateQuiz = () => {
  for (let i = 0; i < 5; i++) {
    let currentColor = colorGenerator();
    let allColors = [];
    allColors.push(currentColor);
    allColors = populateOptions(allColors);
    quizArray.push({
      id: i,
      correct: currentColor,
      options: allColors,
    });
  }
};

//Next button
nextButton.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCOunt
    questionCount += 1;
    //If last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      //User score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //displau questionCount
      numOfQuestions.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";

      //display quiz
      quizDisplay(questionCount);
      //count=11(so it start with 10)
      count = 10;
      //clearInterval for next question
      clearInterval(countdown);
      //display timer
      timerDisplay();
    }
    nextButton.classList.add("hide");
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    timer.innerHTML = `<span>Time Left: </span> ${count}s`;
    count--;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display Quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });

  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);

  //Generate quiz
  for (let i of quizArray) {
    //Randomly sort options
    i.options.sort(() => Math.random() - 0.5);

    //Quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    //Question number
    numOfQuestions.innerHTML = 1 + " of " + quizArray.length + " Question";

    //question
    let questionDiv = document.createElement("p");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<div class="question-color">${i.correct}</div>`;
    div.appendChild(questionDiv);
    //Options
    div.innerHTML += `
    <div class="button-container">
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[0]}" data-option="${i.options[2]}">
      <div class="btn" id="btn_1">
          <div class="play"></div>
      </div>
      <div class="clip" id="clip_1">
          <video src="images/video-1.mp4" controls loop></video>
          <b class="close" id="close_1">&times;</b>
      </div>
    </button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[1]}" data-option="${i.options[1]}">
      <div class="btn" id="btn_2">
          <div class="play"></div>
      </div>
      <div class="clip" id="clip_2">
          <video src="images/video-2.mp4" controls loop></video>
          <b class="close" id="close_2">&times;</b>
      </div>  
    </button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[2]}" data-option="${i.options[2]}">
      <div class="btn" id="btn_3">
          <div class="play"></div>
      </div>
      <div class="clip" id="clip_3">
          <video src="images/video-3.mp4" controls loop></video>
          <b class="close" id="close_3">&times;</b>
      </div>
    </button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[3]}" data-option="${i.options[3]}">
      <div class="btn" id="btn_4">
          <div class="play"></div>
      </div>
      <div class="clip" id="clip_4">
          <video src="images/video-4.mp4" controls loop></video>
          <b class="close" id="close_4">&times;</b>
      </div>
    </button>
    </div>
    `;
    quizContainer.appendChild(div);
  }
  let btn_1 = document.querySelector('#btn_1');
  let btn_2 = document.querySelector('#btn_2');
  let btn_3 = document.querySelector('#btn_3');
  let btn_4 = document.querySelector('#btn_3');
  let clip_1 = document.querySelector('#clip_1');
  let clip_2 = document.querySelector('#clip_2');
  let clip_3 = document.querySelector('#clip_3');
  let clip_4 = document.querySelector('#clip_3');
  let close_1 = document.querySelector('#close_1');
  let close_2 = document.querySelector('#close_2');
  let close_3 = document.querySelector('#close_3');
  let close_4 = document.querySelector('#close_3');
  btn_1.onclick = function (){
      btn_1.classList.add('active');
      clip_1.classList.add('active');
  }
  btn_2.onclick = function (){
      btn_2.classList.add('active');
      clip_2.classList.add('active');
  }
  btn_3.onclick = function (){
      btn_3.classList.add('active');
      clip_3.classList.add('active');
  }
  btn_4.onclick = function (){
    btn_4.classList.add('active');
    clip_4.classList.add('active');
  }
  close_1.onclick = function (){
      btn_1.classList.remove('active');
      clip_1.classList.remove('active');
  }
  close_2.onclick = function (){
      btn_2.classList.remove('active');
      clip_2.classList.remove('active');
  }
  close_3.onclick = function (){
      btn_3.classList.remove('active');
      clip_3.classList.remove('active');
  }
  close_4.onclick = function (){
    btn_4.classList.remove('active');
    clip_4.classList.remove('active');
  }
}

function checker(userOption) {
  let userSolution = userOption.getAttribute("data-option");
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");
  //If users clicked answer === correct
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    options.forEach((element) => {
      if (
        element.getAttribute("data-option") == quizArray[questionCount].correct
      ) {
        element.classList.add("correct");
      }
    });
  }
  //clear interval
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
  nextButton.classList.remove("hide");
}

function initial() {
  nextButton.classList.add("hide");
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  clearInterval(countdown);
  count = 10;
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//Restart game
restart.addEventListener("click", () => {
  quizArray = [];
  populateQuiz();
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//When user clicks on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  quizArray = [];
  populateQuiz();
  initial();
});
