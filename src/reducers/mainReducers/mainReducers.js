import { combineReducers } from 'redux'
import { content } from './otherReducers'

const mainReducers = combineReducers({
    content,
})

export default mainReducers
