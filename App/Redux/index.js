// @flow

import {
  combineReducers
} from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    stories: require('./StoryRedux').reducer,
    users: require('./UserRedux').reducer,
    comments: require('./CommentRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
