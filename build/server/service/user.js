'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _user2 = require('../model/user');

var _user3 = _interopRequireDefault(_user2);

var _LoggerFactory = require('../utils/LoggerFactory');

var _LoggerFactory2 = _interopRequireDefault(_LoggerFactory);

var _response = require('../entity/response');

var _response2 = _interopRequireDefault(_response);

var _status = require('../entity/status');

var _status2 = _interopRequireDefault(_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OK = _status2.default.OK,
    ERROR = _status2.default.ERROR;


var logger = _LoggerFactory2.default.getLogger('UserService');
var infoer = (0, _LoggerFactory.Infoer)(logger);
var errorer = (0, _LoggerFactory.Errorer)(logger);

exports.default = {
	register: function register(user) {

		return new Promise(function (resolve, reject) {

			infoer('register start', user.uid);
			if (user.uid.length < 6) {
				reject((0, _response2.default)(ERROR, 'length of uid can not be shorter than 6'));
			} else {

				_user3.default.findOne({
					uid: user.uid
				}).then(function (_user) {

					if (_user) {
						infoer('register failed', user.uid, 'user is existed');
						reject((0, _response2.default)(ERROR, 'user is existed'));
					} else {

						var registerUser = new _user3.default({
							uid: user.uid,
							pwd: user.pwd
						});

						registerUser.save().then(function (_user) {
							infoer('register success', user.uid);
							resolve((0, _response2.default)(OK, 'success', _user));
						}).catch(function (err) {
							infoer('register failed', user.uid, 'unknown error');
							reject((0, _response2.default)(ERROR, 'unknown error'));
						});
					}
				}).catch(function (err) {
					errorer(err);
					reject((0, _response2.default)(ERROR, 'server error'));
				});
			}
		});
	},
	login: function login(user) {

		return new Promise(function (resolve, reject) {

			infoer('login start', user.uid);

			_user3.default.findOne({
				uid: user.uid
			}).then(function (_user) {

				if (_user) {

					if (_user.pwd === user.pwd) {

						infoer('login success', user.uid);

						resolve((0, _response2.default)(OK, 'success', _user));
					} else {

						infoer('login failed', user.uid, 'wrong pwd');

						reject((0, _response2.default)(ERROR, 'wrong pwd'));
					}
				} else {
					infoer('login failed', user.uid, 'user is not existed');
					reject((0, _response2.default)(ERROR, 'user is not existed'));
				}
			}).catch(function (err) {
				errorer(err);
				reject((0, _response2.default)(ERROR, 'server error'));
			});
		});
	}
};