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
            if (currentPlayer === "0") {
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
        // Implement your win-checking logic here
    }
    // Function to check for a tie
    function checkTie() {
        // Implement your tie-checking logic here
    }
    // Function to switch players
    function computerMove() {
        while (true) {
            const row = Math.floor(Math.random() * 3);
            const col = Math.floor(Math.random() * 3);
            
            if (gameBoard[row][col] === EMPTY_BOX) {
                gameBoard[row][col] = O_TURN; // "O" represents the computer
                updateCell(row, col);
                checkWin();
                checkTie();
                switchPlayer(); // Switch back to the player's turn
                break;
            }
        }
    }
    
    // computers turn when called.
    computerMove();
    
        messageElement.textContent = `Player ${currentPlayer}'s turn`;
    });
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
