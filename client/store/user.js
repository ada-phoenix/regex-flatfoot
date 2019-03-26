import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'
const UPDATED_USER = 'UPDATED_USER'
const USER_WAS_RESET = 'USER_WAS_RESET'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})
const updatedUser = user => ({type: UPDATED_USER, user})
const userWasReset = user => ({type: USER_WAS_RESET, user})

/**
 * THUNK CREATORS
 */

export const updateUser = (userId, updateData) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/${userId}`, updateData)
    dispatch(updatedUser(data))
  } catch (err) {
    console.log(err)
  }
}

export const resetUser = (userId, nextGame) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/users/reset/${userId}`, nextGame)
    dispatch(updatedUser(data))
  } catch (err) {
    console.log(err)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/question')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    case UPDATED_USER:
      return action.user
    case USER_WAS_RESET:
      return action.user
    default:
      return state
  }
}
