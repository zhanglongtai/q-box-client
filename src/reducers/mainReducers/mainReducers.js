import { combineReducers } from "redux"
import {
    content,
    website,
    folderPath,
} from "./otherReducers"
import recentActivity from "./activityReducer"
import inform from "./informReducer";

const mainReducers = combineReducers({
    content,
    website,
    folderPath,
    recentActivity,
    inform,
})

export default mainReducers
