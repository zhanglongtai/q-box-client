import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { initializeIcons } from "@uifabric/icons"
import settingsReducers from "./reducers/settingsReducers"
import { SettingsContainer } from "./Settings"
import { log } from "./utils"

initializeIcons()

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
