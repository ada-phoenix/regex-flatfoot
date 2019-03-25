import axios from 'axios'

// INITIAL STATE
const defaultEffects = {caseFileBadgeInvisible: true}

// ACTION TYPES
const SET_CASEFILE_BADGE = 'SET_CASEFILE_BADGE'

// ACTION CREATORS
export const setCasefileBadge = boolean => ({
  type: SET_CASEFILE_BADGE,
  boolean
})

// THUNK CREATORS

// REDUCER
export default function(state = defaultEffects, action) {
  switch (action.type) {
    case SET_CASEFILE_BADGE: {
      return {...state, caseFileBadgeInvisible: action.boolean}
    }
    default:
      return state
  }
}
