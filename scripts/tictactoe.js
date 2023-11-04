document.addEventListener("DOMContentLoaded", () => {
    // Define constants
    const EMPTY_BOX = "  -  ";
    const X_TURN = "  x  ";
    const O_TURN = "  o  ";
    // Initialize game variables
    let XOturn = X_TURN;
    let gameBoard = [
        [EMPTY_BOX, EMPTY_BOX, EMPTY_BOX],
        [EMPTY_BOX, EMPTY_BOX, EMPTY_BOX],
        [EMPTY_BOX, EMPTY_BOX, EMPTY_BOX]
    ];
    let currentPlayer = "X";
    // Get DOM elements
    const gameBoardElement = document.getElementById("game-board");
    const messageElement = document.getElementById("message");
    // Create the game board in the HTML
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const cell = document.createElement("div");
            cell.className = "cell";
            cell.addEventListener("click", () => makeMove(row, col));
            gameBoardElement.appendChild(cell);
        }
    }
    // Function to handle a player's move
    function makeMove(row, col) {
        if (gameBoard[row][col] === EMPTY_BOX) {
            gameBoard[row][col] = XOturn;
            updateCell(row, col);
            checkWin();
            checkTie();
            switchPlayer();
            if (currentPlayer === "X") {
                // Player's turn
                messageElement.textContent = `Player ${currentPlayer}'s turn`;
            } else {
                // computer's turn
                setTimeout(computerMove, 1000); // after one sec, computer turn (set timeout to 1 sec)
            }
        }
    }

    // Function to update a cell in the DOM
    function updateCell(row, col) {
        const cellIndex = row * 3 + col;
        gameBoardElement.children[cellIndex].textContent = gameBoard[row][col];
    }
    // Function to check for a win
function checkWin() {
    for (let i = 0; i < 3; i++) {
        if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2]) {
            if (gameBoard[i][0] === X_TURN) {
                showMessage("Player X wins!");
            } else if (gameBoard[i][0] === O_TURN) {
                showMessage("Player O wins!");
            }
            return;
        }

        if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i]) {
            if (gameBoard[0][i] === X_TURN) {
                showMessage("Player X wins!");
            } else if (gameBoard[0][i] === O_TURN) {
                showMessage("Player O wins!");
            }
            return;
        }
    }

    if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) {
        if (gameBoard[0][0] === X_TURN) {
            showMessage("Player X wins!");
        } else if (gameBoard[0][0] === O_TURN) {
            showMessage("Player O wins!");
        }
        return;
    }

    if (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
        if (gameBoard[0][2] === X_TURN) {
            showMessage("Player X wins!");
        } else if (gameBoard[0][2] === O_TURN) {
            showMessage("Player O wins!");
        }
        return;
    }
}

// Function to check for a tie
function checkTie() {
    const isTie = gameBoard.flat().every((cell) => cell !== EMPTY_BOX);
    if (isTie) {
        showMessage("It's a tie!");
    }
}

// Function to display a message
function showMessage(message) {
    messageElement.textContent = message;
}
    // Function to switch players
    function switchPlayer() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    // Function to handle the computer's move
    function computerMove() {
        let availableMoves = [];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                if (gameBoard[row][col] === EMPTY_BOX) {
                    availableMoves.push({ row, col });
                }
            }
        }

        if (availableMoves.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableMoves.length);
            const { row, col } = availableMoves[randomIndex];
            gameBoard[row][col] = O_TURN;
            updateCell(row, col);
            checkWin();
            checkTie();
            switchPlayer(); // Switch back to the player's turn
        }
    }

    // Computer's turn when called.
    if (currentPlayer === "O") {
        setTimeout(computerMove, 1000); // after one sec, computer turn (set timeout to 1 sec)
    }
    
    messageElement.textContent = `Player ${currentPlayer}'s turn`;


// Function to reset the game
function resetGame() {
    gameBoard = [
        [EMPTY_BOX, EMPTY_BOX, EMPTY_BOX],
        [EMPTY_BOX, EMPTY_BOX, EMPTY_BOX],
        [EMPTY_BOX, EMPTY_BOX, EMPTY_BOX]
    ];
    XOturn = X_TURN;
    currentPlayer = "X";
    messageElement.textContent = "Player X's turn";
    for (let i = 0; i < 9; i++) {
        gameBoardElement.children[i].textContent = "";
    }
}

// Add an event listener for the reset button
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);
});