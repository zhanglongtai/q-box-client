const fs = require("fs-extra")
const cp = require("child_process")
const path = require("path")
const os = require("os")

const appFolder = function() {
    return path.resolve(process.execPath, '..')
}

const rootAppDir = function() {
    return path.resolve(appFolder(), '..')
}

const updateDotExe = function() {
    return path.resolve(path.join(rootAppDir(), 'Update.exe'))
}

const exeName = function() {
    return path.basename(process.execPath)
}

// function handleSquirrelEvent(eventName) {
//     switch (eventName) {
//         case '--squirrel-install':
//             return handleInstalled()
  
//         case '--squirrel-updated':
//             return handleUpdated()
  
//         case '--squirrel-uninstall':
//             return handleUninstall()
  
//         case '--squirrel-obsolete':
//             return Promise.resolve()
//     }
  
//     return null
// }

// async function handleInstalled() {
//     await createShortcut()
// }

// async function handleUpdated() {
//     await updateShortcut()
// }

// async function handleUninstall() {
//     await removeShortcut()
  
//     const paths = await getPathSegments()
//     const binPath = getBinPath()
//     const pathsWithoutBinPath = paths.filter((p) => {
//         return p !== binPath
//     })
//     return setPathSegments(pathsWithoutBinPath)
// }

// async function spawnSquirrelUpdate(commands) {
//     await spawn(updateDoteExe(), commands)
// }

// function createShortcut(locations) {
//     return spawnSquirrelUpdate([
//         '--createShortcut',
//         exeName(),
//         '-l',
//         locations.join(','),
//     ])
// }

// async function updateShortcut() {
//     const homeDirectory = os.homedir()
//     if (homeDirectory) {
//         const desktopShortcutPath = path.join(
//             homeDirectory,
//             'Desktop',
//             'GitHub Desktop.lnk'
//         )
//         const exists = await pathExists(desktopShortcutPath)
//         const locations = exists
//             ? ['StartMenu', 'Desktop']
//             : ['StartMenu']
//         return createShortcut(locations)
//     } else {
//         return createShortcut(['StartMenu', 'Desktop'])
//     }
// }

// function removeShortcut() {
//     return spawnSquirrelUpdate(['--removeShortcut', exeName()])
// }

// /** Get the path segments in the user's `Path`. */
// async function getPathSegments() {
//     let powershellPath
//     const systemRoot = process.env['SystemRoot']
//     if (systemRoot) {
//         const system32Path = path.join(process.env.SystemRoot, 'System32')
//         powershellPath = path.join(
//             system32Path,
//             'WindowsPowerShell',
//             'v1.0',
//             'powershell.exe'
//         )
//     } else {
//         powershellPath = 'powershell.exe'
//     }
  
//     const args = [
//         '-noprofile',
//         '-ExecutionPolicy',
//         'RemoteSigned',
//         '-command',
//         // Set encoding and execute the command, capture the output, and return it
//         // via .NET's console in order to have consistent UTF-8 encoding.
//         // See http://stackoverflow.com/questions/22349139/utf-8-output-from-powershell
//         // to address https://github.com/atom/atom/issues/5063
//         `
//             [Console]::OutputEncoding=[System.Text.Encoding]::UTF8
//             $output=[environment]::GetEnvironmentVariable('Path', 'User')
//             [Console]::WriteLine($output)
//         `,
//     ]
  
//     const stdout = await spawn(powershellPath, args)
//     const pathOutput = stdout.replace(/^\s+|\s+$/g, '')
//     return pathOutput.split(/;+/).filter((segment) => {
//         return segment.length
//     })
// }

// /** Set the user's `Path`. */
// async function setPathSegments(paths) {
//     let setxPath
//     const systemRoot = process.env['SystemRoot']
//     if (systemRoot) {
//         const system32Path = Path.join(systemRoot, 'System32')
//         setxPath = Path.join(system32Path, 'setx.exe')
//     } else {
//         setxPath = 'setx.exe'
//     }
  
//     await spawn(setxPath, ['Path', paths.join(';')])
// }

// function spawn(command, args) {
//     try {
//         const child = cp.spawn(command, args)
//         return new Promise((resolve, reject) => {
//             let stdout = ''
//             child.stdout.on('data', (data) => {
//                 stdout += data
//             })
  
//             child.on('close', (code) => {
//                 if (code === 0) {
//                     resolve(stdout)
//                 } else {
//                     reject(new Error(`Command "${command} ${args}" failed: "${stdout}"`))
//                 }
//             })
  
//             child.on('error', (err) => {
//                 reject(err)
//             })
  
//             // This is necessary if using Powershell 2 on Windows 7 to get the events
//             // to raise.
//             // See http://stackoverflow.com/questions/9155289/calling-powershell-from-nodejs
//             child.stdin.end()
//         })
//     } catch (error) {
//         return Promise.reject(error)
//     }
// }

// function pathExists(path) {
//     return new Promise ((resolve, reject) => {
//         fs.stat(path, (error, stats) => {
//             if (error) {
//                 resolve(false)
//             } else {
//                 resolve(true)
//             }
//         })
//     })
// }

// https://github.com/electron/windows-installer
function handleSquirrelEvent(app, event) {
    const spawn = function(command, args, done) {
        try {
            cp.spawn(command, args, {detached: true}).on('close', done)
        } catch (error) {
            console.log(error)
        }
    }

    const spawnSquirrel = function(args, done) {
        return spawn(updateDotExe(), args, done);
    }

    const squirrelEvent = event
    switch(squirrelEvent) {
        case '--squirrel-install':
        case '--squirrel-updated':
            spawnSquirrel(['--createShortcut', exeName()], app.quit)
            break
        case '--squirrel-uninstall':
            spawnSquirrel(['--removeShortcut', exeName()], app.quit)
            break
        case '--squirrel-obsolete':
            app.quit()
            break
    }
}

module.exports = {
    handleSquirrelEvent: handleSquirrelEvent,
}
