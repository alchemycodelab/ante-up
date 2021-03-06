/* eslint-disable no-console */
// #!/usr/bin/env node
/* eslint-disable no-unused-vars */
const socket = require('socket.io-client')('https://alchemy-ante-up.herokuapp.com/', {
  reconnection: false
});
const color = require('colors');
const { firstHandPrompt } = require('./tablePrompts');
const { startAppPrompt } = require('./startApp');
const { cleanUpCards } = require('../client/cleanUpData');

socket.on('connect', () => {

  console.log('You\'re connected'.rainbow.bold, socket.id);
  const start = () => startAppPrompt(socket)
    .then(data => {
      socket.emit('get-user-count', data);
      socket.on('dealer-options', () => {
        firstHandPrompt(socket).then(() => {
          socket.emit('player-readied-up');
          socket.on('players-ready', () => {
            socket.emit('deal-player-cards');
          });
          socket.on('your-cards', (data) => {
            cleanUpCards(data.holdCards, 'hold');
          });
          socket.on('game-board-cards', (data) => {
            cleanUpCards(data, 'board');
          });
          socket.on('winning-data', (data) => {
            if(data.winningSockets.includes(socket.id)) console.log(`                                ${'You are the Winner!'.rainbow.bold.underline}`);
            cleanUpCards(data, 'winner');
          });
          socket.on('waiting-for-ready', () => {
            console.log('waiting for all players to ready up');
          });
        });
      });
    }).catch(() => {
      start();
    });
  start();

});
