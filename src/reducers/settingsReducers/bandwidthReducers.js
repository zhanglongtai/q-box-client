import settingsInitialState from "./settingsInitialState"

function bandwidth(state = settingsInitialState.bandwidth) {
    return state
}

function bandwidthTemp(state = settingsInitialState.bandwidthTemp, action) {
    switch(action.type) {
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
        default:
            return state
    }
}

export {
    bandwidth,
    bandwidthTemp,
}
