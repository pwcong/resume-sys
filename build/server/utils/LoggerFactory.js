'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fataler = exports.errorer = exports.warnner = exports.infoer = exports.debuger = exports.tracer = undefined;

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

var tracer = exports.tracer = function tracer(logger) {

	return function (head, msg, err) {

		logger.trace(format(head, msg, err));
	};
};

var debuger = exports.debuger = function debuger(logger) {

	return function (head, msg, err) {

		logger.debug(format(head, msg, err));
	};
};

var infoer = exports.infoer = function infoer(logger) {

	return function (head, msg, err) {

		logger.info(format(head, msg, err));
	};
};

var warnner = exports.warnner = function warnner(logger) {

	return function (head, msg, err) {

		logger.warn(format(head, msg, err));
	};
};

var errorer = exports.errorer = function errorer(logger) {

	return function (err) {

		logger.error(err);
	};
};

var fataler = exports.fataler = function fataler(logger) {

	return function (fatal) {

		logger.fatal(fatal);
	};
};

function format(head, msg, err) {

	return head + ' ===> ' + msg + (err ? ' ---> ' + err : '');
}

exports.default = _log4js2.default;