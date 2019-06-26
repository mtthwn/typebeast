const express = require('express');
const axios = require('axios');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

let roomNum = 1;

const roomData = [
  {
    roomNum,
    quote: ''
  }
];

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
// const checkRoomQuote = roomData => {
//   for (const room in roomData) {
//     if (!roomData[room].quote) {
//       axios
//         .get('http://127.0.0.1:8081/api/quotes')
//         .then(res => {
//           roomData[room].quote = res.data.data.quote;
//           console.log(roomData);
//         })
//         .catch(e => console.log(e.message));
//     }
//   }
// };

// checkRoomQuote(roomData);

const getQuote = (room) => {
  if (!userCount['room-' + roomNum]['quote']) {
    axios
      .get('http://127.0.0.1:8081/api/quotes')
      .then(res => {
        room['quote'] = res.data.data.quote;
        console.log(userCount)
      })
      .catch(e => console.log(e.message));
  }
}

io.on('connection', function(socket) {
  userCount.totalUsers++;
  console.log('a user connected, total users:', userCount.totalUsers);

  //If it's the first user, the room doesn't exist - make the room.
  if (!userCount['room-' + roomNum]) {
    socket.join('room-' + roomNum);
    // Create an object to track the users and quote in a room
    userCount['room-' + roomNum] = {
      users: 1,
      quote: ''
    }
    getQuote(userCount['room-' + roomNum]);

    //If the room is not at max capacity (3), add user to the room
  } else if (userCount['room-' + roomNum] && userCount['room-' + roomNum]['users'] < 3) {
    socket.join('room-' + roomNum);
    userCount['room-' + roomNum]['users']++;
    console.log(userCount);

    //If the room exists and is at capacity, increase the room number, join the new room, set count to 1
  } else {
    roomNum++;
    socket.join('room-' + roomNum);
    userCount['room-' + roomNum] = {
      users: 1,
      quote: ''
    }
    getQuote(userCount['room-' + roomNum])

    console.log(userCount);
  }

  //Set up variable to get array of socket IDs in current room
  let clients = io.sockets.adapter.rooms['room-' + roomNum];
  let clientsArray = Object.keys(clients.sockets);
  console.log(clientsArray);

  //Welcome message for new user
  socket.emit('welcome', {
    description: `Welcome! You are in room ${roomNum}! Current user count: ${
      userCount['room-' + roomNum]['users']
    }`,
    socket: socket.id,
    clients: clientsArray,
    userCount
  });

  //Broadcast that a new user joined to everyone ~else~
  socket.broadcast.to('room-' + roomNum).emit('new-user-join', {
    description: `New user has joined. Current user count: ${
      userCount['room-' + roomNum]['users']
    }`,
    socket: socket.id,
    clients: clientsArray,
    userCount
  });

  //Check if the room is at capacity
  socket.on('initiate', () => {
    console.log("Yeah, I got the emit")
    // if (io.sockets.adapter.rooms['room-' + roomNum].length === 3) {
      io.to('room-' + roomNum).emit('game-start', {
        description: '3 players in room. Game starting shortly.',
        quote: userCount['room-' + roomNum]['quote']
      });
    // }
  })


  //When receiving an update from a user, broadcast to all users in the room
  socket.on('progress-update', completion => {
    // console.log('What room is this', Object.keys(socket.rooms));
    io.to(Object.keys(socket.rooms)[1]).emit('progress-broadcast', {
      socketId: socket.id,
      roomId: socket.rooms[1],
      completion: completion
    });
  });

  socket.on('disconnecting', function() {
    const rooms = Object.keys(socket.rooms).slice();
    io.to(rooms[1]).emit('player-left', {
      description: `${socket.id} has left the game.`
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
