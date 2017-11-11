import { create } from 'domain';

const {
	app,
	Menu,
	BrowserWindow,
	webContents,
	dialog,
	Tray,
	ipcMain,
	shell,
} = require('electron')
const Position = require('electron-positioner')
const fs = require('fs')
const drivelist = require('drivelist')

const sh = require("./main/squirrelHander.js")
const userStore = require("./main/store/userStore")

let reactDevtool = null
switch (process.platform) {
	case 'linux':
		reactDevtool = '/home/tiger/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/2.3.3_0'
		break
	case 'win32':
		reactDevtool = 'C:\\Users\\Tiger\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\2.5.2_0'
		break
}

// win pool for client
const win = {
    winLogin: null,
	winMain: null,
	winSettings: null,
	winFolderPanel: null,
}

// app config
const config = {
	installing: false,
	iconPath: '',
	trayPath: `${__dirname}/renderer/icon/tray.png`,
	folderPath: 'C:\\Users\\Tiger\\Dropbox\\',
	upgradeURL: 'www.baidu.com',
	settingsFile: `${__dirname}/renderer/settings.json`,
	environment: 'dev', // 'dev' or 'prod'
	mainPosition: null,
	tray: null,
	menu: null,
	sync: true,
	handlingSquirrelEvent: false,
	qrcodeURL: '',
	imgURL: '',
}


// ========== util func ==========
const log = function() {
    console.log.apply(null, arguments)
}
// ========== util func ==========


// ========== stop sencod instance ==========
const isSecondInstance = app.makeSingleInstance(() => {
	// Someone tried to run a second instance, we should focus our window.
	if (win.winMain !== null) {
		if (win.winMain.isMinimized()) {
			win.winMain.restore()
		}
		win.winMain.focus()
	}
})
  
if (isSecondInstance) {
	app.quit()
}
// ========== stop sencod instance ==========


// ========== handle squirrel event ==========
// if (process.platform === 'win32' && process.argv.length > 1) {
// 	const arg = process.argv[1]

// 	const promise = sh.handleSquirrelEvent(arg)
// 	if (promise) {
// 		config.handlingSquirrelEvent = true
// 		promise
// 		    .catch((err) => {
// 				console.error(`Failer handling Squirrel event: ${arg}`, err)
// 			})
// 			.then(() => {
// 				app.quit()
// 			})
// 	}
// }

if (process.platform === 'win32' && process.argv.length > 1) {
	config.installing = true
	const arg = process.argv[1]
	sh.handleSquirrelEvent(app, arg)
}
// ========== handle squirrel event ==========


// ========== Tray ==========
function createTray() {
	if (config.tray === null) {
		config.tray = new Tray(config.trayPath)
	}

	function handleClick() {
		// judge login or not
		if (win.winLogin !== null) {
			if (win.winLogin.isVisible()) {
				win.winLogin.hide()
			} else {
				win.winLogin.show()
			}
		} else {
			if (win.winMain.isVisible()) {
				hideMain()
			} else {
				showMain()
			}
		}
	}

	config.tray.on('click', handleClick)

	config.tray.on('right-click', handleClick)

	config.tray.on('double-click', () => {
		shell.openItem(config.folderPath)
	})
}
// ========== Tray ==========


// ========== Main ==========
function createMain() {
	const options = {
		width: 400,
		height: 600,
		show: false,
		frame: false,
	}
	win.winMain = new BrowserWindow(options)

	// if (config.environment === 'dev') {
	// 	win.winMain.webContents.openDevTools()
	// }

	config.mainPosition = new Position(win.winMain)

	win.winMain.on('blur', () => {
		hideMain()
	})

	win.winMain.loadURL(`file://${__dirname}/renderer/main.html`)
}

function showMain() {
	const trayPos = config.tray.getBounds()

	const windowPosition = (process.platform === 'win32') ? 'bottomRight' : 'topRight'
	// const windowPosition = (process.platform === 'win32') ? 'trayBottomCenter' : 'trayCenter'

	const position = config.mainPosition.calculate(windowPosition, trayPos)

	const x = position.x
	const y = position.y

	win.winMain.setPosition(x, y)
	win.winMain.show()
}

function hideMain() {
	if (win.winMain !== null) {
		if (config.tray !== null) {
			config.tray.setHighlightMode('never')
		}

		win.winMain.hide()
	}
}

ipcMain.on('main-header-settings-clicked', (event, position) => {
	createMenu(position)
})
// ========== Main ==========


// ========== Menu ==========
function createMenu(position) {
	const template = [
		{
			label: '已使用 1%',
			enabled: false,
		},
		{
			label: '获取更多空间',
			click: () => {
				shell.openExternal(config.upgradeURL)
			},
			position: 'endof=2',
		},
		{
			label: config.sync ? '最新' : '同步已暂停',
			enabled: false,
			position: 'endof=3',
		},
		{
			label: config.sync ? '暂停同步' : '继续同步',
			click: () => {
				config.sync = !config.sync
			},
			position: 'endof=3',
		},
		{
			label: '首选项',
			click: () => {
				createSettings()
			},
			position: 'endof=4',
		},
		{
			label: '帮助中心',
			position: 'endof=4',
		},
		{
			label: '退出',
			click: () => {
				app.quit()
			},
			position: 'endof=5',
		},
	]

	config.menu = Menu.buildFromTemplate(template)
	config.menu.popup(win.winMain)
}
// ========== Menu ==========


