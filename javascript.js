const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.getElementById("timer")
const resultElement = document.getElementById("result")
const scoreElement = document.getElementById("score")
const initialsElement = document.getElementById("initials")
const saveElement = document.getElementById("save")





let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
saveElement.addEventListener("click",saveScore)

function startGame(){
    console.log("stared")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setTime();
    setNextQuestion()
}

function setNextQuestion(){
 showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(question){
     questionElement.innerText = question.title
     answerButtonsElement.innerHTML = ""
     question.choices.forEach(choice => {
         const button = document.createElement("button")
         button.innerText = choice
         button.classList.add("btn")
         button.addEventListener("click", selectAnswer)
         answerButtonsElement.appendChild(button)
     })
 }
       




function selectAnswer(e){
    const selectedButton = e.target
    const userAnswer = selectedButton.innerText
    if(userAnswer === shuffledQuestions[currentQuestionIndex].answer){
        alert("correct")
    }else{
        secondsLeft -=15
        alert("incorrect")
    }
    currentQuestionIndex ++ 
    if(currentQuestionIndex < shuffledQuestions.length){
        showQuestion(shuffledQuestions[currentQuestionIndex])
    }else{
gameEnd();
    }
}

var secondsLeft = 60;
var timerInterval ;
function setTime() {
   timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent = secondsLeft ;

    if(secondsLeft === 0) {
      gameEnd();

      
    }

  }, 1000);
}

function gameEnd(){ 
    clearInterval(timerInterval);
    questionContainerElement.classList.add("hide");
    
    resultElement.classList.remove("hide") 
    scoreElement.textContent = secondsLeft
}

function saveScore(){
    var initials = initialsElement.value;
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var newScore = {
        score : secondsLeft,
        initials : initials
    }
    highScores.push(newScore)
    localStorage.setItem("highScores",JSON.stringify(highScores));
    location.href = "highScores.html"
}
