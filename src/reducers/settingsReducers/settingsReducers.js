import { combineReducers } from "redux"
import options from "./optionsReducers";
import {
    content,
    contentList,
} from "./otherReducers"

const settingsReducers = combineReducers({
    content,
    contentList,
    options,
})

export default settingsReducers
