const socket = require('socket.io-client')('http://localhost:7890');
const { firstHandPrompt, playerOutOfTurnPrompt } = require('./tablePrompts');
const { startAppPrompt } = require('./startApp');

socket.on('connect', () => {
  console.log('You\'re connected', socket.id);
  startAppPrompt(socket)
    .then(data => {
      socket.emit('get-user-count', data);
      socket.on('dealer-options', () => {
        firstHandPrompt(socket).then(() => {
          socket.emit('player-readied-up');
          socket.on('players-ready', () => {
            socket.emit('deal-player-cards');
          });
          socket.on('your-cards', (data) => {
            console.log(data);
          });
          socket.on('game-board-cards', (data) => {
            console.log(data);
          });
          socket.on('winning-data', (data) => {
            console.log(data);
          });
          socket.on('waiting-for-ready', () => {
            console.log('waiting for all players to ready up');
          });
        });
      });
      socket.on('out-of-turn-options', () => {
        playerOutOfTurnPrompt(socket);
      });
    });
});
socket.on('player-joined-table', () => {
  //if first player at table give dealer prompt
  console.log('socket on player joined hit');
  // else give out of turn prompt
});



