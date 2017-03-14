import {
    ACTION_RESUME_GET
} from '../actions/resume';

export const INITIAL_STATE_RESUME = {
    uid: '',
    info: {
        intro: '',
        github: '',
        blog: '',
        email: '',
        phone: '',
        birthday: '',
        sex: 0,
        name: '',
        avatar: ''
    },
    experience: {
        display: false,
        list: []
    },
    education: {
        display: false,
        list: []
    },
    work: {
        display: false,
        list: []
    },
    hope: {
        display: false,
        details: {
            job: '',
            type: '',
            city: '',
            salary: ''
        }

    },
    skill: {
        display: false,
        list: []
    }

}

export default (state = INITIAL_STATE_RESUME, action) => {

    switch(action.type){

        case ACTION_RESUME_GET:
            return Object.assign({} ,state, {
                info: action.payload.resume.info,
                experience: action.payload.resume.experience,
                education: action.payload.resume.education,
                work: action.payload.resume.work,
                hope: action.payload.resume.hope,
                skill: action.payload.resume.skill  
            });

        default:
            return state;

    }

}