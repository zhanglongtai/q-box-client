import { log } from "../../utils";

const { ipcRenderer } = window.require('electron')

function requestActivity() {
    return {
        type: 'REQUEST_ACTIVITY',
    }
}

function receiveActivity(data) {
    return {
        type: 'RECEIVE_ACTIVITY',
        list: data.list,
    }
}

function invalidActivity(data) {
    return {
        type: 'INVALID_ACTIVITY',
        errMsg: data.errMsg,
    }
}

function fetchActivity() {
    return (dispatch) => {
        dispatch(requestActivity())
        ipcRenderer.send('fetch-activity-list')
        ipcRenderer.on('receive-activity-list', (event, data) => {
            if (data.status === 1) {
                dispatch(receiveActivity(data))
            } else {
                dispatch(invalidActivity(data))
            }
        })
    }
}

export {
    fetchActivity,
}
