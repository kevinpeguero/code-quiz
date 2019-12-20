const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener("click", startGame)


function startGame(){
    console.log("stared")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
 showQuestion(shuffledQuestions[currentQuestionsIndex])
 }

 function showQuestion(question){
     questionElement.innerText = question.question
     question.answer.forEach(answer => {
         const button = document.createElement("button")
         button.innerText = answer.text
         button.classList.add("btn")
         if (answer.correct) {
             button.dataset.correct = answer.correct
         }
         button.addEventListener("click", selectAnswer)
         answerButtonsElement.appendChild(button)
     })
 }

 function resetState() {
     nextButton.classList.add("hide")
     while (answerButtonsElement){
         answerButtonsElement.removeChild
         (answerButtonsElement.firstChild)
     }
 }


function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
}

console.log(questions)

const questions = [{
    question: "who won the 2019 MLB World Series?",
    answer: [
        {text: "washington nationals", correct:true}
        ]
    
    

}]