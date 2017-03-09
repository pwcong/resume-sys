import UserModel from '../model/user';
import LoggerFactory, { 
    Infoer, 
    Errorer 
} from '../utils/LoggerFactory';

import response from '../entity/response';
import status from '../entity/status';

const { OK, ERROR } = status;

const logger = LoggerFactory.getLogger('UserService');
const infoer = Infoer(logger);
const errorer = Errorer(logger);

export default {

	register(user){

		return new Promise((resolve, reject) => {

			if(user.uid.length < 6){
				reject(response(ERROR, 'length of uid can not be shorter than 6'));
			}
			else {
				
				infoer('register start', user.uid);

				UserModel
					.findOne({
						uid: user.uid
					})
					.then( _user => {
						
						if(_user){
							infoer('register failed', user.uid, 'user is existed');
							reject(response(ERROR, 'user is existed'));
						}else{

							var registerUser = new UserModel({
								uid: user.uid,
								pwd: user.pwd
							});

							registerUser
								.save()
								.then( _user => {
									infoer('register success', user.uid);
									resolve(response(OK, 'success', _user));
								})
								.catch( err => {
									infoer('register failed', user.uid, 'unknown error');
									reject(response(ERROR, 'unknown error'));
								});
									
						}
					}).catch( err => {
						errorer(err);
						reject(response(ERROR, 'server error'));
					});
			}
		});

	},
	login(user) {

		return new Promise( (resolve, reject) => {

			infoer('login start', user.uid);

			UserModel
				.findOne({
					uid: user.uid
				})
				.then( _user => {
				
					if(_user){

						if(_user.pwd === user.pwd){

							infoer('login success', user.uid);

							resolve(response(OK,'success', _user));		


						}else{

							infoer('login failed', user.uid, 'wrong pwd');

							reject(response(ERROR, 'wrong pwd'));

						}

					}else{
						infoer('login failed', user.uid, 'user is not existed');
						reject(response(ERROR, 'user is not existed'));						
					}
				})
				.catch( err => {
					errorer(err);
					reject(response(ERROR, 'server error'));
				});
			

		});

	}
}
