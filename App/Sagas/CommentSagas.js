/* ***********************************************************
 * A short word on how to use this automagically generated file.
 * We're often asked in the ignite gitter channel how to connect
 * to a to a third party api, so we thought we'd demonstrate - but
 * you should know you can use sagas for other flow control too.
 *
 * Other points:
 *  - You'll need to add this saga to Sagas/index.js
 *  - This template uses the api declared in Sagas/index.js, so
 *    you'll need to define a constant in that file.
 *************************************************************/

import {
  call,
  put,
  select,
  fork
} from 'redux-saga/effects'
import CommentActions from '../Redux/CommentRedux'

export function* getItemAndComments(api) {
  try {
    const state = yield select()
    const id = state.comments.fetchId

    const item = yield call(api.getItem, id)

    yield put(CommentActions.commentSetItems([item]))

    const holder = []
    yield call(fetchComments, api, item, holder)
    yield put(CommentActions.commentSetItems(holder))

    yield put(CommentActions.commentSuccess())
  } catch (e) {
    console.log(e)
    yield put(CommentActions.commentFailure())
  }
}

function* fetchComments(api, item, holder) {
  if (item && item.kids) {
    const subItems = yield item.kids.map(id => {
      return call(api.getItem, id)
    })

    for (i in subItems) {
      holder.push(subItems[i])
      yield call(fetchComments, api, subItems[i], holder)
    }
  }
}
