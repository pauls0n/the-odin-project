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
};