import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CommentRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.commentRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.commentSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.commentFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
