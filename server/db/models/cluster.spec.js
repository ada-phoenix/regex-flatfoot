/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Cluster = db.model('cluster')

describe('Cluster model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Validations', () => {
    it('name must be either Gumshoe, Rookie, or DetectEx', async () => {
      const cluster = Cluster.build({name: 'flat-foot'})

      try {
        await cluster.validate()
        throw Error(
          'validation was successful but should have failed without the correct `name`'
        )
      } catch (err) {
        expect(err.message).to.contain('Validation isIn on name failed')
      }
    })
  })
})
