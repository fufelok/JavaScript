'use strict';

triv.blackjack = (function () {


	var computerCards = [];
	var computerPoints = 0;
	var cardsAmount = 51;

	function drawCard(deck) {
		var randomCard = Math.floor(Math.random() * cardsAmount);
		deck.push(triv.cards[randomCard]);
		triv.cards.splice(randomCard, 1);
		cardsAmount = cardsAmount - 1;
	}
	//Deal two cards to the computer.

	drawCard(computerCards);
	drawCard(computerCards);

	computerPoints = computerCards[0].value + computerCards[1].value;
	if (computerPoints === 22) {
		computerPoints = 12;
	}

	//Deal two cards to the player.

	var playerPoints = 0;
	var playerCards = [];

	drawCard(playerCards);
	drawCard(playerCards);

	playerPoints = playerCards[0].value + playerCards[1].value;
	if (playerPoints === 22) {
		playerPoints = 12;
	}

	$('#computer').text(computerCards[0].name + ' and one unknown card');
	$('#player').text(playerCards[0].name + playerCards[1].name);
	$('#dialog').text('You have  ' + playerPoints + ' points. Would you like to take more cards? \n Get Card or Stop?');



	// BLACK JACK at start!?

	if (computerPoints === 21 && playerPoints === 21) {
		$('#dialog').text('We BOTH got BLACK JACK! But I am a computer, so I won!  ^_^ ');
		$('#moreCard').hide();
		$('#stop').hide();
	}

	if (playerPoints === 21) {
		$('#dialog').text('***** BLACK JACK ***** YOU WON!!! ');
		$('#moreCard').hide();
		$('#stop').hide();
	}

	//Take more cards
	var j = 0;
	$('#moreCard').click(function () {
		drawCard(playerCards);
		playerPoints = playerPoints + playerCards[playerCards.length - 1].value;
		if (playerPoints > 21) {
			if (playerCards[playerCards.length - 1].value > 10) {
				playerCards[playerCards.length - 1].value = 1;
				playerPoints = playerPoints - 10;
			}
		}


		while (j < playerCards.length) {
			console.log(playerCards[j].name);
			j++;
		}

		$('#player').text(playerCards.join());
	});


	/*else {

		var i = 0;
		var j = 0;
		//
		//   Ask about more cards if it is necessary
		//
		while (playerPoints < 22) {
			var moreCards = prompt('Would you like to take more cards? \n Yes or No?');
			moreCards = moreCards.trim();
			moreCards = moreCards.toLowerCase();

			if (moreCards === 'yes') {

				drawCard(playerCards);
				playerPoints = playerPoints + playerCards[playerCards.length - 1].value;
				if (playerPoints > 21) {
					if (playerCards[playerCards.length - 1].value > 10) {
						playerCards[playerCards.length - 1].value = 1;
						playerPoints = playerPoints - 10;
					}
				}

				console.log('Your cards are:');
				while (j < playerCards.length) {
					console.log(playerCards[j].name);
					j++;
				}
				console.log('You have  ' + playerPoints + ' points.');

				// BLACK JACK!
				if (playerPoints === 21) {
					console.log(' !!! ***** BLACK JACK ***** !!! ');
					break;
				}
				console.log('***************************************');
				console.log('***************************************');

				// 21 + Loser!
				if (playerPoints > 21) {
					console.log('  LOL. You lost. You have more than 21 points. LOOSER!  ');
					break;
				}
				j = 0;
			} else {

				// Computer card and points.
				console.log('Computer cards:  ' + computerCards[0].name + ', ' + computerCards[1].name);
				console.log('Computer has ' + computerPoints + ' points.');

				// Check computers points and keep or pop card!
				do {
					drawCard(computerCards);
					computerPoints = computerPoints + computerCards[computerCards.length - 1].value;
					if (computerPoints > 21) {
						if (computerCards[computerCards.length - 1].value > 10) {
							computerCards[computerCards.length - 1].value = 1;
							computerPoints = computerPoints - 10;
						}
					}
				} while (computerPoints < 22);

				if (computerPoints > 21) {
					computerPoints = computerPoints - computerCards[computerCards.length - 1].value;



					triv.cards.push(computerCards[computerCards.length - 1]);

					computerCards.pop();
				}

				if (computerCards.length > 2) {
					console.log('***************************************');
					console.log('Computer drew some more cards and now has ' + computerCards.length + ' cards!');
					console.log('Computer cards are: ');
					for (i = 0; i < computerCards.length; i = i + 1) {
						console.log(computerCards[i].name);
					}
				}

				//
				//Compare player's and computer's points.
				//
				if (computerPoints > playerPoints) {
					if (computerPoints === 21) {
						console.log('Computer has ***** BLACK JACK *****');
					} else {
						console.log(' Computer has won. Computer has ' + computerPoints + ' points. \n LOOSER.');
					}
				} else if (computerPoints < playerPoints) {
					console.log('  You have won. You have  ' + playerPoints + ' points. $$$$$ ');
				} else {
					if (computerPoints === 21 && playerPoints === 21) {
						console.log('***************************************');
						console.log(' ***** OMG!!! We BOTH got BLACK JACK! But I am a computer, so I won! ^_^ ***** ');
					} else {
						console.log('  Draw. I bet I win the next time!');
					}
				}
				break;
			}
		}
	}*/
	console.log('***************************************');
	console.log('***************************************');
}());