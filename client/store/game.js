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
export const getGame = currLevel => async dispatch => {
  const {cluster, level, stage} = currLevel
  console.log(currLevel)
  console.log(`/api/game/${cluster}/${level}/${stage}`)
  const {data} = await axios.get(`/api/game/${cluster}/${level}/${stage}`)
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
