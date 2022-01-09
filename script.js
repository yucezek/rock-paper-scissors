/**
 * select and return one of "rock" "paper" or "scissors" randomly
 */
function computerPlay() {
    let randomNumber = getRandomInt(0, 3);
    
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
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
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
