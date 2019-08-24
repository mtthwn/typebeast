require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

let roomNum = 1; // Var tracks the room new users will be directed to.

const roomTracker = {
  totalUsers: 0
};

const formattedClients = {};

const getQuote = room => {
  if (!roomTracker['room-' + roomNum]['quote']) {
    axios
      .get(`${process.env.TYPEAPI}/api/quotes`)
      .then(res => {
        room['quote'] = res.data.data.quote;
        // console.log(roomTracker);
      })
      .catch(e => console.log(e.message));
  }
};

let alreadyInRoom = false;

io.on('connection', function(socket) {
  roomTracker.totalUsers++;
  console.log(`===============================`);
  console.log('\nA user connected: ', socket.id, '/Users in server:', roomTracker.totalUsers);

  // Handler to receive username and vehicle. Must happen first.
  socket.on('user-info', data => {
    const formattedData = JSON.parse(data).user;

    //Check if username already in room and set value.
    function userInRoom () {
      for (let socket in formattedClients[`room-${roomNum}`]) {
        const existing = formattedClients[`room-${roomNum}`][socket].username
        const newUser = formattedData.username
        if (newUser === existing) {
          return true;
        }
      }
      return false;
    }
    alreadyInRoom = userInRoom();

    //If it's the first user, the room doesn't exist - make the room.
    if (!roomTracker['room-' + roomNum]) {
      socket.join('room-' + roomNum);
      // Create an object to track the users and quote in a room
      roomTracker['room-' + roomNum] = {
        users: 1,
        quote: ''
      };
      getQuote(roomTracker['room-' + roomNum]);

      if (!formattedClients[`room-${roomNum}`]) {
        formattedClients[`room-${roomNum}`] = {};
        formattedClients[`room-${roomNum}`][socket.id] = formattedData;
      }

      //If the room is not at max capacity (4), add user to the room
    } else if (
      roomTracker['room-' + roomNum] &&
      roomTracker['room-' + roomNum]['users'] < 4 &&
      (!alreadyInRoom || formattedData.username === 'Guest')
    ) {
      socket.join('room-' + roomNum);
      roomTracker['room-' + roomNum]['users']++;
      formattedClients[`room-${roomNum}`][socket.id] = formattedData;
      //If the room exists and is at capacity, increase the room number, join the new room, set count to 1
    } else {
      roomNum++;
      socket.join('room-' + roomNum);
      roomTracker['room-' + roomNum] = {
        users: 1,
        quote: ''
      };
      formattedClients[`room-${roomNum}`] = {};
      formattedClients[`room-${roomNum}`][socket.id] = formattedData;
      getQuote(roomTracker['room-' + roomNum]);
    }

    io.to(`room-${roomNum}`).emit(
      'user-broadcast',
      JSON.stringify(formattedClients[`room-${roomNum}`])
    );

    console.log(roomTracker)
    console.log(formattedClients)

    // Set up variable to get array of socket IDs in current room
    // let clients = io.sockets.adapter.rooms['room-' + roomNum];
    // let clientsArray = Object.keys(clients.sockets);

    socket.emit('room-number', {
      roomNum
    });

  });


  //Check if the room is at capacity
  socket.on('initiate', () => {
    roomNum++; // Stops more people from joining the initiated room.
    io.to(Object.keys(socket.rooms)[1]).emit('game-start', {
      description: '3 players in room. Game starting shortly.',
      quote: roomTracker[Object.keys(socket.rooms)[1]]['quote']
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
    if (
      formattedClients[Object.keys(socket.rooms)[1]] &&
      formattedClients[Object.keys(socket.rooms)[1]][socket.id]
    ) {
      delete formattedClients[Object.keys(socket.rooms)[1]][socket.id];
    }

    const rooms = Object.keys(socket.rooms).slice();

    if (roomTracker[rooms[1]]) {
      roomTracker[rooms[1]]['users']--;
      roomTracker.totalUsers--;
    }

    io.to(rooms[1]).emit('player-left', {
      description: `${socket.id} has left the game.`,
      formattedClients: formattedClients[Object.keys(socket.rooms)[1]]
    });

    console.log(`===============================`);
    console.log('A user disconnected', socket.id);
    console.log(roomTracker)
    console.log(formattedClients)
  });

  socket.on('disconnect', function() {
  });
});

http.listen(port, function() {
  console.log(`Listening on :${port}`);
});
