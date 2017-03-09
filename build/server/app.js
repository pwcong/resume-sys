'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoose3 = require('../../config/mongoose.config');

var _mongoose4 = _interopRequireDefault(_mongoose3);

var _redis = require('../../config/redis.config');

var _redis2 = _interopRequireDefault(_redis);

var _redis3 = require('redis');

var _redis4 = _interopRequireDefault(_redis3);

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

var _LoggerFactory = require('./utils/LoggerFactory');

var _LoggerFactory2 = _interopRequireDefault(_LoggerFactory);

var _server = require('../../config/server.config');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * 替换为 bluebird 的 Promise，提高性能
 */
global.Promise = require('bluebird');

/**
 * 初始化MongoDB数据库连接
 */


_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(_mongoose4.default.uri, _mongoose4.default.options);
var db = _mongoose2.default.connection;

db.once('open', function () {
  console.log("MongoDB has been connected successfully");
});
db.on('error', function (err) {
  console.log("MongoDB connection error: ", err);
  process.exit(0);
});

/**
 * 初始化Redis数据库连接
 */


global.redisClient = _redis4.default.createClient(_redis2.default);

redisClient.on('error', function (error) {
  console.log('Redis connection error: ' + error);
  process.exit(0);
});
redisClient.on('connect', function () {
  console.log('Redis has been connected successfully');
});

/**
 * 打开服务器
 */


var app = new _koa2.default();
var httpLogger = _LoggerFactory2.default.getLogger('http');

process.env.NODE_ENV === 'production' ? app.use(async function (ctx, next) {
  httpLogger.trace('<-- %s %s ', ctx.method, ctx.url);
  var start = new Date();
  await next();
  var ms = new Date() - start;
  httpLogger.trace('--> %s %s %s %s ', ctx.method, ctx.url, ctx.status, ms + 'ms');
}) : app.use((0, _koaLogger2.default)());

app.use((0, _kcors2.default)());
app.use((0, _koaCompress2.default)());
app.use((0, _koaStatic2.default)('public'));
app.use((0, _koaStatic2.default)('build/client'));

app.use(_router2.default.routes()).use(_router2.default.allowedMethods());

app.listen(_server2.default.port, function () {
  console.log('Server has been listening on 127.0.0.1:' + _server2.default.port);
});