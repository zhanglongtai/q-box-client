function setLaunchAtLogin(bool) {
    return {
        type: 'SET_LAUNCH_AT_LOGIN',
        launchAtLogin: bool,
    }
}

export {
    setLaunchAtLogin,
}
