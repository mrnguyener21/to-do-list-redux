import React from 'react'
import reactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import allReducer from './Reducer'

const store = createStore(allReducer)

reactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);