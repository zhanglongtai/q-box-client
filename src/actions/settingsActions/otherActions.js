function setContent(content) {
    return {
        type: 'SET_CONTENT',
        content: content,
    }
}

function cancelSettings(state) {
    return {
        type: 'CANCEL',
        state: state,
    }
}

function confirmSettings(state) {
    return {
        type: 'CONFIRM',
        state: state,
    }
}

export {
    setContent,
    cancelSettings,
    confirmSettings,
}
