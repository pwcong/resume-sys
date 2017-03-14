import { combineReducers } from 'redux';

import userstate from './userstate';
import resume from './resume';

export default combineReducers({
    userstate,
    resume
}); 