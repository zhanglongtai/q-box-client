import React from "react"
import ReactDOM from "react-dom"
// import { Provider } from "react-redux"
// import { createStore, applyMiddleware } from "redux"
// import thunkMiddleware from "redux-thunk"

// import mainReducers from "./reducers/mainReducers"
import FolderPanel from "./FolderPanel"

// const store = createStore(
//     mainReducers,
//     applyMiddleware(
//         thunkMiddleware
//     )
// )

// ReactDOM.render(
//     <Provider store={store}>
//         <Main />
//     </Provider>,
//     document.getElementById('content')
// )

ReactDOM.render(
    <FolderPanel />,
    document.getElementById('content')
)
