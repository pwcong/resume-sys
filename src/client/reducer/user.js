export const INITIAL_STATE_USER = {

    isLogining: false,
    isLogined: false,
    uid: '',
    token: ''

}

export default (state = INITIAL_STATE_USER, action) => {

    switch(action.type){

        default: 
            return state;

    }

}