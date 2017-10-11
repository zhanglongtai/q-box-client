import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import mainReducers from './reducers/mainReducers'
import Main from './Main'

const store = createStore(
    mainReducers,
    applyMiddleware(
        thunkMiddleware
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('content')
)
