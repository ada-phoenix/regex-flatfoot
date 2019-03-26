import axios from 'axios'

// INITIAL STATE
const defaultEffects = {
  caseFileBadgeInvisible: true,
  notes: []
}

// ACTION TYPES
const SET_CASEFILE_BADGE = 'SET_CASEFILE_BADGE'
const ADD_NOTE = 'ADD_NOTE'

// ACTION CREATORS
export const setCasefileBadge = boolean => ({
  type: SET_CASEFILE_BADGE,
  boolean
})

export const addNote = note => ({
  type: ADD_NOTE,
  note
})

// THUNK CREATORS

// REDUCER
export default function(state = defaultEffects, action) {
  switch (action.type) {
    case SET_CASEFILE_BADGE:
      return {...state, caseFileBadgeInvisible: action.boolean}
    case ADD_NOTE:
      return {...state, notes: [...state.notes, action.note]}
    default:
      return state
  }
}
