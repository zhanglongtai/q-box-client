import mainInitialState from "./mainInitialState"

function inform(state = mainInitialState.recentActivity, action) {
    switch(action.type) {
        case 'REQUEST_INFORM':
		    return Object.assign({}, state, {
                isFetching: true,
                receiveSuccess: false,
                errMsg: '',
                list: [],
		    });
        case 'RECEIVE_INFORM':
            return Object.assign({}, state, {
                isFetching: false,
                receiveSuccess: true,
                errMsg: '',
                list: action.list,
            });
        case 'INVALID_INFORM':
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

export default inform;
