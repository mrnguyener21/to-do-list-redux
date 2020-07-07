import { ADD } from '../constant/actionType'

export default ( state = [], action ) => {
    switch( action.type ) {
        case ADD: return console.log('works');
        default: return state;
    }
}  