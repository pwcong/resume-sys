import 'whatwg-fetch';
import serverConfig from '../../../config/server.config';

const OK = 200;

const getResumeUrl = process.env.NODE_ENV === 'production' ?
    serverConfig.api.getResume.path
    :
    'http://' + serverConfig.host + ':' + serverConfig.port + serverConfig.api.getResume.path;

const modifyResumeUrl = process.env.NODE_ENV === 'production' ?
    serverConfig.api.modifyResume.url
    :
    'http://' + serverConfig.host + ':' + serverConfig.port + serverConfig.api.modifyResume.url;

const publishResumeUrl = process.env.NODE_ENV === 'production' ?
    serverConfig.api.publishResume.url
    :
    'http://' + serverConfig.host + ':' + serverConfig.port + serverConfig.api.publishResume.url;

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

        fetch(getResumeUrl + uid)
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

        fetch(modifyResumeUrl, {
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
                onSuccess();

            }else{
                onFailed(json.message);
            }

        }).catch(err => {
            onFailed(err.message);
        });

    }

}

export function toPublishResume(token, uid, onStart, onSuccess, onFailed){

    return dispatch => {

        onStart();

        fetch(publishResumeUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                uid
            }),
            method: serverConfig.api.publishResume.method
        }).then(res => {
            return res.json();
        }).then(json => {

            if(json.status === OK){

                onSuccess();

            }else{
                onFailed(json.message);
            }

        }).catch(err => {
            onFailed(err.message);
        });

    }

}