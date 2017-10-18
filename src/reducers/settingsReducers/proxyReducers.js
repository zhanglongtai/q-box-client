import settingsInitialState from "./settingsInitialState"

function proxy(state = settingsInitialState.proxy) {
    return state
}

function proxyTemp(state = settingsInitialState.proxyTemp, action) {
    switch(action.type) {
        case 'SET_OPTION':
            return Object.assign({}, state, {
                option: action.option,
            })
        case 'SET_PROTOCOL':
            return Object.assign({}, state, {
                protocol: action.protocol,
            })
        default:
            return state
    }
}

export {
    proxy,
    proxyTemp,
}
