let boxes = document.querySelectorAll('.box');
let resetGameBtn = document.querySelector('.resetGame-btn');
let newGameBtn = document.querySelector('.newGame-btn');
let msgContainer = document.querySelector('.winner-div');
let winnerPlayer = document.querySelector('.winner-player');

// ======== Turner of X & O =======
let turn = true;

// ======== Win Pattern =======
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

// =========== Reset Btn ==========
const resetGameFunc = () => {
    turn = true;
    enabledBoxes();
    msgContainer.classList.add('hide');
}

// ======= Adding Event Listener =======
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

// ======== Disable Boxes ========
const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

// ======== Enable Boxes ========
const enabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    winnerPlayer.innerText = winner;
    msgContainer.classList.remove('hide');
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

resetGameBtn.addEventListener('click', resetGameFunc);
newGameBtn.addEventListener('click', resetGameFunc);