import { ADD, REMOVE } from '../constants/actionType'

import { v4 as uuidv4 } from 'uuid';

export const add = (task) => ({type: ADD, payload:task});
export const remove = (id) => ({type: REMOVE, payload:id});
