import {
    ACTION_RESUME_GET
} from '../actions/resume';

import {
    translated
} from '../config/const'

export function  newExperienceItem() {

    return ({

        title: translated.projectTitle,
        role: translated.role,
        startDate: new Date(),
        endDate: new Date(),
        summary: translated.summary

    });

}

export const INITIAL_STATE_RESUME = {
    uid: '',
    info: {
        intro: '',
        github: '',
        city: '',
        blog: '',
        email: '',
        phone: '',
        record: '',
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