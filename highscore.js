var highScoreslist = document.querySelector('#highScoresList')
var highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoreslist.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')
