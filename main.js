let currentPlayer = 'X';
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function handlePlayerTurn(ClickedCellIndex) {
    if (gameBoard[ClickedCellIndex] !== "" || !gameActive) {
        return;
    }
    gameBoard[ClickedCellIndex] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', cellClicked, false);
    });

    document.getElementById('restart').addEventListener('click', restartGame);
});

function cellClicked(ClickedCellEvent) {
    const ClickedCell = ClickedCellEvent.target;
    const ClickedCellIndex = parseInt(ClickedCell.id.replace('cell-', '')) - 1;
    if (gameBoard[ClickedCellIndex] !== "" || !gameActive) {
        return;
    }
    handlePlayerTurn(ClickedCellIndex);
    updateUI();
    checkforWinOrDraw();
}

function updateUI() {
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = gameBoard[i];
    }
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkforWinOrDraw() {
    let roundWon = false;
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            roundWon = true;
            break;
        }
    }
    if (roundWon) {
        announceWinner(currentPlayer === 'X' ? 'O' : 'X');
        gameActive = false;
        return;
    }
    let roundDraw = !gameBoard.includes("");
    if (roundDraw) {
        announceDraw();
        gameActive = false;
        return;
    }
}

function announceWinner(player) {
    const messageElement = document.getElementById('gameMessage');
    messageElement.innerText = `Player ${player} Wins!`;
}

function announceDraw() {
    const messageElement = document.getElementById('gameMessage');
    messageElement.innerText = 'Game Draw!';
}

function restartGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = 'X';
    updateUI();
    document.getElementById('gameMessage').innerText = '';
}
