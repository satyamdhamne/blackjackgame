let cardsp = [];

// let cards = firstCard + " " + secondCard + " " ;

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messege = "";
let messegeEl = document.getElementById("messege-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name : "Per",
    chips : 145,
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

console.log(cardsp);
// declare function to get random card values;

function getrandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1; // will always return 5

  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getrandomCard(); //called the function to get random cards values
  let secondCard = getrandomCard();
  cardsp = [firstCard, secondCard];
  sum = firstCard + secondCard;
  console.log("startgame called");
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cardsp.length; i++) {
    cardsEl.textContent += cardsp[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    messege = "Do you want to draw new card ?";
  } else if (sum === 21) {
    messege = "Suiii! You've got Blackjack";
    hasBlackJack = true;
  } else {
    messege = "You are out of the game!";
    isAlive = false;
  }
  messegeEl.textContent = messege;
}

function addNewCard() {
  if (isAlive == true && hasBlackJack == false) {
    let newCard = getrandomCard();

    sum += newCard;
    // Push the card to the cardsp array
    cardsp.push(newCard);

    console.log(cardsp);
    renderGame();
  }
}
