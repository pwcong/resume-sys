'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaBody = require('koa-body');

var _koaBody2 = _interopRequireDefault(_koaBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var koaBody = new _koaBody2.default();

var router = new _koaRouter2.default();

router.get('/:str', async function (ctx, next) {
  ctx.body = ctx.params.str;
});

exports.default = router;