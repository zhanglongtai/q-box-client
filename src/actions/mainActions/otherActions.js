function setContent(content) {
    return {
        type: 'SET_CONTENT',
        content: content,
    }
}

function setSync(bool) {
    return {
        type: 'SET_SYNC',
        sync: bool,
    }
}

export {
    setContent,
    setSync,
}
