import { combineReducers } from 'redux'

import task from './task'

const allReducers = (combineReducers({task}));

export default allReducers;