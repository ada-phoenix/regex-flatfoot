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
    let id = parseInt(req.params.userId)
    let {level, levelstage, clusterId, casefile} = req.body

    const user = await User.findById(id)

    // const updatedInfo = clue
    //   ? {
    //       level,
    //       levelstage,
    //       clusterId,
    //       casefile: [...user.casefile, clue]
    //     }
    //   : {
    //       level,
    //       levelstage,
    //       clusterId
    //     }

    const updatedUser = await user.update(req.body)

    const getGame = await Game.findOne({
      where: {
        level,
        levelstage,
        clusterId
      }
    })

    await updatedUser.addGame(getGame)

    const gamesVisted = await updatedUser.getGames({raw: true})

    const userData = {
      clusterId: updatedUser.clusterId,
      email: updatedUser.email,
      name: updatedUser.name,
      level: updatedUser.level,
      levelstage: updatedUser.levelstage,
      id: updatedUser.id,
      gamesVisted,
      casefile: updatedUser.casefile
    }
    res.json(userData)
  } catch (err) {
    next(err)
  }
})
