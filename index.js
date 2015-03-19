var io = require('socket.io')(8080);

console.log('starting websockets server');
io.on('connection', function (socket) {
  'use strict';

  console.log('new client connected');

  socket.on('coords', function (e) {
    // console.log(e);
    socket.broadcast.emit('coords', { data: e});
  });

  socket.on('message', function (e) {
    console.log(e.data);
    socket.broadcast.emit('message', { data: e.data});
  });
});