// ========== Login ==========
function createLogin() {
	const options = {
		width: 400,
		height: 600,
		show: false,
		icon: config.iconPath,
	}
	win.winLogin = new BrowserWindow(options)

	// don't display menu
	win.winLogin.setMenuBarVisibility(false)

	win.winLogin.loadURL(`file://${__dirname}/renderer/login.html`)

	// win.winLogin.once('ready-to-show', () => {
	// 	win.winLogin.show()
	// })
}

const showLogin = function() {
	if (win.winLogin !== null) {
		win.winLogin.show()
	}
}

const closeLogin = function() {
	if (win.winLogin !== null) {
		win.winLogin.close()
		win.winLogin = null
	}
}

ipcMain.on('login-ready', (event) => {
	const imgURL = config.imgURL
	const qrcodeURL = config.qrcodeURL
	
	event.sender.send('login-url', {
		imgURL: imgURL,
		qrcodeURL: qrcodeURL,
	})
})

ipcMain.on('login-ready-show', () => {
	showLogin()
})

ipcMain.on('login-finish', (event, args) => {
	const user = new userStore.UserStore(config.settingsFile)
	const { username, session } = args
	user.save(username, session)

	closeLogin()
	if (folderFirstSetted()) {
		createFolderPanel()
	} else {
		createTray()
		createMain()
		showMain()
	}
})
// ========== Login ==========


// ========== FolderPanel ==========
const createFolderPanel = function() {
	const options = {
		width: 400,
		height: 400,
		show: false,
		icon: config.iconPath,
	}
	win.winFolderPanel = new BrowserWindow(options)

	// don't display menu
	win.winFolderPanel.setMenuBarVisibility(false)

	// if (config.environment === 'dev') {
	// 	win.winFolderPanel.webContents.openDevTools()
	// }

	win.winFolderPanel.loadURL(`file://${__dirname}/renderer/FolderPanel.html`)
}

const showFolderPanel = function() {
	if (win.winFolderPanel !== null) {
		win.winFolderPanel.show()
	}
}

const closeFolderPanel = function() {
	if (win.winFolderPanel !== null) {
		win.winFolderPanel.close()
	}
}

const fetchFolderList = function() {
	return new Promise((resolve, reject) => {
        drivelist.list((error, drives) => {
			if (error) {
				reject(error)
			} else {
				const list = []
				drives.forEach((item) => {
					const tenG = 1024 * 1024 * 10
					if (item.size > tenG && item.system) {
						list.push({
							name: item.displayName,
						})
					}
				})

				resolve(list)
			}
		})
	})
}

ipcMain.on('folder-panel-ready', (event) => {
	fetchFolderList()
	    .then((list) => {
            const args = {
				list: list,
			}
  
            event.sender.send('folder-list', args)
		})
        .catch((err) => {
			throw err
		})
})

ipcMain.on('folder-panel-show', () => {
	showFolderPanel()
})

ipcMain.on('folder-confirm', (event, arg) => {
	let settings
	try {
		settings = fs.readFileSync(
			config.settingsFile,
			{ encoding: 'utf-8' }
		)
	} catch (err) {
		throw err
	}
	
	settings.sync.folderFirstSetted = false
	settings.sync.path = arg.folder
	settings.syncTemp.folderFirstSetted = false
	settings.syncTemp.path = arg.folder

	try {
		fs.writeFileSync(
			config.settingsFile,
			JSON.stringify(settings, null, 4)
		)
	} catch (err) {
		throw err
	}

	closeFolderPanel()
	createTray()
	createMain()
	showMain()
})
// ========== FolderPanel ==========


// ========== Settings ==========
function createSettings() {
	const options = {
		width: 400,
		height: 500,
		show: false,
		icon: config.iconPath,
	}
	win.winSettings = new BrowserWindow(options)

	// don't display menu
	win.winSettings.setMenuBarVisibility(false)

	// if (config.environment === 'dev') {
	// 	win.winSettings.webContents.openDevTools()
	// }

	win.winSettings.loadURL(`file://${__dirname}/renderer/settings.html`)
}

function closeSettings() {
	if (win.winSettings !== null) {
		win.winSettings.close()
		win.winSettings = null
	}
}

ipcMain.on('settings-ready', (event) => {
	fs.readFile(config.settingsFile, (err, data) => {
		if (err) {
			throw err
		} else {
			const options = JSON.parse(data)
			event.sender.send('settings-options', options)
		}
	})
})

ipcMain.on('settings-options-received', () => {
    win.winSettings.show()
})

ipcMain.on('settings-update', (event, options) => {
	fs.writeFile(config.settingsFile,
		JSON.stringify(options, null, 4),
		(err) => {
			if (err) {
				throw err
			} else {
				event.sender.send('settings-updated')
			}
		}
    )
})

