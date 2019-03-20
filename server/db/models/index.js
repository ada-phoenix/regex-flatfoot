const User = require('./user')
const Game = require('./game')
const Cluster = require('./cluster')
const Boss = require('./boss')

Cluster.hasMany(Game)
Game.belongsTo(Cluster)

Boss.belongsTo(Cluster)

Game.belongsToMany(User, {through: 'Visited'})
User.belongsToMany(Game, {through: 'Visited'})

User.belongsToMany(User, {as: 'friend', through: 'Friendship'})

module.exports = {
  User,
  Game,
  Cluster
}
