import { combineReducers } from "redux"
import { 
    general,
    generalTemp,
 } from "./generalReducers"
import {
    bandwidth,
    bandwidthTemp,
} from "./bandwidthReducers"
import {
    content,
    contentList,
    account,
    accountTemp,
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
