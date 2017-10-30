const path = require("path")

const projectRoot = path.join(__dirname, '..')

function getDistRoot() {
    return path.join(projectRoot, 'dist')
}

function getDistPath(platform, arch) {
    return path.join(
        getDistRoot(),
        `${getExecutableName()}-${platform}-${arch}`
    )
}

function getWindowsIdentifierName() {
    return 'QBox'
}

function getCompanyName() {
    return 'Tekbone'
}

function getExecutableName() {
    return `QBox`
}

function getWindowsInstallerName() {
    const productName = getExecutableName()
    return `${productName}Setup.msi`
}

function getWindowsStandaloneName() {
    const productName = getExecutableName()
    return `${productName}Setup.exe`
}

module.exports = {
    getCompanyName,
    getDistPath,
    getDistRoot,
    getExecutableName,
    getWindowsIdentifierName,
    getWindowsInstallerName,
    getWindowsStandaloneName,
}
