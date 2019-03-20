const Sequelize = require('sequelize')
const db = require('../db')

const Boss = db.define('boss', {
  haystack: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  needle: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  },
  question: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  correct: {
    type: Sequelize.TEXT
  },
  incorrect: {
    type: Sequelize.TEXT
  },
  timer: {
    type: Sequelize.INTEGER
  },
  story: {
    type: Sequelize.TEXT
  },
  picture: {
    type: Sequelize.STRING
  }
})

module.exports = Boss
