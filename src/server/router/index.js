import Router from 'koa-router';
import KoaBody from 'koa-body';
import serverConfig from '../../../config/server.config';

import UserController from '../controller/user';

var koaBody = new KoaBody();

const router = new Router();

router
	.post(serverConfig.api.register.url, koaBody, UserController.register)
    .post(serverConfig.api.login.url, koaBody, UserController.login);
	
export default router;