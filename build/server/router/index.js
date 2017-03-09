'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

var _server = require('../../../config/server.config');

var _server2 = _interopRequireDefault(_server);

var _user = require('../controller/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var koaBody = new _koaBody2.default();

var router = new _koaRouter2.default();

router.post(_server2.default.api.register.url, koaBody, _user2.default.register).post(_server2.default.api.login.url, koaBody, _user2.default.login);

exports.default = router;