import {
  takeLatest
} from 'redux-saga'
// import API from '../Services/Api'
import DebugSettings from '../Config/DebugSettings'
import HackerApi from '../Services/Hacker'

/* ------------- Types ------------- */

import {
  StartupTypes
} from '../Redux/StartupRedux'
import {
  StoryTypes
} from '../Redux/StoryRedux'
import {
  UserTypes
} from '../Redux/UserRedux'
import {
  CommentTypes
} from '../Redux/CommentRedux'

/* ------------- Sagas ------------- */

import {
  startup
} from './StartupSagas'
import {
  openScreen
} from './OpenScreenSagas'

import {
  listItems,
  listActiveItems
} from './StorySagas'
import {
  getUser
} from './UserSagas'
import {
  getItemAndComments
} from './CommentSagas'

/* ------------- API ------------- */


/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  const hackerApi = HackerApi.create()

  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    // takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen),

    // some sagas receive extra parameters in addition to an action
    takeLatest(StoryTypes.LIST_REQUEST, listItems, hackerApi),
    takeLatest(StoryTypes.LOAD_MORE_REQUEST, listActiveItems, hackerApi),
    takeLatest(UserTypes.USER_REQUEST, getUser, hackerApi),
    takeLatest(CommentTypes.COMMENT_REQUEST, getItemAndComments, hackerApi)
  ]
}
