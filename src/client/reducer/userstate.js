import {
    ACTION_USERSTATE_LOGIN,
    ACTION_USERSTATE_LOGOUT
} from '../actions/userstate';

export const INITIAL_STATE_USERSTATE = {

    isLogined: false,
    uid: '',
    token: ''

}

export default (state = INITIAL_STATE_USERSTATE, action) => {

    switch(action.type){

        case ACTION_USERSTATE_LOGIN:
            return Object.assign({}, state, {
                isLogined: true,
                uid: action.payload.uid,
                token: action.payload.token
            });

        case ACTION_USERSTATE_LOGOUT:
            return Object.assign({}, state, {
                isLogined: false,
                uid: '',
                token: ''
            });

        default: 
            return state;

    }

}