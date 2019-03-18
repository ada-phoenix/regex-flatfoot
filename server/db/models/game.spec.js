/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Game = db.model('game')

describe('Game model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Validations', () => {
    it('requires `haystack`', async () => {
      const game = Game.build()

      try {
        await game.validate()
        throw Error(
          'validation was successful but should have failed without `haystack`'
        )
      } catch (err) {
        expect(err.message).to.contain('haystack cannot be null')
      }
    })
  })
})
