//question
let words = [
    {
        word: "Trái Cam",
        hint: "trái cây"
    },
    {
        word: "Trái Chanh",
        hint: "trái cây"
    },
    {
        word: "Trái Nho",
        hint: "trái cây"
    }
]
//code

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
//selecting all required elements
const result_box = document.querySelector(".result_box");
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const box = document.querySelector(".container");
let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        // alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

function showResult(){
    alert("Đáp án đúng là TRÁI CAM!")
    const userScore = 100;
    box.classList.add("hide");
    info_box.classList.remove("activeInfo"); //hide info box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>và chúc mừng! 🎉, Bạn được <p>'+ userScore +'</p> trên <p> 100 điểm </p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 2){ // if user scored more than 1
        let scoreTag = '<span>và rất tốt 😎, Bạn được <p>'+ userScore +'</p> Trên <p> 100 điểm </p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>và rất tiếc 😐, Bạn chỉ được <p>'+ Math.max(0, userScore) +'</p> trên <p> 100 điểm </p></span>';
        scoreText.innerHTML = scoreTag;
    }
  }

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    // document.querySelector('video').src = randomObj.word;
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    // inputField.setAttribute("maxlength", correctWord.length);
}

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Hãy nhập một câu trả lời của bạn");
    return showResult();
}

refreshBtn.addEventListener("click", initGame());
checkBtn.addEventListener("click", checkWord);
// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    box.classList.add("active"); //show quiz box
    initGame();
}

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.addEventListener(
  "click",
  (startGame = async () => {
        box.classList.remove("hide");
        result_box.classList.remove("activeResult");
        initGame();

    })
)
// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
  window.location.href = "/games"; //reload the current window
}