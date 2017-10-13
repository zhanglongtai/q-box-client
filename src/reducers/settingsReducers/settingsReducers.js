import { combineReducers } from "redux"
import {
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
