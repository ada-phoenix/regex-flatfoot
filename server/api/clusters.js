const router = require('express').Router()
const {Cluster} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const cluster = await Cluster.findOne({
      where: {id: req.params.id}
    })
    res.json(cluster)
  } catch (err) {
    next(err)
  }
})
