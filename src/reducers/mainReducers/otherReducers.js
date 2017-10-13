import mainInitialState from "./mainInitialState"

function content(state = mainInitialState.content, action) {
    switch(action.type) {
        case 'SET_CONTENT':
            return action.content
        default:
            return state
    }
}

function website(state = mainInitialState.website) {
    return state
}

function folderPath(state = mainInitialState.folderPath) {
    return state
}

function sync(state = mainInitialState.sync, action) {
    switch(action.type) {
        case 'SET_SYNC':
            return action.sync
        default:
            return state
    }
}

export {
    content,
    website,
    folderPath,
    sync,
}
