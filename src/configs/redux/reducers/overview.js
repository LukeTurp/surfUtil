import { LOAD_OVERVIEW } from '../actions/actionTypes';

export default (state = null, { type, payload }) => 
    (type === LOAD_OVERVIEW) ? payload :state;