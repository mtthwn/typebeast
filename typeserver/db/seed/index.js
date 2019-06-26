const { mongoose } = require('./../config')
const Quote = require('./../model/Quote');

const seed = [
  {
    author: 'Henry David Thoreau',
    quote:
      'Do not worry if you have built your castles in the air. They are where they should be. Now put the foundations under them.'
  },
  {
    author: 'Lorii Myers',
    quote:
      'People rise to the occasion without hesitation when they feel inspired and challenged.'
  },
  {
    author: 'Colin Powell',
    quote:
      'The day soldiers stop bringing you their problems is the day you have stopped leading them. They have either lost confidence that you can help them or concluded that you do not care. Either case is a failure of leadership.'
  },
  {
    quote:
      "I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile.",
    author: 'Helen Mirren'
  }
];

const seedData = quotes => {
  quotes.forEach(quote => {
    new Quote(quote)
      .save()
      .then(savedQuote => {
        console.log(`Quote saved!`);
      })
      .catch(e =>
        console.log('error occured when saving the quote', e.message)
      );
  });

  return;
};

module.exports = seedData(seed);
