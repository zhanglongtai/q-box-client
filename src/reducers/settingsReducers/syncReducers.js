function sync(state, action) {
    switch(action.type) {
        case 'INIT':
            return Object.assign({}, state, action.options.sync)
        case 'CONFIRM':
            return Object.assign({}, state, action.options.syncTemp)
        default:
            return state
    }
}

function syncTemp(state, action) {
    switch(action.type) {
        case 'INIT':
            return Object.assign({}, state, action.options.syncTemp)
        case 'CANCEL':
            return Object.assign({}, state, action.options.sync)
        default:
            return state
    }
}

export {
    sync,
    syncTemp,
}
