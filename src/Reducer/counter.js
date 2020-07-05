import { ADD } from '../constants/actionType'

export default (state=[],action) => {   
    switch (action.type){
        case ADD: return [...state, { value: action.payload}];

        default: return [...state, 'not working'];
    }

};