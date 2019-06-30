const express = require('express');
const axios = require('axios');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

let roomNum = 1; // Var tracks the room new users will be directed to.

let userCount = {
  totalUsers: 0
};

/* User Count object: {
  total: 12,
  room-1: 3,
  room-2: 3,
  room-3: 3,
  room-4: 3
}
*/

const getQuote = room => {
  if (!userCount['room-' + roomNum]['quote']) {
    axios
      .get('http://127.0.0.1:8081/api/quotes')
      .then(res => {
        room['quote'] = res.data.data.quote;
        console.log(userCount);
      })
      .catch(e => console.log(e.message));
  }
};

const formattedClients = {};

io.on('connection', function(socket) {
  userCount.totalUsers++;
  console.log('\na user connected, users in server:', userCount.totalUsers);
  //If it's the first user, the room doesn't exist - make the room.
  if (!userCount['room-' + roomNum]) {
    socket.join('room-' + roomNum);
    // Create an object to track the users and quote in a room
    userCount['room-' + roomNum] = {
      users: 1,
      quote: ''
    };
    getQuote(userCount['room-' + roomNum]);

    //If the room is not at max capacity (4), add user to the room
  } else if (
    userCount['room-' + roomNum] &&
    userCount['room-' + roomNum]['users'] < 4
  ) {
    socket.join('room-' + roomNum);
    userCount['room-' + roomNum]['users']++;
    // console.log(userCount);

    //If the room exists and is at capacity, increase the room number, join the new room, set count to 1
  } else {
    roomNum++;
    socket.join('room-' + roomNum);
    userCount['room-' + roomNum] = {
      users: 1,
      quote: ''
    };
    getQuote(userCount['room-' + roomNum]);

    // console.log(userCount);
  }

  //Set up variable to get array of socket IDs in current room
  let clients = io.sockets.adapter.rooms['room-' + roomNum];
  let clientsArray = Object.keys(clients.sockets);
  // console.log('IDs in current room:', clientsArray);
  console.log(clientsArray)
  //Welcome message for new user
  socket.emit('save-socket', {
    socketId: socket.id,
    clients: clientsArray,
    roomNum
  });

  socket.on('user-update', data => {
    const formattedData = JSON.parse(data).user;
    if (!formattedClients[`room-${roomNum}`]) {
      formattedClients[`room-${roomNum}`] = {};
    }

    // const formattedData = JSON.parse(data).user;

    // formattedData.socket = socket.id;
    formattedClients[`room-${roomNum}`][socket.id] = formattedData;

    console.log(`===============================`);
    console.log(formattedClients[`room-${roomNum}`]);

    io.to(`room-${roomNum}`).emit(
      'user-update',
      JSON.stringify(formattedClients[`room-${roomNum}`])
    );
  });
  //Broadcast that a new user joined to everyone ~else~
  socket.broadcast.to('room-' + roomNum).emit('new-user-join', {
    socketId: socket.id,
    clients: clientsArray,
    formattedClients: formattedClients[`room-${roomNum}]`]
  });

  //Check if the room is at capacity
  socket.on('initiate', () => {
    roomNum++; // Stops more people from joining the initiated room.
    io.to(Object.keys(socket.rooms)[1]).emit('game-start', {
      description: '3 players in room. Game starting shortly.',
      quote: userCount[Object.keys(socket.rooms)[1]]['quote']
    });
  });

  //When receiving an update from a user, broadcast to all users in the room
  socket.on('progress-update', completion => {
    // console.log('What room is this', Object.keys(socket.rooms));
    io.to(Object.keys(socket.rooms)[1]).emit('progress-broadcast', {
      socketId: socket.id,
      roomId: socket.rooms[1],
      completion: completion
    });
  });

  socket.on('game-finish', stats => {
    io.to(Object.keys(socket.rooms)[1]).emit('user-finish', {
      socketId: socket.id,
      roomId: Object.keys(socket.rooms)[1],
      completion: { progress: 1 },
      wpm: stats.wpm,
      position: stats.position
    });
  });

  socket.on('disconnecting', function() {
    console.log(socket.id);

    if (
      formattedClients[`room-${roomNum}`] &&
      formattedClients[`room-${roomNum}`][socket.id]
    ) {
      delete formattedClients[`room-${roomNum}`][socket.id];
    }

    const rooms = Object.keys(socket.rooms).slice();
    io.to(rooms[1]).emit('player-left', {
      description: `${socket.id} has left the game.`,
      formattedClients: formattedClients[`room-${roomNum}`]
    });
  });

  socket.on('disconnect', function() {
    console.log('A user disconnected', socket.id);
    // Remove user from total users list when they leave
    userCount.totalUsers--;
    //If someone disconnects, total user count changes, but room count remains the same
  });
});

http.listen(port, function() {
  console.log(`Listening on :${port}`);
});
