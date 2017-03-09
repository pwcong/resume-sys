'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _resume2 = require('../model/resume');

var _resume3 = _interopRequireDefault(_resume2);

var _LoggerFactory = require('../utils/LoggerFactory');

var _LoggerFactory2 = _interopRequireDefault(_LoggerFactory);

var _response = require('../entity/response');

var _response2 = _interopRequireDefault(_response);

var _status = require('../entity/status');

var _status2 = _interopRequireDefault(_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OK = _status2.default.OK,
    ERROR = _status2.default.ERROR;


var logger = _LoggerFactory2.default.getLogger('ResumeService');
var infoer = (0, _LoggerFactory.Infoer)(logger);
var errorer = (0, _LoggerFactory.Errorer)(logger);

exports.default = {
    get: function get(uid) {

        return new Promise(function (resolve, reject) {

            infoer('get start', uid);

            _resume3.default.findOne({
                uid: uid
            }).then(function (resume) {

                if (resume) {

                    infoer('get success', uid);
                    resolve((0, _response2.default)(OK, 'success', resume));
                } else {

                    var registerResume = new _resume3.default({
                        uid: uid
                    });

                    registerResume.save().then(function (_resume) {
                        infoer('get success', _resume.uid);
                        resolve((0, _response2.default)(OK, 'success', _resume));
                    }).catch(function (err) {
                        infoer('get failed', uid, 'unknown error');
                        reject((0, _response2.default)(ERROR, 'unknown error'));
                    });
                }
            }).catch(function (err) {
                errorer(err);
                reject((0, _response2.default)(ERROR, 'server error'));
            });
        });
    }
};