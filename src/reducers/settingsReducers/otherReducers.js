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

export {
    content,
    contentList,
}
