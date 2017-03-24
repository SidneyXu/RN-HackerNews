import {
  createReducer,
  createActions
} from 'reduxsauce'
import Immutable from 'seamless-immutable'
import {
  filter
} from 'ramda'
import {
  startsWith
} from 'ramdasauce'

const PAGE_SIZE = 15

import AppConfig from '../Config/AppConfig'

/* ------------- Types and Action Creators ------------- */

const {
  Types,
  Creators
} = createActions({
    listRequest: ['activeType', 'clearable'],
    listSuccess: ['activeType', 'items'],
    listFailure: null,
    setLists: ['activeType', 'ids'],
    loadMoreRequest: ['activeType'],
    loadMoreSuccess: ['items']
  })

export const StoryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  items: [],
  lists: {
    top: [],
    new: [],
    show: [],
    ask: [],
    job: []
  },
  fetching: false,
  error: null,
  activeType: 'top',
  counts: {
    top: 0,
    new: 0,
    show: 0,
    ask: 0,
    job: 0
  }
})

/* ------------- Reducers ------------- */

export const listRequest = (state, {
  activeType,
  clearable = false
}) => {
  const newState = state.merge({
    fetching: true,
    activeType
  })
  if (clearable) {
    return newState.merge({
      items: []
    })
  }
  return newState
}

export const listSuccess = (state, {
  activeType,
  items
}) => {
  const newState = state.merge({
    fetching: false,
    error: null,
    items
  }).setIn(['counts', activeType], items.length)
  return newState
}

export const listFailure = (state) => {
  return state.merge({
    fetching: false,
    error: true,
    items: []
  })
}

export const loadMoreRequest = (state, {
  activeType
}) => {
  const newState = state.merge({
    fetching: true,
    activeType
  })
  return newState
}

export const loadMoreSuccess = (state, {
  items
}) => {
  const newState = state.merge({
    fetching: false,
    error: null,
    items
  }).setIn(['counts', activeType], items.length)
  return newState
}

export const setLists = (state, {
  activeType,
  ids
}) => {
  const newState = state.setIn(['lists', activeType], ids)
  return newState
}

/* ------------- Selectors ------------- */
// export const getCounts = (state, activeType) => {
//     console.log('get count')
//     return state.stories.counts2[activeType];
// }

// export const getActiveType = (state) => {
//     return state.stories.activeType
// }

// export const getIds = (state, activeType) => {
//     return state.stories.lists[activeType]
// }


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_REQUEST]: listRequest,
  [Types.LIST_SUCCESS]: listSuccess,
  [Types.LIST_FAILURE]: listFailure,
  [Types.LOAD_MORE_REQUEST]: loadMoreRequest,
  [Types.LOAD_MORE_SUCCESS]: loadMoreSuccess,
  [Types.SET_LISTS]: setLists
})
