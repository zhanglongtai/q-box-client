function general(state, action) {
    switch(action.type) {
        case 'CONFIRM':
            return Object.assign({}, state, action.options.generalTemp)
        default:
            return state
    }
}

function generalTemp(state, action) {
    switch(action.type) {
        case 'SET_LAUNCH_AT_LOGIN':
            return Object.assign({}, state, {
                launchAtLogin: action.launchAtLogin,
            })
        case 'CANCEL':
            return Object.assign({}, state, action.options.general)
        default:
            return state
    }
}

export {
    general,
    generalTemp,
}
