const GameState = require('../lib/utils/gameState');

describe('GameState methods', () => {
  it('should solve hands when given multiple hands and some board cards', () => {
    let testGameState = new GameState();

    testGameState.hands = { socketIdTwo: { cardOne: '4s', cardTwo: '5s' }, socketIdThree: { cardOne: '6s', cardTwo: '6h' }, socketIdOne: { cardOne: '2s', cardTwo: '3s' } };

    testGameState.board = { cardThree: 'Th', cardFour: '3h', cardFive: 'Kh', cardSix: '5h', cardSeven: '6c' };

    const winningHandString = testGameState.solveHands();
    expect(winningHandString).toEqual('Flush, Kh High');
  });
});
