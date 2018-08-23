let win;
let random;
let possiblePrize;

let maxWin = 10;
let range = 5;
let totalPrize = 0;

const maxAttempt = 4;
const initialRange = 5;
const initialMaxWin = 10;
const numericOne = 1;

const multiplier = {
    range: 2,
    maxWin: 3
};

const game = confirm('Do you want to play a game?');

if (!game) {
    alert('You did not become a millionaire, but can.');
} else {
    startGame();
}

function startGame() {
    getRandomInt(range);
    for (let i = 1; i < maxAttempt; i++) {
        let attempt = maxAttempt-i;
        if (attempt === 3) {
            possiblePrize = maxWin;
        } else if (attempt === 2) {
            possiblePrize = maxWin/2;
        } else if (attempt === numericOne) {
            possiblePrize = Math.floor(maxWin/4);
        }
        let number = parseFloat(prompt(`
        Enter number from 0 to ${range}
        Attempts left: ${attempt}
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${possiblePrize}$`));
        if (random === number) {
            if (i === numericOne) {
                win = maxWin;
                continueGame();
                break;
            } else if (i === 2) {
                win = maxWin/2;
                continueGame();
                break;
            } else if (i === 3) {
                win = Math.floor(maxWin/4);
                continueGame();
                break;
            } 
        } else if (random !== number && i === 3) {
            losingGame();
        }
    }
}

function getRandomInt(x) {
    random = Math.floor(Math.random()* x++);
    return random;
}

function losingGame() {
    alert(`Thank you for a game. Your prize is: ${totalPrize}$`);
    let newGame = confirm('Do you want to play again?');
    if (newGame) {
        range = initialRange;
        maxWin = initialMaxWin;
        totalPrize = 0;
        startGame();
    }
}

function continueGame() {
    totalPrize = totalPrize + win;
    let contGame = confirm(`Congratulation!   Your prize is: ${totalPrize}$. Do you want to continue?`)
    if (contGame) {
        range *= multiplier.range;
        maxWin *= multiplier.maxWin;
        startGame();  
    } else {
        losingGame();
    }
}