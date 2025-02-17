// script.js - Football Match Score Simulator

// Function to get team names from the user
function getTeamNames() {
    let team1 = prompt("Enter the name of Team 1:");
    let team2 = prompt("Enter the name of Team 2:");
    
    if (!team1 || !team2) {
        alert("Both teams must have a name!");
        return null; // Return null if team names are invalid
    }
    
    return { team1, team2 };
}

// Function to generate random scores for both teams
function generateScores() {
    let score1 = Math.floor(Math.random() * 5);
    let score2 = Math.floor(Math.random() * 5);
    
    return { score1, score2 };
}

// Function to display the match result
function displayResult(team1, team2, score1, score2) {
    let resultMessage = `${team1} ${score1} - ${score2} ${team2}`;
    alert(resultMessage);
    console.log("Match Result:", resultMessage);
    
    if (score1 > score2) {
        alert(`${team1} wins!`);
    } else if (score1 < score2) {
        alert(`${team2} wins!`);
    } else {
        alert("It's a draw!");
    }
}

// Function to simulate a match
function simulateMatch() {
    const teams = getTeamNames();
    if (!teams) return; // Exit if team names are invalid
    
    const { team1, team2 } = teams;
    const { score1, score2 } = generateScores();
    
    displayResult(team1, team2, score1, score2);
}

// Call the function to start the simulation
simulateMatch();
