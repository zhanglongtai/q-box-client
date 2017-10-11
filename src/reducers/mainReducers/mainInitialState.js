const mainInitailState = {
    inform: {
        isFetching: true,
        receiveSuccess: true,
        errorMsg: '',
		list: [],
    },
    recentActivity: {
        isFetching: true,
		receiveSuccess: true,
        errorMsg: '',
		list: [],
    },
    content: 'inform', // 'inform' or 'recentActivity'
}

export default mainInitailState
