'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fsExtra2.default.emptyDirSync('log');

if (process.env.NODE_ENV === 'production') {
	_log4js2.default.configure('config/log4js.json');
	console.log("Log4js has been configurated successfully");
}

exports.default = _log4js2.default;