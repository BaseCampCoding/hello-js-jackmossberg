const scoreBoard = {
    "The Best Ever": 1000000
};

let newPlayerName = "damian";
let newPlayerScore = 150;

scoreBoard[newPlayerName] = newPlayerScore;


let playerToRemove = "damian";
delete scoreBoard[playerToRemove];


let playerNameToUpdate = "The Best Ever";
let scoreToAdd = 149820;
scoreBoard[playerNameToUpdate] += scoreToAdd;


let mondayBonus = 100;
for (i in scoreBoard) {
    scoreBoard[i] += mondayBonus;
}

console.log(scoreBoard);