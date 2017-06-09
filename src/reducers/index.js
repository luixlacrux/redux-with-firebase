import { combineReducers } from 'redux'
import { inviteReducer as invite } from './invite'

const rootReducer = combineReducers({
  invite,
})

export default rootReducer
