import { log } from "../../utils";

const { ipcRenderer } = window.require('electron')

function requestActivityList() {
    return {
        type: 'REQUEST_ACTIVITY_LIST',
    }
}

function receiveActivityList(data) {
    return {
        type: 'RECEIVE_ACTIVITY_LIST',
        list: data.list,
    }
}

function invalidActivityList(data) {
    return {
        type: 'INVALID_ACTIVITY_LIST',
        errMsg: data.errMsg,
    }
}

function activityList() {
    return (dispatch) => {
        dispatch(requestActivityList())
        ipcRenderer.send('fetch-activity-list')
        ipcRenderer.on('receive-activity-list', (event, data) => {
            if (data.status === 1) {
                dispatch(receiveActivityList(data))
            } else {
                dispatch(invalidActivityList(data))
            }
        })
    }
}

export {
    activityList,
}
