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
    options: {
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
            downloadLimitSpeedDefault: '50.0',
            downloadLimitSpeed: '50.0',
            uploadLimit: false,
            uploadLimitSpeedDefault: '10.0',
            uploadLimitSpeed: '10.0',
            lanSync: true,
        },
        bandwidthTemp: {
            downloadLimit: false,
            downloadLimitSpeedDefault: '50.0',
            downloadLimitSpeed: '50.0',
            uploadLimit: false,
            uploadLimitSpeedDefault: '10.0',
            uploadLimitSpeed: '10.0',
            lanSync: true,
        },
        proxy: {
            option: 'none', // 'none', 'auto', 'manual'
            optionDefault: 'none',
            protocol: 'HTTP', // 'HTTP', 'SOCKS4', 'SOCKS5'
            protocolDefault: 'HTTP',
            serverIP: '',
            serverIPDefault: '',
            serverPort: '8080',
            serverPortDefault: '8080',
        },
        proxyTemp: {
            option: 'none', // 'none', 'auto', 'manual'
            optionDefault: 'none',
            protocol: 'HTTP', // 'HTTP', 'SOCKS4', 'SOCKS5'
            protocolDefault: 'HTTP',
            serverIP: '',
            serverIPDefault: '',
            serverPort: '8080',
            serverPortDefault: '8080',
        },
        sync: {
            path: '',
            pathDefault: '',
        },
        syncTemp: {
            path: '',
            pathDefault: '',
        },
    }
}

export default settingsInitailState
