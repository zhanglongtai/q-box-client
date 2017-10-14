import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import settingsReducers from "./reducers/settingsReducers"
// import { SettingsContainer } from "./Settings"
import SettingsContainer from "./Settings/SettingsContainer";

import { log } from "./utils"

const store = createStore(
    settingsReducers,
    applyMiddleware(
        thunkMiddleware
    )
)

ReactDOM.render(
    <Provider store={store}>
        <SettingsContainer />
    </Provider>,
    document.getElementById('content')
)
