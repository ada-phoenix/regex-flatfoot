const Sequelize = require('sequelize')
const db = require('../db')

const Cluster = db.define('cluster', {
  name: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['Gumshoe', 'Rookie', 'DetectEx']]
    }
  },
  correctlocation: {
    type: Sequelize.STRING
  },
  locations: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Cluster
