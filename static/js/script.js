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
	<h4 style="color: ${color}">${determineWinner}</h4>
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