const bcrypt = require('bcrypt');

const { mongoose, db } = require('./../config');
const Quote = require('./../model/Quote');
const Car = require('./../model/Car');
const Game = require('./../model/Game');
const User = require('./../model/User');

const seed = require('./quotes');

let counter = 0;

const collections = ['games', 'quotes', 'cars', 'users'];

const users = [
  {
    username: 'Justin',
    email: 'jskwok@gmail.com',
    games: [],
    password: bcrypt.hashSync('hello', 10)
  },
  {
    username: 'Daniel',
    email: 'dtran23@gmail.com',
    games: [],
    password: bcrypt.hashSync('goodbye', 10)
  }
];


const cars = [
  {
    model: 'Silvia S15',
    make: 'Nissan',
    spriteFile: 'https://i.imgur.com/a4hVyfy.png',
    mediumImg: 'https://i.imgur.com/nJYJFty.png',
    largeImg: 'https://i.imgur.com/Evae8Vc.png',
    price: 5000,
    maxSpeed: 170,
    acceleration: 5.5
  },
  {
    model: '935',
    make: 'Porsche',
    spriteFile: 'https://i.imgur.com/UBAaAZq.png',
    mediumImg: 'https://i.imgur.com/8k3z73p.png',
    largeImg: 'https://i.imgur.com/9CkPCCn.png',
    price: 5000,
    maxSpeed: 183,
    acceleration: 5
  },
  {
    model: 'Chillvia',
    make: 'Nissan',
    spriteFile: 'https://i.imgur.com/a4hVyfy.png',
    mediumImg: 'https://i.imgur.com/nJYJFty.png',
    largeImg: 'https://i.imgur.com/Evae8Vc.png',
    price: 5000,
    maxSpeed: 150,
    acceleration: 7
  },
  {
    model: 'Horse',
    make: 'Lil Nas X',
    spriteFile: 'https://i.imgur.com/UBAaAZq.png',
    mediumImg: 'https://i.imgur.com/8k3z73p.png',
    largeImg: 'https://i.imgur.com/9CkPCCn.png',
    price: 5000,
    maxSpeed: 50,
    acceleration: 3
  },
  {
    model: 'Not-Civic',
    make: 'Honda',
    spriteFile: 'https://i.imgur.com/a4hVyfy.png',
    mediumImg: 'https://i.imgur.com/nJYJFty.png',
    largeImg: 'https://i.imgur.com/Evae8Vc.png',
    price: 5000,
    maxSpeed: 170,
    acceleration: 6.9
  },
  {
    model: 'Model S',
    make: 'Tesla',
    spriteFile: 'https://i.imgur.com/UBAaAZq.png',
    mediumImg: 'https://i.imgur.com/8k3z73p.png',
    largeImg: 'https://i.imgur.com/9CkPCCn.png',
    price: 5000,
    maxSpeed: 250,
    acceleration: 3.2
  }
];

const seedQuotes = async quotes => {
  collections.forEach(collection => {
    db.dropCollection(collection, (err, result) => {
      if (err) {
        console.log('Error occured while dropping collection');
      } else {
        console.log(`Deleted ${collection} collection`);
      }
    });
  });

  await Promise.all(
    quotes.map(quote => {
      return new Quote(quote)
        .save()
        .then(async savedQuote => {
          const sampleGame = new Game({
            quote: savedQuote._id,
            socketId: `room-${counter++}`
          });

          await sampleGame.save().catch(e => console.log(e.message));
        })
        .catch(e => console.log(`Quote not saved`));
    })
  );

  await Promise.all(
    cars.map(car => {
      return new Car(car)
        .save()
        .catch(e => console.log(`Car not saved: ${e.message}`));
    })
  );

  await Promise.all(
    users.map(user => {
      return new User(user)
        .save()
        .catch(e => console.log(`User not saved: ${e.message}`));
    })
  );

  process.exit();
};

module.exports = seedQuotes(seed);
