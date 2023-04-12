function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)] 
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper Or Scissors?")
    return choice.toLowerCase()
}

function playRound( playerSelection , computerSelection ) {
    if (playerSelection == computerSelection) {
        console.log("Tie!")
    } 
    else {
        switch (computerSelection) {
            case "rock":
                switch (playerSelection) {
                    case "paper":
                        console.log("You win! Paper beats rock!")
                        break;
                    
                    case "scissors":
                        console.log("You lose! Rock beats scissors!")
                
                    default:
                        break;
                }
                break;

                case "paper":
                    switch (playerSelection) {
                        case "scissors":
                            console.log("You win! Scissors beats paper!")
                            break;
                        
                        case "rock":
                            console.log("You lose! Paper beats rock!")
                    
                        default:
                            break;
                    }
                    break;

                    case "scissors":
                        switch (playerSelection) {
                            case "rock":
                                console.log("You win! Rock beats scissors!")
                                break;
                            
                            case "paper":
                                console.log("You lose! Scissors beats paper!")
                        
                            default:
                                break;
                        }
                        break;
        
            default:
                break;
        }
    }
    
  }

for (let index = 0; index < 5; index++) {
    playRound(getPlayerChoice(), getComputerChoice());
    
}