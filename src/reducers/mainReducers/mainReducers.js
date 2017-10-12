import { combineReducers } from 'redux'
import {
    content,
    website,
    folderPath,
} from './otherReducers'
import recentActivity from './activityReducer'

const mainReducers = combineReducers({
    content,
    website,
    folderPath,
    recentActivity,
})

export default mainReducers
