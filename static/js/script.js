
// at the first you click me then 
// at give an elert asking me what is my year boor
// get the 2020 - year = sum * 365
// give me the result 
// you are days() old
// challenge 1 is done

window.onload = function() {
    document.getElementById("click-me-1").addEventListener("click", getAgeInDays);
    document.getElementById("restart-first-challenge").addEventListener("click", restartFirstChallenge)
    document.getElementById("cat-generator").addEventListener("click", generateACat)
    document.getElementById("restart-second-challenge").addEventListener("click", restartSecondChallenge)
    document.getElementById("restart-third-challenge").addEventListener("click", restartThirdChallenge)
	// document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit)
	// document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic)
// 	// document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal)

}

const getAgeInDays = () => {
  let year = prompt("What year were you born.. Try it!!", 1999);
  if (year != null) {
  	let years = 2020 - year
  	let sumDays = years * 356
    document.getElementById("flex-box-result").innerHTML =
    `<h1 class="font-weight-bold">You are ${sumDays} days old</h1>`
  }
}

const restartFirstChallenge = () => {
  	document.getElementById("flex-box-result").innerHTML = "";
}

// challenge 2

const generateACat = () => {
	let image = document.createElement('img')
	let div = document.getElementById('flex-cat-gen')
	image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small'
	image.alt = 'foto'
	div.appendChild(image)
}

const restartSecondChallenge = () => {
	document.getElementById("flex-cat-gen").innerHTML = "";
}

// challenge 3
// get humanchoice
// get computer Choice
// decide who is the winner
// result history
// message


const rpsGame = (yourChoice) => {
	let humanchoice = yourChoice.id
	// console.log(humanchoice)
	let computerChoice = botChoice()
	// console.log(computerChoice)
	let result = determineWinner(humanchoice, computerChoice)
	// console.log(result)
	let humanchoiceHTML = document.getElementById(humanchoice)
	let computerChoiceHTML = document.getElementById(computerChoice)
	insertHtml(humanchoiceHTML.src, result, computerChoiceHTML.src) 
}

const botChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3); 
	switch(randomNumber) {
		case 0:
			return 'rock'
			break
		case 1:
			return 'paper'
			break
		case 2:
			return 'scissors'		
	}
}


const determineWinner  = (humanchoice , computerChoice) => {
    if (humanchoice === computerChoice)
  {
    return "The game is a tie!";
  }
  if (humanchoice === "rock"){
    if (computerChoice === "paper") {
      return "You Lost!";
    } else {
      return "You Won!";
    }
  }
  if (humanchoice === "paper") {
    if (computerChoice === "scissors") {
      return "You Lost!";
    } else {
      return "You Won!";
    }
  }
  if (humanchoice === "scissors") {
    if (computerChoice === "rock"){
      return "You Lost!";
    }
    else {
      return "You Won!";
    }
  }
}


const insertHtml = (humanchoice, determineWinner, computerChoice) => {
	let color = getTheColor(determineWinner)
	document.getElementById('flex-box-rps-div').innerHTML = 
	`	
	<img class="human-image" src="${humanchoice}" height="150" width="150">
	<h1 style="color: ${color}" class="determineWinner">${determineWinner}</h1>
	<img class='computer-image' src="${computerChoice}" height="150" width="150">
	`
}

const getTheColor = (status) => {
	console.log('1')
	switch(status) {
		case 'You Lost!':
			return 'red'
			break
		case 'You Won!':
			return 'green'
			break
		case 'The game is a tie!':
			return 'blue'		
	}

} 

const restartThirdChallenge = () => {
	document.getElementById("flex-box-rps-div").innerHTML = `
		<img id="rock" src="https://lh3.googleusercontent.com/proxy/nPWQrKjRGgTdt7dK7UQpcXKE1YqZqo5ENM5Mr9vJTk-WyIr5gBRurImeWn9q578fFqVnpIks2g_V6IHGrY2KzjLindF9bz9DMVcQS2XY7hWzQz1t7fTCtgS_J6KHWVXVE2TF3gapo5xk3uEcPSWIzhr26ytimeKDN5-n_mBJ61XkM4EFUOfYKKG4eVv8q9ewDWSY05tDeIsT7A" alt="rock" height="150" width="150" onclick="rpsGame(this)">
		<img id="paper" src="https://previews.123rf.com/images/shambulin/shambulin1307/shambulin130700001/21126532-blank-paper-cartoon-character-with-arms.jpg" alt="paper" height="150" width="150" onclick="rpsGame(this)">
		<img id="scissors" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCMyBCFyE0r6GtPlcCRJxqtfD6JV6Bpe_P_ZxCkjStKxhkeoX-" alt="scissors" height="150" width="150" onclick="rpsGame(this)">

	`;
}


// challenge 4
// get all the buttons
// create a new variable copyAllButtons
// loping over all buttons all push them to copyAllButtons
// create function buttonColorChange with if statment

let all_buttons = document.getElementsByTagName("button")
let copyAllButtons = []
// console.log(copyAllButtons)

for (let value of all_buttons) {
	copyAllButtons.push(value.classList[1])
}


const buttonColorChange = (buttonThingy) => {
	if (buttonThingy.value === 'red'){
		buttonsRed()
	} else if (buttonThingy.value === 'green'){
		buttonsGreen()
	} else if (buttonThingy.value === 'reset'){
		buttonsColorReset()
	} else if (buttonThingy.value === 'random'){
		randomColors()
	}
}	

