function setDownloadLimit(bool) {
    return {
        type: 'SET_DOWNLOAD_LIMIT',
        downloadLimit: bool,
    }
}

function setDownloadLimitSpeed(speed) {
    return {
        type: 'SET_DOWNLOAD_LIMIT_SPEED',
        downloadLimitSpeed: speed,
    }
}

function setUploadLimit(bool) {
    return {
        type: 'SET_UPLOAD_LIMIT',
        uploadLimit: bool,
    }
}

function setUploadLimitSpeed(speed) {
    return {
        type: 'SET_UPLOAD_LIMIT_SPEED',
        uploadLimitSpeed: speed,
    }
}

export {
    setDownloadLimit,
    setDownloadLimitSpeed,
    setUploadLimit,
    setUploadLimitSpeed,
}
