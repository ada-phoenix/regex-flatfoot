import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_GAME = 'GOT_GAME'

/**
 * INITIAL STATE
 */
const defaultGame = {}

/**
 * ACTION CREATORS
 */
const gotGame = game => ({
  type: GOT_GAME,
  game
})

/**
 * THUNK CREATORS
 */
export const getGame = currGame => async dispatch => {
  const {clusterId, level, stage} = currGame
  const {data} = await axios.get(`/api/game/${clusterId}/${level}/${stage}`)
  dispatch(gotGame(data))
}

/**
 * REDUCER
 */
export default function(state = defaultGame, action) {
  switch (action.type) {
    case GOT_GAME: {
      return action.game
    }
    default:
      return state
  }
}
