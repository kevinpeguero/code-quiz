const highScoresElements = document.getElementById("highScores")
const clearHighScoresElements =  document.getElementById("clearScores")
const backElement = document.getElementById("back")

clearHighScoresElements.addEventListener("click",clearHighScores)
backElement.addEventListener("click",function(){
    location.href = "index.html"
})

function highScores(){
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.sort(function(a,b){
        return b.score - a.score;

    })
    highScores.forEach(element => {
        var li = document.createElement("li");
        li.textContent = element.initials + " - " + element.score;
        highScoresElements.appendChild(li);

    });
}
function clearHighScores(){
    localStorage.removeItem("highScores");
    location.reload()
}
highScores()