rockPaperScissors('rock', 'scissors'); // 1
rockPaperScissors('rock', 'paper'); // 2
rockPaperScissors('paper','paper'); // 0


function rockPaperScissors(playerOne, playerTwo) {
    if (playerOne === playerTwo) {
        return 0
    } else if (playerOne === "rock") {
        if (playerTwo === "paper") {
            return 2
        } else if (playerTwo === "scissors") {
            return 1
        }
    } else if (playerOne === "scissors") {
        if (playerTwo === "paper") {
            return 1
        } else if (playerTwo === "rock") {
            return 2
        }
    } else if (playerOne === "paper") {
        if (playerTwo === "rock") {
            return 1
        } else if (playerTwo === "scissors") {
            return 2
        }
    }
}