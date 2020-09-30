var startButton = document.getElementById('start-btn')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerBtnEl = document.getElementById('answer-btn')
var scoreText = document.querySelector('#score')


let shuffledQue, currentQueIndex
let score = 0
var SCORE_POINTS = 10


startButton.addEventListener('click', startQuiz)
answerBtnEl.addEventListener('click', () => {
    currentQueIndex++
    setNextQue()
})

function startQuiz() {
    totaltime = 60
    
    startButton.classList.add('hide')
    shuffledQue = questions.sort(() => Math.random() - .5)
    currentQueIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQue()

}
function setNextQue() {
    reset()
    showQue(shuffledQue[currentQueIndex])
}

function showQue(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerBtnEl.appendChild(button)
    })

}

function reset() {
    while (answerBtnEl.firstChild){
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
}

function chooseAnswer(e) {
    var chooseBtn = e.target
    var correct = chooseBtn.dataset.correct
    
    if (correct === 'true'){
        incrementScore(SCORE_POINTS);
        console.log(score);
    }
    else {
        totaltime -= 5;
    }

    if (shuffledQue.length <= currentQueIndex + 1){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('finalscore.html')
    }
    
}

incrementScore = num => {
    score +=num
}

var questions = [
    {
        question: 'what is 1 + 1?',
        answers: [
            {text : '1', correct : false},
            {text : '2', correct : true},
            {text : '3', correct : false},
            {text : '4', correct : false}
        ]
    },
    {
        question: 'what is 1 + 0?',
        answers: [
            {text : '1', correct : true},
            {text : '2', correct : false},
            {text : '3', correct : false},
            {text : '4', correct : false}
        ]},
    {    
        question: 'what is 1 + 2?',
        answers: [
            {text : '1', correct : false},
            {text : '2', correct : false},
            {text : '3', correct : true},
            {text : '4', correct : false}
        ]},
    {    
        question: 'what is 1 + 3?',
        answers: [
            {text : '1', correct : false},
            {text : '2', correct : false},
            {text : '3', correct : false},
            {text : '4', correct : true}
        ]}
    
]




function timer(){
    totaltime = totaltime - 1;
    if (totaltime < 60) {
        timer01.innerHTML = totaltime;
    }
    
    if (totaltime<1) {
        window.clearInterval(update);
        alert ("Time's up!");
        return window.location.assign('finalscore.html')
    }
}

update = setInterval("timer()", 1000)