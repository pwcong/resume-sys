import config from '../../config/server.config';

/*
 * 替换为 bluebird 的 Promise，提高性能
 */
global.Promise = require('bluebird');


/**
 * 初始化MongoDB数据库链接
 */
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.uri, config.mongodb.options);
let db = mongoose.connection;

db.once('open', () => {
  console.log("MongoDB has been connected successfully");
});
db.on('error', err => {
  console.log("MongoDB connection error: ", err);
  process.exit(0);
});

// /*
//  * 初始化Redis数据库连接
//  */
// import redisConfig from '../../config/redis.config';
// import redis from 'redis';

// global.redisClient = redis.createClient(redisConfig);
// redisClient.on('error', error => {
// 	console.log('Redis connection error: ' + error);
// 	process.exit(0);
// })
// redisClient.on('connect', () => {
// 	console.log('Redis has been connected successfully');
// })


/**
 * 打开服务器
 */
import Koa from 'koa';
import koaLogger from 'koa-logger';
import cors from 'kcors';
import server from 'koa-static';
import compress from 'koa-compress';
import router from './router';
import LoggerFactory from './utils/LoggerFactory';

const app = new Koa();
const httpLogger = LoggerFactory.getLogger('http');

process.env.NODE_ENV === 'production' ? app.use(async function (ctx, next) {
  httpLogger.info('<-- %s %s ', ctx.method, ctx.url);
  const start = new Date();
  await next();
  const ms = new Date() - start;
  httpLogger.info('--> %s %s %s %s ', ctx.method, ctx.url, ctx.status, ms + 'ms');
}) : app.use(koaLogger());


app.use(cors());
app.use(compress());
app.use(server('public'));
app.use(server('build/client'));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, () => {
    console.log(`Server has been listening on 127.0.0.1:${config.port}`);
});
