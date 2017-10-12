const mainInitailState = {
    inform: {
        isFetching: true,
        receiveSuccess: false,
        errorMsg: '',
		list: [],
    },
    recentActivity: {
        isFetching: true,
		receiveSuccess: false,
        errorMsg: '',
		list: [],
    },
    content: 'inform', // 'inform' or 'recentActivity'
    website: 'www.baidu.com',
    folderPath: 'C:\\Users\\Tiger\\Dropbox\\',
}

export default mainInitailState
