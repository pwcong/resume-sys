'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaLogger = require('koa-logger');

var _koaLogger2 = _interopRequireDefault(_koaLogger);

var _kcors = require('kcors');

var _kcors2 = _interopRequireDefault(_kcors);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaCompress = require('koa-compress');

var _koaCompress2 = _interopRequireDefault(_koaCompress);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();

app.use((0, _koaLogger2.default)());
app.use((0, _kcors2.default)());
app.use((0, _koaCompress2.default)());
app.use((0, _koaStatic2.default)('public'));
app.use((0, _koaStatic2.default)('build/client'));

app.use(_router2.default.routes()).use(_router2.default.allowedMethods());

app.listen(3000, function () {
  console.log('serve has been listening on port 3000');
});