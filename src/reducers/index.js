import { combineReducers } from 'redux'
import app from './app'
import body from './body'
import dialog from './dialog'
import unit from './unit'

const appReducer = combineReducers({
	app,
    body,
    dialog,
    unit
})

export default appReducer
