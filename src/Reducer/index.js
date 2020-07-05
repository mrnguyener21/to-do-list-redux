import { combineReducers } from 'redux'

import counter from './counter'

const allReducer = combineReducers({counter});

export default allReducer;