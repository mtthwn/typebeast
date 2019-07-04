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
