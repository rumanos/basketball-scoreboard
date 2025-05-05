let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let leaderboard = document.getElementById("leaderboard")

let homeScore = 0
let guestScore = 0
let stats

function add(team, score) {
    if (team === "home") {
        homeScore += score
        homeEl.textContent = homeScore  
    }
    if (team === "guest") {
        guestScore += score
        guestEl.textContent = guestScore  
    }
}

function resetGame() {
    saveGameResult(homeScore, guestScore)
    
    homeScore = 0
    guestScore = 0
    
    homeEl.textContent = homeScore  
    guestEl.textContent = guestScore
    
    leaderboard.innerHTML += `<li> <span># </span>${stats}</li>`
}

function saveGameResult(team1, team2) {
    if (team1 > team2) stats = `Home: ${team1} Guest: ${team2}....... Home team Won!`
    if (team1 < team2) stats = `Home: ${team1} Guest: ${team2}....... Guest team Won!`
    if (team1 === team2) stats = `Home: ${team1} Guest: ${team2}....... It's a Tie!`
}