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
    proxy,
    proxyTemp,
} from "./proxyReducers"
import {
    content,
    contentList,
    account,
    accountTemp,
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
