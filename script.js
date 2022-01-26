/**
 * select and return one of "rock" "paper" or "scissors" randomly
 */
function computerPlay() {
    let randomNumber = getRandomInt(0, 3);
    
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/**
 * play one round of rock paper scissors, declare the result
 * params: choice of computer and player for this round
 * return: winner of the round= player/computer/draw
 */
function playRound(playerSelection, computerSelection) {
    // convert to lowercase
    let playerSelect = playerSelection.toLowerCase();

    if (playerSelect == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
        return "player";
    }
    else if (playerSelect == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        return "computer";
    }
    else if (playerSelect == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beats Paper");
        return "player";
    }
    else if (playerSelect == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissors");
        return "computer";
    }
    else if (playerSelect == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        return "player";
    }
    else if (playerSelect == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beats Paper");
        return "computer";
    }
    else {
        console.log("It's a draw");
        return "draw";
    }
    
}
/**
 * play 5 rounds of rock paper scissors
 * prompt the user for the input
 * declare the winner at the end (or the draw)
 */
function game() {
    // keep track of the number of wins
    let winsOfPlayer = 0;
    let winsOfComputer = 0;

    // 5 rounds in total
    for (let i = 0; i < 5; i++) {
        // get input from the user
        let playerOption = prompt("Rock, paper, or scissors?");
        let computerOption = computerPlay();
        // play one round of the game
        let result = playRound(playerOption, computerOption);

        // increment the relevant wins
        if (result == "player") {
            winsOfPlayer++;
        }
        else if (result == "computer") {
            winsOfComputer++;
        }
    }

    // declare the winner, or the draw
    if (winsOfPlayer > winsOfComputer) {
        console.log("Congratulations! You won the game!");
    }
    else if (winsOfComputer > winsOfPlayer) {
        console.log("Unfortunately, you lost :(");
    }
    else {
        console.log("There is no winner, it's a draw");
    }
}

/**
 * taken from MDN Web Docs
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * return a random integer between min and max
 * min is inclusive, max is exclusive
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

