const path = require("path")
// const cp = require("child_process")
const readline = require('readline')
const packager = require("electron-packager")
const {
    getCompanyName,
    getDistRoot,
    getExecutableName,
} = require("./dist-config")

function log() {
    console.log.apply(null, arguments)
}

function packageWindows(arch, asar) {
    const iconSource = path.join(
        __dirname,
        '..',
        'renderer',
        'icon',
        'qbox.ico'
    )
    const projectRoot = path.join(__dirname, '..')

    const options = {
        name: getExecutableName(),
        platform: 'win32',
        arch: arch,
        asar: asar, // TODO: Probably wanna enable this down the road.
        out: getDistRoot(),
        icon: iconSource,
        dir: projectRoot,
        overwrite: true,
        tmpdir: false,
        derefSymlinks: false,
        prune: false, // We'll prune them ourselves below.
        ignore: [
            new RegExp('/node_modules/electron($|/)'),
            new RegExp('/node_modules/electron-packager($|/)'),
            new RegExp('/\\.git($|/)'),
            new RegExp('/node_modules/\\.bin($|/)'),
        ],
        appCopyright: `Copyright © 2017 ${getCompanyName()}, Inc.`,
        win32metadata: {
            CompanyName: getCompanyName(),
            FileDescription: '',
            OriginalFilename: '',
            ProductName: getExecutableName(),
            InternalName: getExecutableName(),
        },
    }

    packager(options, (err, appPaths) => {
        if (err) {
            console.error(err)
            process.exit(1)
        } else {
            log(`Built to ${appPaths}`)
            process.exit()
        }
    })
}

function packageOSX(arch, asar) {
    log('package OSX')
}

function startCliUI() {
    function* inputArgs(readline) {
        function setPlatform() {
            log('specify build platform (type number of corresponding options):\n')
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

        function setAsar() {
            log('\n')
            log('enable asar (type number of corresponding options):\n')
            log('[1] Yes\n')
            log('[2] No\n')
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

        setAsar()
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
        asar: [true, false],
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
            const arch = argsTable.arch[argsList[1]]
            const asar = argsTable.asar[argsList[2]]
            const p = argsTable.func[argsList[0]]
            log('\n')
            log('Begin to build ...\n')
            log('\n')
            p(arch, asar)
        }
    })
}

function __main() {
    startCliUI()
}

__main()
