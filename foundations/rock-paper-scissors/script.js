function getComputerChoice() {
	let random = Math.floor(Math.random() * 10) + 1;
	let computerChoice;
	if (random <= 3) {
		computerChoice = "rock";
	} else if (random <= 6) {
		computerChoice = "paper";
	} else if (random <= 9) {
		computerChoice = "scissors";
	}
	return computerChoice;
}

function getHumanChoice() {
	let humanChoice = prompt("Enter your choice: (rock, paper, scissors):").toLowerCase().trim();
	return humanChoice;
}

function playRound() {
	let computerChoice = getComputerChoice();
	let humanChoice = getHumanChoice();

	if (humanChoice === computerChoice) {
		console.log("DRAW! You both chose " + humanChoice);
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		console.log("LOSE! Paper beats rock");
		computerScore++;
	} else if (humanChoice === "rock" && computerChoice === "scissors") {
		console.log("WIN! Rock beats scissors");
		humanScore++;
	}
	 else if (humanChoice === "paper" && computerChoice === "rock") {
		console.log("WIN! Paper beats rock");
		humanScore++;
	}
	 else if (humanChoice === "paper" && computerChoice === "scissors") {
		console.log("LOSE! Scissors beats paper");
		computerScore++;
	}
	 else if (humanChoice === "scissors" && computerChoice === "rock") {
		console.log("LOSE! Rock beats scissors");
		computerScore++;
	}
	 else if (humanChoice === "scissors" && computerChoice === "paper") {
		console.log("WIN! Scissors beats paper");
		humanScore++;
	}
}

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	playRound();
	playRound();
	playRound();
	playRound();
	playRound();

	if (humanScore > computerScore) {
		console.log(`You WIN!
			Your score: ${humanScore}
			Computer score: ${computerScore}`);
	} else if (humanScore < computerScore) {
		console.log(`You LOSE!
			Computer score: ${computerScore}
			Your score: ${humanScore}`);
	} else {
		console.log("DRAW! You both scored " + humanScore);
	}
}

playGame();