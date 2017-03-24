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

/* ------------- Types and Action Creators ------------- */

// action， argument name
// 注意不要使用 type，千万注意
const {
  Types,
    Creators
} = createActions({
        userRequest: ['id'],
        userSuccess: ['user'],
        userFailure: null,
    })

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    users: [],
    fetching: null,
    error: null,
    fetchId: null,
    user: null
})

/* ------------- Reducers ------------- */

export const userRequest = (state, {
  id
}) => {
    const newState = state.merge({
        fetching: true,
        fetchId: id
    })
    return newState
}

export const userSuccess = (state, {
  user
}) => {
    const users = {}
    users[user.id] = user
    const newState = state.merge({
        fetching: false,
        error: null,
        user,
        users
    })
    return newState
}

export const userFailure = (state) => {
    return state.merge({
        fetching: false,
        error: true
    })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_REQUEST]: userRequest,
    [Types.USER_SUCCESS]: userSuccess,
    [Types.USER_FAILURE]: userFailure
})
