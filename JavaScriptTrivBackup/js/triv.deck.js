'use strict';

triv.cards = (function () {
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
	cards = _.shuffle(cards);
	return cards;
}());