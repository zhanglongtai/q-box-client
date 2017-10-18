function account(state, action) {
    switch(action.type) {
        case 'INIT':
            return Object.assign({}, state, action.options.account)
        case 'CONFIRM':
            return Object.assign({}, state, action.options.accountTemp)
        default:
            return state
    }
}

function accountTemp(state, action) {
    switch(action.type) {
        case 'INIT':
            return Object.assign({}, state, action.options.accountTemp)
        case 'CANCEL':
            return Object.assign({}, state, action.options.account)
        default:
            return state
    }
}

export {
    account,
    accountTemp,
}
