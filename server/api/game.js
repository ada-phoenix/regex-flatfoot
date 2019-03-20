const router = require('express').Router()
const {Game} = require('../db/models')
module.exports = router

router.get('/:cluster/:level/:stage', async (req, res, next) => {
  try {
    console.log(
      'Req.params: cluster, level, stage',
      typeof req.params.cluster,
      typeof req.params.level,
      typeof req.params.stage
    )
    const level = parseInt(req.params.level)
    const levelstage = parseInt(req.params.stage)
    const clusterId = parseInt(req.params.cluster)

    const currLevel = await Game.findOne({
      where: {
        level,
        levelstage,
        clusterId
      }
    })
    if (currLevel) {
      res.send(currLevel)
    } else {
      const error = new Error("Can't find next level")
      next(error)
    }
  } catch (err) {
    next(err)
  }
})