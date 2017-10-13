import mainInitialState from "./mainInitialState"

function recentActivity(state = mainInitialState.recentActivity, action) {
    switch(action.type) {
        case 'REQUEST_ACTIVITY':
		    return Object.assign({}, state, {
                isFetching: true,
                receiveSuccess: false,
                errMsg: '',
                list: [],
		    });
        case 'RECEIVE_ACTIVITY':
            return Object.assign({}, state, {
                isFetching: false,
                receiveSuccess: true,
                errMsg: '',
                list: action.list,
            });
        case 'INVALID_ACTIVITY':
            return Object.assign({}, state, {
                isFetching: false,
                receiveSuccess: false,
                errMsg: action.errMsg,
                list: [],
            });
        default:
            return state;
    }
}

export default recentActivity;
