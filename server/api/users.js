const router = require('express').Router()
const {User} = require('../db/models')
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
    let {level, levelstage, clusterId} = req.body
    console.log('level clusterId ', level, clusterId)
    const user = await User.findById(id)
    const updatedUser = await user.update({
      level,
      levelstage,
      clusterId
    })
    res.json(updatedUser)
  } catch (err) {
    next(err)
  }
})
