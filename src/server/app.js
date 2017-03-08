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

app.listen(3000, () => {
    console.log('serve has been listening on port 3000');
});
