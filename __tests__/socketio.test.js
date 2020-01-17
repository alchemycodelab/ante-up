require('dotenv').config();
const io = require('socket.io-client');
// const server = require('../lib/app');
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const User = require('../lib/model/User');

let socket;

describe('login signup', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(done => {
    console.log('Trying to connect client in beforeEach...');
    socket = io.connect('http://localhost:3000');
    socket.on('connect', () => {
      console.log('Client connected in beforeEach.');
      done();
    });
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterEach(done => {
    socket.disconnect();
    done();
  });

  //Use socket to emit and listen to events on the client side

  it('handles bad for user that does not exist', (done) => {
    socket.on('login-unsuccessful', message => {
      expect(message).toEqual('Invalid username or password!');
      done();
    });
    socket.emit('login', {
      username: 'Danny',
      password: '123'
    });
  });

  // it('cant create account if username is taken', async(done) => {
  //   jest.setTimeout(30000);
  //   await User.create({ username: 'Danny', password: '123' })
  //     .then(createdUser => console.log('created test user', createdUser));

  //   socket.on('sign-up-unsuccessful', message => {
  //     expect(message).toEqual('Username taken, please try again!');
  //     done();
  //   });
  //   socket.emit('signup', {
  //     username: 'Danny',
  //     password: '12345'
  //   });
  // });

  it('can create a user account', (done) => {
    socket.on('sign-up-successful', user => {
      done();
      expect(user).toEqual({
        username: 'Danny H',
        passwordHash: user.passwordHash,
        _id: user._id.toString(),
        __v: 0
      });
    });
    socket.emit('signup', {
      username: 'Danny H',
      password: '123'
    });
  });
});
