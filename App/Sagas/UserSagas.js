import {
  call,
  put,
  select,
  fork,
  take
} from 'redux-saga/effects'
import {
  path
} from 'ramda'
import UserActions from '../Redux/UserRedux'

import AppConfig from '../Config/AppConfig'

export function* getUser(api) {
  try {
    const state = yield select()

    const fetchId = state.users.fetchId

    const user = yield call(api.getUser, fetchId)

    yield put(UserActions.userSuccess(user))
  } catch (e) {
    console.log(e)
    yield put(UserActions.userFailure())
  }
}
