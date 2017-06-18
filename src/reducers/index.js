import { combineReducers } from 'redux'
import body from './body'
import dialog from './dialog'

const appReducer = combineReducers({
    body,
    dialog
})

export default appReducer
