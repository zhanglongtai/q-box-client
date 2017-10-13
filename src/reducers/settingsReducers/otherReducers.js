import settingsInitialState from './settingsInitialState';

function content(state = settingsInitialState.content, action) {
    switch(action.type) {
        case 'SET_CONTENT':
            return action.content
        default:
            return state
    }
}

function contentList(state = settingsInitialState.contentList) {
    return state
}

function general(state = settingsInitialState.general) {
    return state
}
function generalTemp(state = settingsInitialState.generalTemp) {
    return state
}

function account(state = settingsInitialState.account) {
    return state
}
function accountTemp(state = settingsInitialState.accountTemp) {
    return state
}

function bandwidth(state = settingsInitialState.bandwidth) {
    return state
}
function bandwidthTemp(state = settingsInitialState.bandwidthTemp) {
    return state
}

function proxy(state = settingsInitialState.proxy) {
    return state
}
function proxyTemp(state = settingsInitialState.proxyTemp) {
    return state
}

function sync(state = settingsInitialState.sync) {
    return state
}
function syncTemp(state = settingsInitialState.syncTemp) {
    return state
}

export {
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
}
