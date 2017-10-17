function setOption(option) {
    return {
        type: 'SET_OPTION',
        option: option,
    }
}

function setProtocol(protocol) {
    return {
        type: 'SET_PROTOCOL',
        protocol: protocol,
    }
}

export {
    setOption,
    setProtocol,
}
