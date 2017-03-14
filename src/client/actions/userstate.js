import serverConfig from '../../../config/server.config';
import 'whatwg-fetch';

const OK = 200;

export const ACTION_USERSTATE_LOGIN = 'ACTION_USERSTATE_LOGIN';
export function login(token, uid){
    return ({
        type: ACTION_USERSTATE_LOGIN,
        payload: {
            token,
            uid
        }
    });
}

export const ACTION_USERSTATE_LOGOUT = 'ACTION_USERSTATE_LOGOUT';
export function logout(){
    return ({
        type: ACTION_USERSTATE_LOGOUT
    });
}

export function toLogin(user, onStart, onSuccess, onFailed){

    return dispatch => {

        onStart();

        fetch('http://' + serverConfig.host + ':' + serverConfig.port + serverConfig.api.login.url, {
            method: serverConfig.api.login.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: user.uid,
                pwd: user.pwd
            })
        }).then(res => {
            return res.json();
        }).then(json => {

            if(json.status === OK){

                dispatch(login(json.token, json.result.uid));
                onSuccess();

            }else{
                onFailed(json.message);
            }

        }).catch(err => {
            onFailed(err.message);
        });
    }
}

export function toRegister(user, onStart, onSuccess, onFailed){

    return dispatch => {

        onStart();

        fetch('http://' + serverConfig.host + ':' + serverConfig.port + serverConfig.api.register.url, {

            method: serverConfig.api.register.method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uid: user.uid,
                pwd: user.pwd
            })


        }).then(res => {
            return res.json();
        }).then(json => {

            if(json.status === OK){

                dispatch(login(json.token, json.result.uid));
                onSuccess();

            }else{
                onFailed(json.message);
            }

        }).catch(err => {
            onFailed(err.message);
        })

    }

}

