rockPaperScissors('rock', 'scissors'); // 1
rockPaperScissors('rock', 'paper'); // 2
rockPaperScissors('paper','paper'); // 0


function rockPaperScissors(playerOne, playerTwo) {
    if (playerOne === playerTwo) {
        console.log("0")
    } else if (playerOne === "rock") {
        if (playerTwo === "paper") {
            console.log("2")
        } else if (playerTwo === "scissors") {
            console.log("1")
        }
    } else if (playerOne === "scissors") {
        if (playerTwo === "paper") {
            console.log("1")
        } else if (playerTwo === "rock") {
            console.log("2")
        }
    } else if (playerOne === "paper") {
        if (playerTwo === "rock") {
            console.log("1")
        } else if (playerTwo === "scissors") {
            console.log("2")
        }
    }
}