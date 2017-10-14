const settingsInitailState = {
    content: 'general', // 'general', 'account', 'bandwidth', 'proxy', 'sync'
    contentList: [
        {
            name: 'general',
            title: '常规',
            imgURL: 'list',
        },
        {
            name: 'account',
            title: '账户',
            imgURL: 'perm_identity',
        },
        {
            name: 'bandwidth',
            title: '带宽',
            imgURL: 'swap_vert',
        },
        {
            name: 'proxy',
            title: '代理',
            imgURL: 'settings_input_component',
        },
        {
            name: 'sync',
            title: '同步',
            imgURL: 'sync',
        },
    ],
    general: {
        launchAtLogin: true,
    },
    generalTemp: {
        launchAtLogin: true,
    },
    account: {
        space: '',
        relevance: 'user_id',
    },
    accountTemp: {
        space: '',
        relevance: 'user_id',
    },
    bandwidth: {
        downloadLimit: false,
        downloadDefaultLimitSpeed: '50.0',
        downloadLimitSpeed: '',
        uploadLimit: false,
        uploadDefaultLimitSpeed: '10.0',
        uploadLimitSpeed: '',
        lanSync: true,
    },
    bandwidthTemp: {
        downloadLimit: false,
        downloadDefaultLimitSpeed: '50.0',
        downloadLimitSpeed: '',
        uploadLimit: false,
        uploadDefaultLimitSpeed: '10.0',
        uploadLimitSpeed: '',
        lanSync: true,
    },
    proxy: {
        option: 'none', // 'none', 'auto', 'manual'
        defaultOption: 'none',
        protocol: 'HTTP', // 'HTTP', 'SOCKS4', 'SOCKS5'
        defaultProtocol: 'HTTP',
        serverIP: '',
        defaultServerIP: '',
        serverPort: '8080',
        defaultServerPort: '8080',
    },
    proxyTemp: {
        option: 'none', // 'none', 'auto', 'manual'
        defaultOption: 'none',
        protocol: 'HTTP', // 'HTTP', 'SOCKS4', 'SOCKS5'
        defaultProtocol: 'HTTP',
        serverIP: '',
        defaultServerIP: '',
        serverPort: '8080',
        defaultServerPort: '8080',
    },
    sync: {
        path: '',
        defaultPath: '',
    },
    syncTemp: {
        path: '',
        defaultPath: '',
    },
}

export default settingsInitailState
