// Generates a static deck object taken from deck of cards api
function newDeck() {
  const staticDeck = [
    {
      'suit': 'DIAMONDS',
      'value': '6',
      'code': '6D'
    },
    {
      'suit': 'CLUBS',
      'value': 'QUEEN',
      'code': 'QC'
    },
    {
      'suit': 'CLUBS',
      'value': '6',
      'code': '6C'
    },
    {
      'suit': 'SPADES',
      'value': '5',
      'code': '5S'
    },
    {
      'suit': 'SPADES',
      'value': 'QUEEN',
      'code': 'QS'
    },
    {
      'suit': 'CLUBS',
      'value': 'KING',
      'code': 'KC'
    },
    {
      'suit': 'CLUBS',
      'value': '5',
      'code': '5C'
    },
    {
      'suit': 'HEARTS',
      'value': 'JACK',
      'code': 'JH'
    },
    {
      'suit': 'SPADES',
      'value': 'ACE',
      'code': 'AS'
    },
    {
      'suit': 'DIAMONDS',
      'value': '10',
      'code': '10D'
    },
    {
      'suit': 'SPADES',
      'value': '3',
      'code': '3S'
    },
    {
      'suit': 'DIAMONDS',
      'value': '3',
      'code': '3D'
    },
    {
      'suit': 'DIAMONDS',
      'value': '2',
      'code': '2D'
    },
    {
      'suit': 'CLUBS',
      'value': '10',
      'code': '10C'
    },
    {
      'suit': 'DIAMONDS',
      'value': '7',
      'code': '7D'
    },
    {
      'suit': 'DIAMONDS',
      'value': '4',
      'code': '4D'
    },
    {
      'suit': 'HEARTS',
      'value': '9',
      'code': '9H'
    },
    {
      'suit': 'HEARTS',
      'value': '7',
      'code': '7H'
    },
    {
      'suit': 'HEARTS',
      'value': '6',
      'code': '6H'
    },
    {
      'suit': 'HEARTS',
      'value': 'QUEEN',
      'code': 'QH'
    },
    {
      'suit': 'CLUBS',
      'value': 'ACE',
      'code': 'AC'
    },
    {
      'suit': 'DIAMONDS',
      'value': 'ACE',
      'code': 'AD'
    },
    {
      'suit': 'HEARTS',
      'value': 'ACE',
      'code': 'AH'
    },
    {
      'suit': 'SPADES',
      'value': '10',
      'code': '10S'
    },
    {
      'suit': 'CLUBS',
      'value': '2',
      'code': '2C'
    },
    {
      'suit': 'HEARTS',
      'value': '5',
      'code': '5H'
    },
    {
      'suit': 'SPADES',
      'value': '2',
      'code': '2S'
    },
    {
      'suit': 'CLUBS',
      'value': '4',
      'code': '4C'
    },
    {
      'suit': 'DIAMONDS',
      'value': '8',
      'code': '8D'
    },
    {
      'suit': 'DIAMONDS',
      'value': 'KING',
      'code': 'KD'
    },
    {
      'suit': 'HEARTS',
      'value': '4',
      'code': '4H'
    },
    {
      'suit': 'HEARTS',
      'value': '10',
      'code': '10H'
    },
    {
      'suit': 'SPADES',
      'value': '9',
      'code': '9S'
    },
    {
      'suit': 'CLUBS',
      'value': '7',
      'code': '7C'
    },
    {
      'suit': 'SPADES',
      'value': '7',
      'code': '7S'
    },
    {
      'suit': 'SPADES',
      'value': '8',
      'code': '8S'
    },
    {
      'suit': 'DIAMONDS',
      'value': 'QUEEN',
      'code': 'QD'
    },
    {
      'suit': 'HEARTS',
      'value': '3',
      'code': '3H'
    },
    {
      'suit': 'HEARTS',
      'value': '8',
      'code': '8H'
    },
    {
      'suit': 'CLUBS',
      'value': '8',
      'code': '8C'
    },
    {
      'suit': 'SPADES',
      'value': '6',
      'code': '6S'
    },
    {
      'suit': 'SPADES',
      'value': 'JACK',
      'code': 'JS'
    },
    {
      'suit': 'SPADES',
      'value': 'KING',
      'code': 'KS'
    },
    {
      'suit': 'CLUBS',
      'value': '3',
      'code': '3C'
    },
    {
      'suit': 'DIAMONDS',
      'value': '5',
      'code': '5D'
    },
    {
      'suit': 'DIAMONDS',
      'value': '9',
      'code': '9D'
    },
    {
      'suit': 'CLUBS',
      'value': '9',
      'code': '9C'
    },
    {
      'suit': 'DIAMONDS',
      'value': 'JACK',
      'code': 'JD'
    },
    {
      'suit': 'HEARTS',
      'value': '2',
      'code': '2H'
    },
    {
      'suit': 'SPADES',
      'value': '4',
      'code': '4S'
    },
    {
      'suit': 'CLUBS',
      'value': 'JACK',
      'code': 'JC'
    },
    {
      'suit': 'HEARTS',
      'value': 'KING',
      'code': 'KH'
    }
  ];

  return staticDeck;
}

// Takes a deck object shaped like staticDeck and a number of swaps to perform, and randomly swaps cards within the deck to generate a freshly shuffled deck. Void method.
function shuffle(deck, swaps) {
  for(let i = 0; i < swaps; i++)
  {
    let firstSwap = Math.floor((Math.random() * deck.length));
    let secondSwap = Math.floor((Math.random() * deck.length));
    let temp = deck[firstSwap];
    deck[firstSwap] = deck[secondSwap];
    deck[secondSwap] = temp;
  }
}

module.exports = { newDeck, shuffle };