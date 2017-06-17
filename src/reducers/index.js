import { combineReducers } from 'redux'
import body from './body'

const appReducer = combineReducers({
    body,
    // visibilityFilter
})

export default appReducer
