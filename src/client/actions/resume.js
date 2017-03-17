import 'whatwg-fetch';
import serverConfig from '../../../config/server.config';

const OK = 200;

export const ACTION_RESUME_GET = 'ACTION_RESUME_GET';
export function getResume(resume){

    return ({
        type: ACTION_RESUME_GET,
        payload: {
            resume
        }
    });

}

export function toGetResume(uid, onStart, onSuccess, onFailed){

    return dispatch => {

        onStart();

        fetch('http://' + serverConfig.host + ':' + serverConfig.port + serverConfig.api.getResume.path + uid)
        .then(res => {
            return res.json();
        }).then(json => {

            if(json.status === OK){

                dispatch(getResume(json.result));
                onSuccess(json.result);

            }else{
                onFailed(json.message);
            }

        }).catch(err => {
            onFailed(err.message);
        });

    }

}

export function toModifyResume(token, resume, onStart, onSuccess, onFailed){

    return dispatch => {

        onStart();

        fetch('http://' + serverConfig.host + ':' + serverConfig.port + serverConfig.api.modifyResume.url, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                resume
            }),
            method: serverConfig.api.modifyResume.method
        }).then(res => {
            return res.json();
        }).then(json => {

            if(json.status === OK){

                dispatch(getResume(json.result));
                onSuccess(json.result);

            }else{
                onFailed(json.message);
            }

        }).catch(err => {
            onFailed(err.message);
        });

    }

}