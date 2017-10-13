const {
	app,
	Menu,
	BrowserWindow,
	dialog,
	Tray,
	ipcMain,
	shell,
} = require('electron')
const Position = require('electron-positioner')

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
}

// app config
const config = {
	iconPath: '',
	trayPath: `${__dirname}/renderer/icon/tray.png`,
	folderPath: 'C:\\Users\\Tiger\\Dropbox\\',
	upgradeURL: 'www.baidu.com',
	environment: 'prod', // 'dev' or 'prod'
	mainPosition: null,
	tray: null,
	menu: null,
	sync: true,
}

// util func
function log() {
    console.log.apply(null, arguments)
}

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

	if (config.environment === 'dev') {
		win.winMain.webContents.openDevTools()
	}

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

	win.winLogin.once('ready-to-show', () => {
		win.winLogin.show()
	})
}
// ========== Login ==========

// ========== Settings ==========
function createSettings() {
	const options = {
		width: 400,
		height: 400,
		show: false,
		icon: config.iconPath,
	}
	win.winSettings = new BrowserWindow(options)

	// don't display menu
	win.winSettings.setMenuBarVisibility(false)

	if (config.environment === 'dev') {
		win.winSettings.webContents.openDevTools()
	}

	win.winSettings.loadURL(`file://${__dirname}/renderer/settings.html`)
	
	win.winSettings.once('ready-to-show', () => {
		win.winSettings.show()
	})
}

function closeSettings() {
	if (win.winSettings !== null) {
		win.winSettings.close()
	}
}
// ========== Settings ==========

app.on('ready', () => {
	if (config.environment === 'dev') {
		BrowserWindow.addDevToolsExtension(reactDevtool)
	}

	// createLogin()
	createTray()
	createMain()
	showMain()
});

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
