import settingsInitialState from "./settingsInitialState"

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



function account(state = settingsInitialState.account) {
    return state
}
function accountTemp(state = settingsInitialState.accountTemp) {
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
    account,
    accountTemp,
    sync,
    syncTemp,
}
