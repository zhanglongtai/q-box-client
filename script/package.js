// import * as fs from "fs-extra"
// const cp = require("child_process")
const path = require("path")
// import * as commander from "commander"
const readline = require('readline')
const electronInstaller = require('electron-winstaller')
const {
    getCompanyName,
    getDistPath,
    getExecutableName,
    getWindowsIdentifierName,
    getWindowsInstallerName,
    getWindowsStandaloneName,
} = require("./dist-config")

function log() {
    console.log.apply(null, arguments)
}

function packageWindows(platform, arch) {
    const nugetPkgName = getWindowsIdentifierName()
    const distPath = getDistPath(platform, arch)
    const outputDir = path.join(distPath, '..', 'installer')
    const iconSource = path.join(
        __dirname,
        '..',
        'renderer',
        'icon',
        'qbox.ico'
    )
    const splashScreenPath = path.resolve(
        __dirname,
        '../renderer/icon/win32-installer-splash.gif'
    )

    const options = {
        name: nugetPkgName,
        appDirectory: distPath,
        outputDirectory: outputDir,
        authors: getCompanyName(),
        setupIcon: iconSource,
        loadingGif: splashScreenPath,
        exe: `${nugetPkgName}.exe`,
        title: getExecutableName(),
        setupExe: getWindowsStandaloneName(),
        setupMsi: getWindowsInstallerName(),
    }

    electronInstaller
        .createWindowsInstaller(options)
        .then(() => {
            log(`Installers created in ${outputDir}`)
            // cp.execSync(`powershell ${cleanupCertificatePath}`)
            process.exit()
        })
        .catch(e => {
            // cp.execSync(`powershell ${cleanupCertificatePath}`)
            console.error(`Error packaging: ${e}`)
            process.exit(1)
        })
}

function packageOSX() {
    log(`package OSX`)
    process.exit()
}

function startCliUI() {
    function* inputArgs(readline) {
        function setPlatform() {
            log('specify package platform (type number of corresponding options):\n')
            log('[1] win32\n')
            log('[2] darwin\n')
            log('[3] linux\n')
        }
    
        function setArch() {
            log('\n')
            log('specify package arch (type number of corresponding options):\n')
            log('[1] ia32\n')
            log('[2] x64\n')
            log('[3] armv7l\n')
            log('[4] arm64\n')
        }
    
        function end() {
            log('\n')
            log('Press Enter to begin packaging\n')
        }
    
        setPlatform()
        readline.setPrompt('Type a number: ')
        yield readline.prompt()
        
        setArch()
        readline.setPrompt('Type a number: ')
        yield readline.prompt()
    
        end()
        readline.setPrompt('Press Enter: ')
        yield readline.prompt()
    
        return
    }

    const argsTable = {
        platform: ['win32', 'darwin', 'linux'],
        arch: ['ia32', 'x64', 'armv7l', 'arm64'],
        func: [packageWindows, packageOSX],
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    const r = inputArgs(rl)
    const argsList = []

    r.next()
    rl.on('line', (input) => {
        const tables = '123456789'
        if (tables.includes(input) && input !== '') {
            const n = parseInt(input) - 1
            argsList.push(n)
        }
    
        const done = r.next().done
        if (done) {
            const platform = argsTable.platform[argsList[0]]
            const arch = argsTable.arch[argsList[1]]
            const p = argsTable.func[argsList[0]]
            p(platform, arch)
        }
    })
}

function __main() {
    startCliUI()
} 

__main()
