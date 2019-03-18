const Sequelize = require('sequelize')
const db = require('../db')

const Game = db.define('game', {
  haystack: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  needle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  lesson: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  levelstage: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  hint: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  played: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  clue: {
    type: Sequelize.STRING
  }
})

module.exports = Game
