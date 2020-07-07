import { ADD, REMOVE } from '../constants/actionType'

export const add = (task) => ({type: ADD, payload:task});
export const remove = (id) => ({type: REMOVE, payload:id});
