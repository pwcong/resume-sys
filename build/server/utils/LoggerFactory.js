'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Fataler = exports.Errorer = exports.Warnner = exports.Infoer = exports.Debuger = exports.Tracer = undefined;

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'production') {
	_fsExtra2.default.emptyDirSync('log');
	_log4js2.default.configure('config/log4js.json');
	console.log("Log4js has been configurated successfully");
}

var Tracer = exports.Tracer = function Tracer(logger) {

	return function (head, msg, err) {

		logger.trace(format(head, msg, err));
	};
};

var Debuger = exports.Debuger = function Debuger(logger) {

	return function (head, msg, err) {

		logger.debug(format(head, msg, err));
	};
};

var Infoer = exports.Infoer = function Infoer(logger) {

	return function (head, msg, err) {

		logger.info(format(head, msg, err));
	};
};

var Warnner = exports.Warnner = function Warnner(logger) {

	return function (head, msg, err) {

		logger.warn(format(head, msg, err));
	};
};

var Errorer = exports.Errorer = function Errorer(logger) {

	return function (err) {

		logger.error(err);
	};
};

var Fataler = exports.Fataler = function Fataler(logger) {

	return function (fatal) {

		logger.fatal(fatal);
	};
};

function format(head, msg, err) {

	return head + ' ===> ' + msg + (err ? ' ---> ' + err : '');
}

exports.default = _log4js2.default;