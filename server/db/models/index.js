const User = require('./user')
const Game = require('./game')
const Cluster = require('./cluster')

Cluster.hasMany(Game)
Game.belongsTo(Cluster)

module.exports = {
  User,
  Game,
  Cluster
}
