import ResumeModel from '../model/resume';
import LoggerFactory, { 
    Infoer, 
    Errorer 
} from '../utils/LoggerFactory';

import response from '../entity/response';
import status from '../entity/status';

const { OK, ERROR } = status;

const logger = LoggerFactory.getLogger('ResumeService');
const infoer = Infoer(logger);
const errorer = Errorer(logger);

export default {

	get(uid){

		return new Promise((resolve, reject) => {

            infoer('get start', uid);

            ResumeModel
                .findOne({
                    uid: uid
                })
                .then( resume => {
                    
                    if(resume){

                        infoer('get success', uid);
                        resolve(response(OK, 'success', resume));

                    }else{

                        var registerResume = new ResumeModel({
                            uid: uid
                        });

                        registerResume
                            .save()
                            .then( _resume => {
                                infoer('get success', _resume.uid);
                                resolve(response(OK, 'success', _resume));
                            })
                            .catch( err => {
                                infoer('get failed', uid, 'unknown error');
                                reject(response(ERROR, 'unknown error'));
                            });
                                
                    }
                }).catch( err => {
                    errorer(err);
                    reject(response(ERROR, 'server error'));
                });
			
		});

	},
    modify(resume){

        return new Promise((resolve, reject) => {

            infoer('modify start', resume.uid);

            ResumeModel.findOne({
                uid: resume.uid
            }).then(_resume =>{

                if(!_resume){

                    infoer('modify failed', resume.uid);
                    reject(response(ERROR, 'resume is not existed'));

                }else{

                    ResumeModel.update(
                        {
                            uid: resume.uid
                        },
                        {
                            info: resume.info,
                            experience: resume.experience,
                            education: resume.education,
                            work: resume.work,
                            hope: resume.hope,
                            skill: resume.skill
                        }
                    ).then( res => {

                        if(!res){

                            infoer('modify failed', resume.uid);
                            reject(response(ERROR, 'resume is not existed'));
                        }else{

                            infoer('modify success', resume.uid);
                            resolve(response(OK, 'success', res));

                        }


                    }).catch(err => {
                        errorer(err);
                        reject(response(ERROR, 'server error'));
                    });

                }


            }).catch(err => {
                errorer(err);
                reject(response(ERROR, 'server error'));
            });

        });

    }



}