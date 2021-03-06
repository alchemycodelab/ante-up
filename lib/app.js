/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const colors = require('colors');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const pokerSocket = require('./socket/pokerSocket');

io.on('connection', function(socket) {
  pokerSocket(io, socket);
  console.log('new connection', socket.id);
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = server;
