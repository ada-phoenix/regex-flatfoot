const router = require('express').Router()
const {Cluster, Boss} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const clusters = await Cluster.findAll()

    res.json(clusters)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const cluster = await Cluster.findOne({
      where: {id: req.params.id},
      include: [{model: Boss}]
    })
    res.json(cluster)
  } catch (err) {
    next(err)
  }
})
