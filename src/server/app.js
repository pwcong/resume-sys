import config from '../../config/server.config';

/**
 * 连接数据库
 */
import mongoose from 'mongoose';
mongoose.Promise = Promise;
mongoose.connect(config.mongodbUrl);
let db = mongoose.connection;

db.once('open', () => {
  console.log("MongoDB has been connected");
});
db.on('error', err => {
  console.log("MongoDB connection error: ", err);
  process.exit(0);
});

/**
 * 打开服务器
 */
import Koa from 'koa';
import logger from 'koa-logger';
import cors from 'kcors';
import server from 'koa-static';
import compress from 'koa-compress';
import router from './router';

const app = new Koa();

app.use(logger());
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
