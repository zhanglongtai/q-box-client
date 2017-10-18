import settingsInitialState from "./settingsInitialState"
import {
    account,
    accountTemp,
} from "./accountReducers"
import {
    bandwidth,
    bandwidthTemp,
} from "./bandwidthReducers"
import {
    general,
    generalTemp,
} from "./generalReducers"
import {
    proxy,
    proxyTemp,
} from "./proxyReducers"
import {
    sync,
    syncTemp,
} from "./syncReducers"

function options(state = settingsInitialState.options, action) {
    return {
        account: account(state.account, action),
        accountTemp: accountTemp(state.accountTemp, action),
        bandwidth: bandwidth(state.bandwidth, action),
        bandwidthTemp: bandwidthTemp(state.bandwidthTemp, action),
        general: general(state.general, action),
        generalTemp: generalTemp(state.generalTemp, action),
        proxy: proxy(state.proxy, action),
        proxyTemp: proxyTemp(state.proxyTemp, action),
        sync: sync(state.sync, action),
        syncTemp: syncTemp(state.syncTemp, action),
    }
}

export default options
