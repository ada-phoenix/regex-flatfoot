import axios from 'axios'

// INITIAL STATE
const defaultEffects = {
  caseFileBadgeInvisible: true,
  notes: [],
  hintVisibility: false,
  sound: true
}

// ACTION TYPES
const SET_CASEFILE_BADGE = 'SET_CASEFILE_BADGE'
const ADD_NOTE = 'ADD_NOTE'
const SET_HINT_VISIBILITY = 'SET_HINT_VISIBILITY'
const SET_SOUND = 'SET_SOUND'

// ACTION CREATORS
export const setCasefileBadge = boolean => ({
  type: SET_CASEFILE_BADGE,
  boolean
})

export const addNote = note => ({
  type: ADD_NOTE,
  note
})

export const setHintVisibility = boolean => ({
  type: SET_HINT_VISIBILITY,
  boolean
})

export const setSound = () => ({
  type: SET_SOUND
})

// THUNK CREATORS

// REDUCER
export default function(state = defaultEffects, action) {
  switch (action.type) {
    case SET_CASEFILE_BADGE:
      return {...state, caseFileBadgeInvisible: action.boolean}
    case ADD_NOTE:
      return {...state, notes: [...state.notes, action.note]}
    case SET_HINT_VISIBILITY:
      return {...state, hintVisibility: action.boolean}
    case SET_SOUND:
      return {...state, sound: !state.sound}
    default:
      return state
  }
}
