import { ADD } from '../constants/actionType'

export default (state = [],action) => {   
    switch (action.type) {
        case ADD: return [...state, { value: action.payload }];

        default: return state;
    }
};

// ['task1', 'task2']
// [{ value: 'task1' }, { value: 'task2' }]

// todo
// STRING => OBJECT { value, id }