const bcrypt = require('bcrypt');

const { mongoose, db } = require('./../config');
const Quote = require('./../model/Quote');
const Car = require('./../model/Car');
const Game = require('./../model/Game');
const User = require('./../model/User');

const seed = require('./quotes');
const cars = require('./cars');
const users = require('./users');

let counter = 0;

const collections = ['games', 'quotes', 'cars', 'users'];

// const users = [
//   {
//     username: 'Justin',
//     email: 'jskwok@gmail.com',
//     games: [],
//     password: bcrypt.hashSync('hello', 10)
//   },
//   {
//     username: 'Daniel',
//     email: 'dtran23@gmail.com',
//     games: [],
//     password: bcrypt.hashSync('goodbye', 10)
//   }
// ];

// const seed = [
//   {
//     author: 'Henry David Thoreau',
//     quote:
//       'Do not worry if you have built your castles in the air. They are where they should be. Now put the foundations under them.'
//   },
//   {
//     author: 'Lorii Myers',
//     quote:
//       'People rise to the occasion without hesitation when they feel inspired and challenged.'
//   },
//   {
//     author: 'Colin Powell',
//     quote:
//       'The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.'
//   },
//   {
//     quote: `I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile.`,
//     author: 'Helen Mirren'
//   },
//   {
//     quote: `When I have a bad day, I dream about opening up a gelato stand on the streets of Sydney, Australia. Doesn't everyone have a random escape fantasy?`,
//     author: 'Nancy Lublin'
//   },
//   {
//     quote:
//       'We can all fight against loneliness by engaging in random acts of kindness.',
//     author: 'Gail Honeyman'
//   },
//   {
//     quote: `When life offers you a dream so far beyond any of your expectations, it's not reasonable to grieve when it comes to an end.`,
//     author: 'Stephanie Meyer'
//   }
// ];

// const cars = [
//   {
//     model: 'Silvia S15',
//     make: 'Nissan',
//     spriteFile: 'https://i.imgur.com/a4hVyfy.png',
//     mediumImg: 'https://i.imgur.com/nJYJFty.png',
//     largeImg: 'https://i.imgur.com/Evae8Vc.png',
//     price: 10000,
//     maxSpeed: 170,
//     acceleration: 5.5
//   },
//   {
//     model: '935',
//     make: 'Porsche',
//     spriteFile: 'https://i.imgur.com/UBAaAZq.png',
//     mediumImg: 'https://i.imgur.com/8k3z73p.png',
//     largeImg: 'https://i.imgur.com/9CkPCCn.png',
//     price: 15000,
//     maxSpeed: 183,
//     acceleration: 5
//   },
//   {
//     model: 'Ford',
//     make: 'Mustang GT 67',
//     spriteFile: 'https://i.imgur.com/nlH4JEk.png',
//     mediumImg: 'https://i.imgur.com/7D2UQfN.png',
//     largeImg: 'https://i.imgur.com/kYmO4vg.png',
//     price: 5000,
//     maxSpeed: 150,
//     acceleration: 7
//   },
//   {
//     model: 'Horse',
//     make: 'Lil Nas X',
//     spriteFile: 'https://i.imgur.com/PhTiQyf.png',
//     mediumImg: 'https://i.imgur.com/Soc0Qx9.png',
//     largeImg: 'https://i.imgur.com/GKwJplQ.png',
//     price: 1000,
//     maxSpeed: 50,
//     acceleration: 3
//   },
//   {
//     model: 'McLaren',
//     make: 'P1',
//     spriteFile: 'https://i.imgur.com/HXrjtI3.png',
//     mediumImg: 'https://i.imgur.com/ZyFon8s.png',
//     largeImg: 'https://i.imgur.com/N5ZzKJU.png',
//     price: 2000,
//     maxSpeed: 200,
//     acceleration: 4.9
//   },
//   {
//     model: 'Model S',
//     make: 'Tesla',
//     spriteFile: 'https://i.imgur.com/3r9vmlE.png',
//     mediumImg: 'https://i.imgur.com/iZoD5SZ.png',
//     largeImg: 'https://i.imgur.com/h9qFaib.png',
//     price: 5000,
//     maxSpeed: 250,
//     acceleration: 3.2
//   }
// ];

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
