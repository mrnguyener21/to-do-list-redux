import { ADD, REMOVE } from '../constants/actionType'

import { v4 as uuidv4 } from 'uuid';

export default (state = [],action) => {   
    switch (action.type) {
        case ADD: return [...state, { task: action.payload, id: uuidv4() }];
        case REMOVE : return state.filter(({ id }) => id !== action.payload);
        default: return state;
    }
};

// ['task1', 'task2']
// [{ value: 'task1' }, { value: 'task2' }]

// todo
// STRING => OBJECT { value, id }