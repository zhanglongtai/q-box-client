import settingsInitialState from "./settingsInitialState"

function general(state = settingsInitialState.general) {
    return state
}

function generalTemp(state = settingsInitialState.generalTemp, action) {
    switch(action.type) {
        case 'SET_LAUNCH_AT_LOGIN':
            return Object.assign({}, state, {
                launchAtLogin: action.launchAtLogin,
            })
        default:
            return state
    }
}

export {
    general,
    generalTemp,
}
