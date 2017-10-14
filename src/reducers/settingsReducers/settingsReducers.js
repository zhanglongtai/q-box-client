import { combineReducers } from "redux"
import { 
    general,
    generalTemp,
 } from "./generalReducers"
import {
    content,
    contentList,
    account,
    accountTemp,
    bandwidth,
    bandwidthTemp,
    proxy,
    proxyTemp,
    sync,
    syncTemp,
} from "./otherReducers"

const settingsReducers = combineReducers({
    content,
    contentList,
    general,
    generalTemp,
    account,
    accountTemp,
    bandwidth,
    bandwidthTemp,
    proxy,
    proxyTemp,
    sync,
    syncTemp,
})

export default settingsReducers
