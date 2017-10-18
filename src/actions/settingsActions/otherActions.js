function setContent(content) {
    return {
        type: 'SET_CONTENT',
        content: content,
    }
}

function initSettings(options) {
    return {
        type: 'INIT',
        options: options,
    }
}

function cancelSettings(options) {
    return {
        type: 'CANCEL',
        options: options,
    }
}

function confirmSettings(options) {
    return {
        type: 'CONFIRM',
        options: options,
    }
}

export {
    setContent,
    initSettings,
    cancelSettings,
    confirmSettings,
}
