// const {
// 	app,
// 	Menu,
// 	BrowserWindow,
// 	dialog,
// 	Tray,
// 	ipcMain,
// 	shell,
// } = require('electron')
import {
	app,
	Menu,
	BrowserWindow,
	Tray,
	ipcMain,
	shell,
} from 'electron'
import Position from 'electron-positioner'
import fs from 'fs'

let reactDevtool = null
switch (process.platform) {
	case 'linux':
		reactDevtool = '/home/tiger/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.3.3_0'
		break
	case 'win32':
	    reactDevtool = 'C:\\Users\\Tiger\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\2.5.0_0'
        break
}

const ENV = 'dev'
// const ENV = 'pro'

// win pool for client
let winMainWin = null

function createMainWin() {
	const options = {
		width: 400,
		height: 600,
		show: false,
		frame: false,
	}

	winMainWin = new BrowserWindow(options)

	if (ENV === 'dev') {
        winMainWin.webContents.openDevTools()
    }

	mainWinPosition = new Position(winMainWin)

	winMainWin.on('blur', () => {
		hideMainWin()
	})

	winMainWin.loadURL(`file://${__dirname}/renderer/infoBar.html`)
}

function showInfoBar() {
    const trayPos = tray.getBounds()

    console.log(trayPos)

    const windowPosition = (process.platform === 'win32') ? 'bottomRight' : 'topRight'
    // const windowPosition = (process.platform === 'win32') ? 'trayBottomCenter' : 'trayCenter';

	const position = infoBarPosition.calculate(windowPosition, trayPos)

	const x = position.x
	const y = position.y

	winMainWin.setPosition(x, y)
	winMainWin.show()
}

function hideInfoBar() {
	if (winMainWin !== null) {
		if (tray !== null) {
			tray.setHighlightMode('never')
		}

		winMainWin.hide()
	}
}
