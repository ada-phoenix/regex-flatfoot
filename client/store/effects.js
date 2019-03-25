import axios from 'axios'

// INITIAL STATE
const defaultEffects = {}

// ACTION TYPES
const SET_CASEFILE_BADGE = 'SET_CASEFILE_BADGE'

// ACTION CREATORS
const setCasefileBadge = visibility => ({
  type: SET_CASEFILE_BADGE,
  visibility
})

// THUNK CREATORS

// REDUCER
export default function(state = defaultEffects, action) {
  switch (action.type) {
    case SET_CASEFILE_BADGE: {
      return {...state, caseFileBadge: visibility}
    }
    default:
      return state
  }
}
