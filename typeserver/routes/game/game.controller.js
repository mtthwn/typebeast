const Game = require('../../db/model/Game');

function index(req, res) {
  res.send(200).json({ message: 'hello!' });
}

function addGame(req, res) {
  const { stats, playedAt } = req.body;

  new Game({ stats, playedAt }).save().then(savedGame => {
    res.send(200).json({ game: savedGame, message: 'game saved' });
  });
}

module.exports = {
  index,
  addGame
};