const buttonsRed = () => {
	for (let value of all_buttons) {
		value.classList.remove(value.classList[1])
		value.classList.add('btn-danger')
	}
}

const buttonsGreen = () => {
	for (let value of all_buttons) {
		value.classList.remove(value.classList[1])
		value.classList.add('btn-success')
	}
}

const buttonsColorReset = () => {
	for ( let i=0; i < all_buttons.length; i++){
		all_buttons[i].classList.remove(all_buttons[i].classList[1])
		all_buttons[i].classList.add(copyAllButtons[i])

	}
}	

let arrayShuffle = function(arr) {
	let newPos, temp
	for (let i = arr.length - 1; i > 0 ; i--){
		newPos = Math.floor(Math.random() * (i + 1))
		temp = arr[i]
		arr[i] = arr[newPos]
		arr[newPos] = temp
	}
	return arr
}

// so in randomColors function i have 2 options to emplemt it
// 1 - with arrayShuffle function 
// 2- randomNumberClasses 

const randomColors = () => {
	let choices = ['btn-success', 'btn-danger', 'btn-primary', 'btn-warning']
	for ( let i=0; i < all_buttons.length; i++){
	let randomNumberClasses = Math.floor(Math.random() * 4);
		all_buttons[i].classList.remove(all_buttons[i].classList[1])
		all_buttons[i].classList.add(choices[randomNumberClasses])
	}
	// let neww = arrayShuffle(copyAllButtons)
	// for ( let i=0; i < all_buttons.length; i++){
	// 	all_buttons[i].classList.remove(all_buttons[i].classList[1])
	// 	all_buttons[i].classList.add(neww[i])
	// }
}



// challenge 5 : blackjack
// first of all i need to add addEventListener for hit 
// create a variable that has all the id for you and dealer 
// create a function blackjackHit 
// 1 - createElement img
// 2- appendChild with access the img 
// 3- add the audio 
// 4- play it 
// create the function showcard that have all the last 3 points 

// need to add cards to blackjackGame
// get randomNumber
// add it showcard
// and a new attribute to showcard


let blackjackGame = {
  'you': {'scoreSpan': '#your-blackjack-score', 'div': '#your-box', 'score': 0},
  'dealer': {'scoreSpan': '#dealer-blackjack-score', 'div': '#dealer-box', 'score': 0},
  'isStand': false,
  'turnsOver': false,
  'wins': 0,
  'losses': 0,
  'draws': 0,
  'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11]},
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A']
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

// we are gonna use event listeners
document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

function blackjackHit() {
  if (blackjackGame['isStand'] === false) {
    let card = randomCard();
    updateScore(card, YOU);
    showCard(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackjackGame['cards'][randomIndex];
}

function updateScore(card, activePlayer) {
  if (card === 'A') {
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}

function showCard(card, activePlayer) {
  if (activePlayer['score'] <= 21) {
    let cardImage = document.createElement('IMG');
    cardImage.src = `static/images/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}

function showScore(activePlayer) {
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = "BUST!";
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame['isStand'] = true;
  while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    updateScore(card, DEALER);
    showCard(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }

  blackjackGame['turnsOver'] = true;
  showResult(); 
}

function blackjackDeal() {
  if (blackjackGame['turnsOver'] === true) {

    blackjackGame['isStand'] = false;

    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    for (i=0; i<yourImages.length; i++) {
      yourImages[i].remove();
    }

    for (i=0; i<dealerImages.length; i++) {
      dealerImages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;

    document.querySelector('#your-blackjack-score').textContent = 0;
    document.querySelector('#dealer-blackjack-score').textContent = 0;

    document.querySelector('#your-blackjack-score').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-score').style.color = '#ffffff';

    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack-result').style.color = 'black';

    blackjackGame['turnsOver'] = false;
  }
}

// show result on the top and update the score in the table
function showResult() {
  let message, messageColor;

  if (blackjackGame['turnsOver'] === true) {

    if (YOU['score'] <= 21) {

      // condition: higher score than dealer's or when dealer busts but you're 21 or under.
      if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
        blackjackGame['wins']++;
        document.querySelector('#wins').textContent =  blackjackGame['wins']; 
        message = 'You won!';
        messageColor = 'green';
        winSound.play();

      } else if (YOU['score'] < DEALER['score']) {
        blackjackGame['losses']++;
        document.querySelector('#losses').textContent =  blackjackGame['losses']; 
        message = 'You lost!';
        messageColor = 'red';
        lossSound.play();
        
      } else if (YOU['score'] === DEALER['score']) {
        blackjackGame['draws']++;
        document.querySelector('#draws').textContent = blackjackGame['draws']; 
        message = 'You drew!';
        messageColor = 'black';
      }

      // condition: user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
      blackjackGame['losses']++;
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      message = 'You lost!';
      messageColor = 'red';
      lossSound.play();

    // condition: when DEALERh bust.
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
      blackjackGame['draws']++;
      document.querySelector('#draws').textContent = blackjackGame['draws'];
      message = 'You drew!';
      messageColor = 'black';
    }
  }

  document.querySelector('#blackjack-result').textContent = message;
  document.querySelector('#blackjack-result').style.color = messageColor;
}
