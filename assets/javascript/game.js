var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

document.onkeyup = function(event) {

	var userGuess = event.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

	if (options.indexOf(userGuess) > -1) {

		if (userGuess === computerGuess) {
			wins++;
			numGuesses = 9;
			guessChoices = [];
		}

		if (userGuess != computerGuess) {
			numGuesses --;
			guessChoices.push(userGuess);
		}

		if (numGuesses === 0) {

		numGuesses = 9;
		losses ++;
		guessChoices = [];
	}

	var html = 
		"<h1>Psychic Game</h1>" +
		"<p>Guess what letter I'm thinking of!</p>" +
		"<p>Victories: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses left until you lose: " + numGuesses + "</p>" +
		"<p>These letter don't work: " + guessChoices.join(", ") + "</p>";

	document.querySelector("#game").innerHTML = html;


	}
};