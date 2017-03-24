// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const fetch = (api, path) => {
    return api.get(path)
        .then((resp)=>{
            if(resp.ok){
                return resp.data
            }
            throw new Error(resp.problem)
        })
}

const create = (baseURL = 'https://hacker-news.firebaseio.com/v0/') => {
    const api = apisauce.create({
        baseURL,
        timeout: 100000
    })

    // Wrap api's addMonitor to allow the calling code to attach
    // additional monitors in the future.  But only in __DEV__ and only
    // if we've attached Reactotron to console (it isn't during unit tests).
    if (__DEV__ && console.tron) {
        api.addMonitor(console.tron.apisauce)
    }

    const listItems = (activeType) => fetch(api, `${activeType}stories.json`)
    const getItem = (id) => fetch(api, `item/${id}.json`)
    const getUser = (id) => fetch(api, `user/${id}.json`)
    return {
        listItems,
        getItem,
        getUser
    }
}

export default {
    create
}