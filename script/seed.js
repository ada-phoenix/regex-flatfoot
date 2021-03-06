'use strict'

const db = require('../server/db')
const {User, Cluster, Game, Boss} = require('../server/db/models')
const clusterData = require('./clusterData')
const gameData = require('./gameData')
const bossData = require('./bossData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Cluster.bulkCreate(clusterData)
  await Boss.bulkCreate(bossData)
  await Game.bulkCreate(gameData)

  await User.bulkCreate([
    {name: 'cody', email: 'cody@email.com', password: '123'},
    {name: 'murphy', email: 'murphy@email.com', password: '123'}
  ])

  const cody = await User.findByPk(1)
  const murphy = await User.findByPk(2)
  const ourGame = await Game.findByPk(1)

  await cody.setGames(ourGame)
  await murphy.setGames(ourGame)

  // console.log(`seeded ${games.length} games`)
  // console.log(`seeded ${clusters.length} clusters`)
  // console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
