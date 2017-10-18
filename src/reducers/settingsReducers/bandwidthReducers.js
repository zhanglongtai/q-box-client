function bandwidth(state, action) {
    switch(action.type) {
        case 'INIT':
            return Object.assign({}, state, action.options.bandwidth)
        case 'CONFIRM':
            return Object.assign({}, state, action.options.bandwidthTemp)
        default:
            return state
    }
}

function bandwidthTemp(state, action) {
    switch(action.type) {
        case 'INIT':
            return Object.assign({}, state, action.options.bandwidthTemp)
        case 'SET_DOWNLOAD_LIMIT':
            return Object.assign({}, state, {
                downloadLimit: action.downloadLimit,
            })
        case 'SET_DOWNLOAD_LIMIT_SPEED':
            return Object.assign({}, state, {
                downloadLimitSpeed: action.downloadLimitSpeed,
            })
        case 'SET_UPLOAD_LIMIT':
            return Object.assign({}, state, {
                uploadLimit: action.uploadLimit,
            })
        case 'SET_UPLOAD_LIMIT_SPEED':
            return Object.assign({}, state, {
                uploadLimitSpeed: action.uploadLimitSpeed,
            })
        case 'CANCEL':
            return Object.assign({}, state, action.options.bandwidth)
        default:
            return state
    }
}

export {
    bandwidth,
    bandwidthTemp,
}
