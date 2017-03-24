import { call, put, select, fork, take } from 'redux-saga/effects'
import { path } from 'ramda'
import StoryActions, { getCounts, getActiveType, getIds } from '../Redux/StoryRedux'

import AppConfig from '../Config/AppConfig'

function getActiveIds(ids, counts) {
    return ids.slice(0, counts)
}

export function* listActiveItems(api) {
    try {
        const state = yield select()
        const { activeType, counts, lists } = state.stories
        const count = counts[activeType]
        const ids = lists[activeType]

        const newIds = getActiveIds(ids, count + AppConfig.pageSize)
        const items = yield newIds.map(id => {
            return call(api.getItem, id)
        })
        yield put(StoryActions.listSuccess(activeType, items))
    } catch (e) {
        console.log(e)
        yield put(StoryActions.listFailure())
    }
}

export function* listItems(api) {
    try {
        const state = yield select()
        const { activeType, counts } = state.stories
        const ids = yield call(api.listItems, activeType)

        yield put(StoryActions.setLists(activeType, ids))

        const newIds = getActiveIds(ids, AppConfig.pageSize)
        const items = yield newIds.map(id => {
            return call(api.getItem, id)
        })

        yield put(StoryActions.listSuccess(activeType, items))
    } catch (e) {
        console.log(e)
        yield put(StoryActions.listFailure())
    }
}