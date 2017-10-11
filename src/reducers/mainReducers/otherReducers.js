import mainInitialState from './mainInitialState';

function content(state = mainInitialState.content, action) {
    switch(action.type) {
        case 'SET_CONTENT':
            return action.content
        default:
            return state
    }
}

export {
    content,
}
