let PLAYERTOTAL = 0;
let COMPUTERTOTAL = 0;

// Creating an object that contains the pictures of cards
var cardsArray = [
    {name: 'Ace', image: 'ace.png'},
    {name: 'Two', image:'two.png'},
    {name: 'Three', image:'three.png'},
    {name: 'Four', image:'four.png'},
    {name: 'Five', image:'five.png'},
    {name: 'Six', image:'six.png'},
    {name: 'Seven', image:'seven.png'},
    {name: 'Eight', image:'eight.png'},
    {name: 'Nine', image:'nine.png'},
    {name: 'Ten', image:'ten.png'},
    {name: 'Jack', image:'jack.png'},
    {name: 'Queen', image:'queen.png'},
    {name: 'King', image:'king.png'},
]

var pCardsArray = [];


//This function is called when the player hits start and the player 
//is automatically dealt two cards, the button disappears,
//and the hit and stand buttons appear
function start() {
    let container = document.getElementById("playersCards");
    for (let i = 0; i < 2; i++) {
        let card = Math.ceil(Math.random() * 11);
        card = aceSituation(card);
        pCardsArray.push(card);
        console.log(pCardsArray)
        let image = createCard(card);
        container.appendChild(image);
        PLAYERTOTAL += card;
    }
    document.getElementById("start").style.display="none";
    document.getElementById("playerTotal").innerHTML = PLAYERTOTAL;
    document.getElementById("hit-placeholder").innerHTML ='<button onclick="hit()" id="hit">Hit</button>';
    document.getElementById("stand-placeholder").innerHTML = '<button id="stand" onclick="stand()">Stand</button>';
}

// This function creates cards
// It takes an input of an integer and creates a card based off of that
function createCard(int) {
    let div = document.createElement("div");
    if (int == 11) {
        div.innerHTML = "<img src='" + cardsArray[0].image + "'>";
    }
    else if (int == 10) {
        let num = Math.floor(Math.random() * 4);
        int += num;
        div.innerHTML = "<img src='" + cardsArray[int - 1].image + "'>";
    }
    else {
        div.innerHTML = "<img src='" + cardsArray[int - 1].image + "'>";
    }
    div.className = "card";
    return div;
}

// Refresshes the page when the player hits the Replay button
function refresh() {
    window.location.reload(false);
}

// Compares the player's total to the computer's total
function compare(playersTotal, computersTotal) {
    if (computersTotal > 21) {
        alert("You won");
    }
    else if (playersTotal > 21) {
        alert("You Busted");
    }
    else {
        if (playersTotal > computersTotal) {
            alert("You won the round");
        }
        else if (playersTotal < computersTotal) {
            alert("You lost the round");
        }
        else {
            alert("You tied");
        }
    }
    document.getElementById("refresh-placeholder").innerHTML = '<button onclick="refresh()">Replay</button>';
    document.getElementById("hit").style.display="none";
    document.getElementById("stand").style.display="none";
}

// This function computes the computers hand
function getComputerTotal() {
    let computerContainer = document.getElementById("computersCards");
    while(COMPUTERTOTAL < 15) {
        let compRandom = Math.ceil(Math.random() * 11);
        let compCard = createCard(compRandom);
        compCard.className = "card";
        computerContainer.appendChild(compCard);
        COMPUTERTOTAL += compRandom;
    }
    
    document.getElementById("computerTotal").innerHTML = COMPUTERTOTAL;
}

// This deals the player another card
function hit() {    
    let container = document.getElementById("playersCards");          
    let random = Math.ceil(Math.random() * 11);
    let playerCard = createCard(random);
    container.appendChild(playerCard);
    aceSituation(random);
    if (PLAYERTOTAL < 21) {
        PLAYERTOTAL += random;
        document.getElementById("playerTotal").innerHTML = PLAYERTOTAL;
    }
    else if (PLAYERTOTAL == 21) {
        let compTotal = getComputerTotal();
        compare(PLAYERTOTAL, compTotal);
    }
    else if (PLAYERTOTAL > 21) {
        document.getElementById("hit").style.display="none";
        document.getElementById("stand").style.display="none";
        document.getElementById("refresh-placeholder").innerHTML = '<button onclick="refresh()">Replay</button>';
        alert("You busted");
    }
                
}

// This ends the game and compares the player's total with the computer's total
function stand() {
    getComputerTotal();
    compare(PLAYERTOTAL, COMPUTERTOTAL);
}

function aceSituation(value) {
    if (PLAYERTOTAL >= 11 && value == 11) {
        value = 1;
    }
    else if (PLAYERTOTAL < 11 && value == 1) {
        value = 11;
    }
    return value;
}
