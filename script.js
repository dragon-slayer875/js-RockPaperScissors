let playerWins = 0
let computerWins = 0

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)] 
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper Or Scissors?")
    return choice.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("Tie!")
        return "tie"
    } 
    else {
        switch (computerSelection) {
            case "rock":
                switch (playerSelection) {
                    case "paper":
                        console.log("You win! Paper beats rock!")
                        return "win"
                        break;
                    
                    case "scissors":
                        console.log("You lose! Rock beats scissors!")
                        return "lose"
                        break;
                
                    default:
                        break;
                }
                break;

            case "paper":
                switch (playerSelection) {
                    case "scissors":
                        console.log("You win! Scissors beats paper!")
                        return "win"
                        break;
                    
                    case "rock":
                        console.log("You lose! Paper beats rock!")
                        return "lose"
                        break;
                
                    default:
                        break;
                }
                break;

            case "scissors":
                switch (playerSelection) {
                    case "rock":
                        console.log("You win! Rock beats scissors!")
                        return "win"
                        break;
                    
                    case "paper":
                        console.log("You lose! Scissors beats paper!")
                        return "lose"
                        break;
                
                    default:
                        break;
                }
                break;
        
            default:
                break;
        }
    }
    
}

function game() {
    for (let index = 0; index < 5; index++) {
        console.log(index)
        if (playRound(getPlayerChoice(), getComputerChoice()) == "win") {
            playerWins += 1
            continue;
        }
        else if (playRound(getPlayerChoice(), getComputerChoice()) == "lose") {
            computerWins += 1
            continue;
        }
        else if (playRound(getPlayerChoice(), getComputerChoice()) == "tie") {
            continue;            
        }
    }
    
    if (playerWins > computerWins) {
        console.log("You win the match!")
    }
    else if (computerWins > playerWins) {
        console.log("You lose the match!")
    }
    else {
        console.log("It's a tie!")
    }
}

game()
