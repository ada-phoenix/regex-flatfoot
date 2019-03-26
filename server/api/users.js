const router = require('express').Router()
const {User} = require('../db/models')
const Game = require('../db/models/game')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId)
    console.log(JSON.stringify(req.body))
    const {userInfo, previousGame} = req.body
    const {level, levelstage, clusterId} = userInfo

    const user = await User.findById(id)
    const updatedUser = await user.update(userInfo)

    const getGame = await Game.findOne({
      where: {
        ...previousGame
      }
    })

    await updatedUser.addGame(getGame)
    const games = await updatedUser.getGames({raw: true})

    const gameIdList = games.map(game => {
      return game.id
    })

    const userData = {
      clusterId: updatedUser.clusterId,
      email: updatedUser.email,
      name: updatedUser.name,
      level: updatedUser.level,
      levelstage: updatedUser.levelstage,
      id: updatedUser.id,
      gamesVisted: gameIdList,
      casefile: updatedUser.casefile
    }
    res.json(userData)
  } catch (err) {
    next(err)
  }
})

router.put('/reset/:userId', async (req, res, next) => {
  try {
    let id = parseInt(req.params.userId)

    const user = await User.findById(id)
    const updatedUser = await user.update(req.body)

    updatedUser.setGames([])

    const userData = {
      clusterId: updatedUser.clusterId,
      email: updatedUser.email,
      name: updatedUser.name,
      level: updatedUser.level,
      levelstage: updatedUser.levelstage,
      id: updatedUser.id,
      casefile: updatedUser.casefile
    }

    res.json(userData)
  } catch (err) {
    next(err)
  }
})
