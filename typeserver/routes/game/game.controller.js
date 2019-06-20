const Game = require('../../model/Game');

function index(req, res) {
  Game.find({}).then(games => res.status(200).json({ games }));
}

function addGame(req, res) {
  const { stats, playedAt } = req.body;

  new Game({ stats, playedAt }).save().then(game => {
    res.status.json({ game });
  });
}

module.exports = {
  index,
  addGame
};