ipcMain.on('settings-close', () => {
	closeSettings()
})
// ========== Settings ==========


// ========== APP ==========
const verifySession = function(session) {
	return
}

const sessionExpired = function() {
    const u = new userStore.UserStore(config.settingsFile)
	const session = u.getSession()

	if (verifySession(session)) {
		return true
	} else {
		return false
	}
}

const userLogined = function() {
	const u = new userStore.UserStore(config.settingsFile)
	const username = u.getUsername()

	if (username !== '') {
		return true
	} else {
		return false
	}
}

const folderFirstSetted = function() {
	let settings
	try {
		settings = fs.readFileSync(config.settingsFile, { encoding: 'utf-8' })
		return settings.sync.folderFirstSetted
	} catch (err) {
		throw err
	}
}

app.on('ready', () => {
	if (!config.installing) {
		if (config.environment === 'dev') {
			BrowserWindow.addDevToolsExtension(reactDevtool)
		}
	
		if (userLogined()) {
			if (sessionExpired()) {
				createLogin()
			} else {
				if (folderFirstSetted()) {
                    createFolderPanel()
				} else {
					createTray()
					createMain()
					showMain()
				}
			}
		} else {
            createLogin()
		}
	}
})
// ========== APP ==========

// ========== Toogle Devtools ==========
ipcMain.on('toogle-devtools', () => {
	if (config.environment === 'dev') {
        const contents = webContents.getFocusedWebContents()
		if (contents.isDevToolsOpened()) {
			contents.closeDevTools()
		} else {
			contents.openDevTools()
		}
	}
})
// ========== Toogle Devtools ==========

// ========== fetch activity list ==========
ipcMain.on('fetch-activity-list', (event) => {
	function createScrollList() {
		const list = [
			{
				fileName: 'loooooooooooooooooooooooooooooooooooong file name test.txt',
				actor: '您',
				action: '更改',
				actionTime: '2天前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\test.txt',
			},
			{
				fileName: 'test5.txt',
				actor: '您',
				action: '更改',
				actionTime: '2天前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\test.txt',
			},
			{
				fileName: 'test4.txt',
				actor: '您',
				action: '更改',
				actionTime: '2天前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\test.txt',
			},
			{
				fileName: 'test3.txt',
				actor: '您',
				action: '更改',
				actionTime: '2天前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\test.txt',
			},
			{
				fileName: 'test2.txt',
				actor: '您',
				action: '更改',
				actionTime: '2天前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\test.txt',
			},
			{
				fileName: 'test.txt',
				actor: '您',
				action: '更改',
				actionTime: '2天前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\test.txt',
			},
			{
				fileName: '比尔-盖茨《未来时速》.pdf',
				actor: '您',
				action: '添加',
				actionTime: '2个月前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\比尔-盖茨《未来时速》.pdf',
			},
			{
				fileName: 'HP洛夫克拉夫特 短篇集.txt',
				actor: '您',
				action: '添加',
				actionTime: '4个月前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\HP洛夫克拉夫特 短篇集.txt',
			},
			{
				fileName: 'Getting Started.rtf',
				actor: 'Q-box 团队',
				action: '添加',
				actionTime: '2年前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\Getting Started.rtf',
			},
			{
				fileName: 'How to use the Public folder.rtf',
				actor: 'Q-box 团队',
				action: '添加',
				actionTime: '2年前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\Public\\How to use the Public folder.rtf',
			},
		]
	
		return list
	}
	
	function createNotScrollList() {
		const list = [
			{
				fileName: 'test.txt',
				actor: '您',
				action: '更改',
				actionTime: '2天前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\test.txt',
			},
			{
				fileName: '比尔-盖茨《未来时速》.pdf',
				actor: '您',
				action: '添加',
				actionTime: '2个月前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\比尔-盖茨《未来时速》.pdf',
			},
			{
				fileName: 'HP洛夫克拉夫特 短篇集.txt',
				actor: '您',
				action: '添加',
				actionTime: '4个月前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\HP洛夫克拉夫特 短篇集.txt',
			},
			{
				fileName: 'Getting Started.rtf',
				actor: 'Q-box 团队',
				action: '添加',
				actionTime: '2年前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\Getting Started.rtf',
			},
			{
				fileName: 'How to use the Public folder.rtf',
				actor: 'Q-box 团队',
				action: '添加',
				actionTime: '2年前',
				fileURL: 'https://electron.atom.io/docs/api/clipboard/',
				filePath: 'C:\\Users\\Tiger\\Dropbox\\Public\\How to use the Public folder.rtf',
			},
		]
	
		return list
	}
	
	function createEmptyList() {
		return []
	}
	
	const mockList = {
		emptyList: createEmptyList(),
		notScrollList: createNotScrollList(),
		scrollList: createScrollList(),
	}

	const data = {
		status: 1,
		list: mockList.scrollList,
	}

	event.sender.send('receive-activity-list', data)
})
// ========== fetch activity list ==========
