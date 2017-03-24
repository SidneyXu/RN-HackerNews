import {
  createReducer,
  createActions
} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {
  Types,
  Creators
} = createActions({
  commentRequest: ['id'],
  commentSuccess: null,
  commentFailure: null,
  commentSetItems: ['items'],
  clearComments: null
})

export const CommentTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  items: {},
  fetching: null,
  error: null,
  fetchId: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, {
  id
}) => {
  return state.merge({
    fetching: true,
    fetchId: id
  })
}

export const clearComments = (state) => {
  return state.set('items', {})
}

// successful api lookup
export const success = (state) => {
  const newState = state.merge({
    fetching: false,
    error: null
  })
  return newState
}

// Something went wrong somewhere.
export const failure = state => {
  return state.merge({
    fetching: false,
    error: true
  })
}

export const setItems = (state, {
  items
}) => {
  const data = {}
  items.forEach(item => {
    if (item) {
      data[item.id] = item
    }
  })
  const newItems = state.items.merge(data);
  return state.set('items', newItems)
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COMMENT_REQUEST]: request,
  [Types.COMMENT_SUCCESS]: success,
  [Types.COMMENT_FAILURE]: failure,
  [Types.COMMENT_SET_ITEMS]: setItems,
  [Types.CLEAR_COMMENTS]: clearComments
})
