import { combineReducers } from 'redux'
import body from './body'
import dialog from './dialog'
import unit from './unit'

const appReducer = combineReducers({
    body,
    dialog,
    unit
})

export default appReducer
