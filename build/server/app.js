'use strict';

var _server = require('../../config/server.config');

var _server2 = _interopRequireDefault(_server);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

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

_mongoose2.default.Promise = Promise;

/**
 * 连接数据库
 */

_mongoose2.default.connect(_server2.default.mongodbUrl);
var db = _mongoose2.default.connection;

db.once('open', function () {
  console.log("MongoDB has been connected");
});
db.on('error', function (err) {
  console.log("MongoDB connection error: ", err);
  process.exit(0);
});

var app = new _koa2.default();

app.use((0, _koaLogger2.default)());
app.use((0, _kcors2.default)());
app.use((0, _koaCompress2.default)());
app.use((0, _koaStatic2.default)('public'));
app.use((0, _koaStatic2.default)('build/client'));

app.use(_router2.default.routes()).use(_router2.default.allowedMethods());

app.listen(_server2.default.port, function () {
  console.log('Server has been listening on 127.0.0.1:' + _server2.default.port);
});