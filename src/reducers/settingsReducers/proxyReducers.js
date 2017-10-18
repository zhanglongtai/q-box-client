function proxy(state, action) {
    switch(action.type) {
        case 'INIT':
            return Object.assign({}, state, action.options.proxy)
        case 'CONFIRM':
            return Object.assign({}, state, action.options.proxyTemp)
        default:
            return state
    }
}

function proxyTemp(state, action) {
    switch(action.type) {
        case 'INIT':
            return Object.assign({}, state, action.options.proxyTemp)
        case 'SET_OPTION':
            return Object.assign({}, state, {
                option: action.option,
            })
        case 'SET_PROTOCOL':
            return Object.assign({}, state, {
                protocol: action.protocol,
            })
        case 'CANCEL':
            return Object.assign({}, state, action.options.proxy)
        default:
            return state
    }
}

export {
    proxy,
    proxyTemp,
}
