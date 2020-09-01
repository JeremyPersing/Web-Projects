let COUNT = 0;
let playerOne = prompt("Enter the name of Player 1");
let playerTwo = prompt("Enter the name of Player 2");
if (playerOne == "") {
    playerOne = "Player 1";
}
if (playerTwo == "") {
    playerTwo = "Player 2";
}
let playerOneWins;

const GameBoard = () => {
        
        let container = document.getElementById("gameBoardHolder");
        let body = document.createElement("tbody");
        container.appendChild(body);

        const createGameBoard = () => {
        for (let i = 0; i < 3; i++) {
            let row = document.createElement("tr")
            for (let j = 0; j < 3; j++) {
                let cell = document.createElement("td");
                cell.id = "r" + i + "c" + j;
                cell.setAttribute("onclick", "placeSymbol(this.id)");
                row.appendChild(cell);
                
            }
            body.appendChild(row);
        }
    }
    const clearBoard = () => {
        COUNT = -1;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                document.getElementById("r" + i + "c" + j).innerHTML = "";
            }
        }
    }
    return {createGameBoard, clearBoard};
}

function placeSymbol(clickedId) {
    let clickedCell = document.getElementById(clickedId);
    if (COUNT < 9) {
        if (clickedCell.innerHTML != "") {
            alert("Choose a different cell")
        }
        else {
            if (playerOneWins != true) {
                if (COUNT % 2 == 0) {
                    console.log(COUNT);
                    clickedCell.innerHTML = "X";
                    determineWinner();
    
                }
                else {
                    console.log(COUNT);
                    clickedCell.innerHTML = "O";
                    determineWinner();
                }
                COUNT++;
            }
            else {
                if (COUNT % 2 == 0) {
                    console.log(COUNT);
                    clickedCell.innerHTML = "O";
                    determineWinner();
    
                }
                else {
                    console.log(COUNT);
                    clickedCell.innerHTML = "X";
                    determineWinner();
                }
                COUNT++;
            }
        }
    }
    
} 


function determineWinner() {
    let cellOne = document.getElementById("r0c0");
    let cellTwo = document.getElementById("r0c1");
    let cellThree = document.getElementById("r0c2");
    let cellFour = document.getElementById("r1c0");
    let cellFive = document.getElementById("r1c1");
    let cellSix = document.getElementById("r1c2");
    let cellSeven = document.getElementById("r2c0");
    let cellEight = document.getElementById("r2c1");
    let cellNine = document.getElementById("r2c2");
   
    if ((cellOne.innerHTML == "X" && cellTwo.innerHTML == "X" && cellThree.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellFour.innerHTML == "X" && cellFive.innerHTML == "X" && cellSix.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellSeven.innerHTML == "X" && cellEight.innerHTML == "X" && cellNine.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellOne.innerHTML == "X" && cellFour.innerHTML == "X" && cellSeven.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellTwo.innerHTML == "X" && cellFive.innerHTML == "X" && cellEight.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellThree.innerHTML == "X" && cellSix.innerHTML == "X" && cellNine.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellThree.innerHTML == "X" && cellSix.innerHTML == "X" && cellNine.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellOne.innerHTML == "X" && cellFive.innerHTML == "X" && cellNine.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellThree.innerHTML == "X" && cellFive.innerHTML == "X" && cellSeven.innerHTML == "X")) {
        alert(playerOne + " wins");
        playerOneWins = true;
        gb.clearBoard();
    }
    else if ((cellOne.innerHTML == "O" && cellTwo.innerHTML == "O" && cellThree.innerHTML == "O")) {
        alert(playerTwo + " wins");
        playerOneWins = false;
        gb.clearBoard();
    }
    else if ((cellFour.innerHTML == "O" && cellFive.innerHTML == "O" && cellSix.innerHTML == "O")) {
        alert(playerTwo + " wins");
        playerOneWins = false;
        gb.clearBoard();
    }
    else if ((cellSeven.innerHTML == "O" && cellEight.innerHTML == "O" && cellNine.innerHTML == "O")) {
        alert(playerTwo + " wins");
        playerOneWins = false;
        gb.clearBoard();
    }
    else if ((cellOne.innerHTML == "O" && cellFour.innerHTML == "O" && cellSeven.innerHTML == "O")) {
        alert(playerTwo + " wins");
        playerOneWins = false;
        gb.clearBoard();
    }
    else if ((cellTwo.innerHTML == "O" && cellFive.innerHTML == "O" && cellEight.innerHTML == "O")) {
        alert(playerTwo + " wins");
        playerOneWins = false;
        gb.clearBoard();
    }
    else if ((cellThree.innerHTML == "O" && cellSix.innerHTML == "O" && cellNine.innerHTML == "O")) {
        alert(playerTwo + " wins"); 
        playerOneWins = false;
        gb.clearBoard();
        }
    else if ((cellThree.innerHTML == "O" && cellSix.innerHTML == "O" && cellNine.innerHTML == "O")) {
        alert(playerTwo + " wins");
        playerOneWins = false;
        gb.clearBoard();
    }
    else if ((cellOne.innerHTML == "O" && cellFive.innerHTML == "O" && cellNine.innerHTML == "O")) {
        alert(playerTwo + " wins");
        playerOneWins = false;
        gb.clearBoard();
    }
    else if ((cellThree.innerHTML == "O" && cellFive.innerHTML == "O" && cellSeven.innerHTML == "O")) {
        alert(playerTwo + " wins");
        playerOneWins = false;
        gb.clearBoard();
    }
    else if (COUNT == 8){
        alert("Cat's Game!");
        gb.clearBoard();
    }
}

const gb = GameBoard();
gb.createGameBoard();