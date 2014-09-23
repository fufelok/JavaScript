'use strict';
console.log('Black Jack ♡♢♠♣');
var cards = [{
	name: '♡A',
	value: 11
}, {
	name: '♢A',
	value: 11
}, {
	name: '♠A',
	value: 11
}, {
	name: '♣A',
	value: 11
}, {
	name: '♡K',
	value: 10
}, {
	name: '♢K',
	value: 10
}, {
	name: '♠K',
	value: 10
}, {
	name: '♣K',
	value: 10
}, {
	name: '♡Q',
	value: 10
}, {
	name: '♢Q',
	value: 10
}, {
	name: '♠Q',
	value: 10
}, {
	name: '♣Q',
	value: 10
}, {
	name: '♡J',
	value: 10
}, {
	name: '♢J',
	value: 10
}, {
	name: '♠J',
	value: 10
}, {
	name: '♣J',
	value: 10
}, {
	name: '♡10',
	value: 10
}, {
	name: '♢10',
	value: 10
}, {
	name: '♠10',
	value: 10
}, {
	name: '♣10',
	value: 10
}, {
	name: '♡9',
	value: 9
}, {
	name: '♢9',
	value: 9
}, {
	name: '♠9',
	value: 9
}, {
	name: '♣9',
	value: 9
}, {
	name: '♡8',
	value: 8
}, {
	name: '♢8',
	value: 8
}, {
	name: '♠8',
	value: 8
}, {
	name: '♣8',
	value: 8
}, {
	name: '♡7',
	value: 7
}, {
	name: '♢7',
	value: 7
}, {
	name: '♠7',
	value: 7
}, {
	name: '♣7',
	value: 7
}, {
	name: '♡6',
	value: 6
}, {
	name: '♢6',
	value: 6
}, {
	name: '♠6',
	value: 6
}, {
	name: '♣6',
	value: 6
}, {
	name: '♡5',
	value: 5
}, {
	name: '♢5',
	value: 5
}, {
	name: '♠5',
	value: 5
}, {
	name: '♣5',
	value: 5
}, {
	name: '♡4',
	value: 4
}, {
	name: '♢4',
	value: 4
}, {
	name: '♠4',
	value: 4
}, {
	name: '♣4',
	value: 4
}, {
	name: '♡3',
	value: 3
}, {
	name: '♢3',
	value: 3
}, {
	name: '♠3',
	value: 3
}, {
	name: '♣3',
	value: 3
}, {
	name: '♡2',
	value: 2
}, {
	name: '♢2',
	value: 2
}, {
	name: '♠2',
	value: 2
}, {
	name: '♣2',
	value: 2
}];

var computerCards = [];
var computerPoints = 0;
var randNr1 = Math.floor(Math.random() * 51);
computerCards.push(cards[randNr1]);
cards.splice(randNr1, 1);
var randNr2 = Math.floor(Math.random() * 50);
computerCards.push(cards[randNr2]);
cards.splice(randNr2, 1);
computerPoints = computerCards[0].value + computerCards[1].value;

console.log('Computer cards:  ' + computerCards[0].name + ', ' + computerCards[1].name);
console.log(computerPoints);

console.log('**********************************');



var playerPoints = 0;
var playerCards = [];
var randNr3 = Math.floor(Math.random() * 49);
playerCards.push(cards[randNr3]);
cards.splice(randNr3, 1);
var randNr4 = Math.floor(Math.random() * 48);
playerCards.push(cards[randNr4]);
cards.splice(randNr4, 1);
console.log('Your cards:  ' + playerCards[0].name + ', ' + playerCards[1].name);
playerPoints = playerCards[0].value + playerCards[1].value;
console.log('You have  ' + playerPoints + ' points');
var i = 0;
var j = 0;
while (i < 10) {
	var moreCards = prompt('Would you like to take more card? \n Yes or No?');
	moreCards = moreCards.trim();
	moreCards = moreCards.toLowerCase();
	if (moreCards === 'yes') {
		var randNr = Math.floor(Math.random() * (47 - i));
		playerCards.push(cards[randNr]);
		cards.splice(randNr, 1);
		playerPoints = playerPoints + playerCards[i + 1].value;
		console.log('Your cards:');
		while (j < i + 3) {
			console.log(playerCards[j].name);
			j = j + 1;
		}
		console.log('You have  ' + playerPoints + ' points');
		j = 0;

		i = i + 1;
	} else {
		break;
	}


}