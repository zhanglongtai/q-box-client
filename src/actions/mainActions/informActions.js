// import fetch from "isomorphic-fetch"

// const { ipcRenderer } = window.require("electron")

function requestInform() {
    return {
        type: 'REQUEST_INFORM',
    }
}

function receiveInform(data) {
    return {
        type: 'RECEIVE_INFORM',
        list: data.list,
    }
}

function invalidInform(data) {
    return {
        type: 'INVALID_INFORM',
        errMsg: data.errMsg,
    }
}

function fetchInform() {
    return (dispatch) => {
        dispatch(requestInform())

        const data = {
            list: mockInform.emptyList,
        }
        dispatch(receiveInform(data))
    }
}

// mock data
function createEmptyList() {
    return []
}
const mockInform = {
    emptyList: createEmptyList(),
}

export {
    fetchInform,
};
