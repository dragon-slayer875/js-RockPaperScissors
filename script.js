let playerWins = 0
let computerWins = 0

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)] 
}

// function getPlayerChoice() {
//     let choice = prompt("Rock, Paper Or Scissors?")
//     return choice.toLowerCase()
// }

function checkWinner() {
    if (playerWins == 5) {
        document.querySelector('.matchResult').textContent = `Player Wins the match!`
        return
    }
    else if (computerWins == 5) {
        document.querySelector('.matchResult').textContent = `Computer Wins the match!`
        return
    }
}

function playRound(playerSelection, computerSelection) {
    document.querySelector('#compChoice').textContent = computerSelection;

    if (playerSelection == computerSelection) {
        document.querySelector('.roundResultText').textContent = "Tie!"
    } 
    else {
        switch (computerSelection) {
            case "rock":
                switch (playerSelection) {
                    case "paper":
                        document.querySelector('.roundResultText').textContent = "You win! Paper beats rock!"
                        playerWins += 1
                        document.querySelector('#playerScore').textContent = `${playerWins}`;
                        break;
                    
                    case "scissors":
                        document.querySelector('.roundResultText').textContent = "You lose! Rock beats scissors!"
                        computerWins += 1
                        document.querySelector('#compScore').textContent = `${computerWins}`;
                        break;
                
                    default:
                        break;
                }
                break;

            case "paper":
                switch (playerSelection) {
                    case "scissors":
                        document.querySelector('.roundResultText').textContent = "You win! Scissors beats paper!"
                        playerWins += 1
                        document.querySelector('#playerScore').textContent = `${playerWins}`;
                        break;
                    
                    case "rock":
                        document.querySelector('.roundResultText').textContent = "You lose! Paper beats rock!"
                        computerWins += 1
                        document.querySelector('#compScore').textContent = `${computerWins}`;
                        break;
                
                    default:
                        break;
                }
                break;

            case "scissors":
                switch (playerSelection) {
                    case "rock":
                        document.querySelector('.roundResultText').textContent = "You win! Rock beats scissors!"
                        playerWins += 1
                        document.querySelector('#playerScore').textContent = `${playerWins}`;
                        break;
                    
                    case "paper":
                        document.querySelector('.roundResultText').textContent = "You lose! Scissors beats paper!"
                        computerWins += 1
                        document.querySelector('#compScore').textContent = `${computerWins}`;
                        break;
                
                    default:
                        break;
                }
                break;
        
            default:
                break;
        }
    }
    
    checkWinner()  
}

// function game() {
//     for (let index = 0; index < 5; index++) {        
//         switch (playRound(getPlayerChoice(), getComputerChoice())) {
//             case "win":
//                 playerWins += 1
//                 break;
            
//             case "lose":
//                 computerWins += 1
//                 break;
    
//             case "tie":
//                 break;
        
//             default:
//                 break;
//         }
//     }
    
//     if (playerWins > computerWins) {
//         console.log("You win the match!")
//     }
//     else if (computerWins > playerWins) {
//         console.log("You lose the match!")
//     }
//     else {
//         console.log("It's a tie!")
//     }
// }

const buttons = document.querySelectorAll('button');
buttons.forEach(element => { 
    element.addEventListener('click', () => {
        playRound(element.id, getComputerChoice())
    });
});

document.querySelector('#playerScore').textContent = `${playerWins}`
document.querySelector('#compScore').textContent = `${computerWins}`

// game()
