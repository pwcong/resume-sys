import Router from 'koa-router';
import KoaBody from 'koa-body';
import serverConfig from '../../../config/server.config';

import UserController from '../controller/user';
import ResumeController from '../controller/resume';

var koaBody = new KoaBody();

const router = new Router();

router
	.post(serverConfig.api.register.url, koaBody, UserController.register)
    .post(serverConfig.api.login.url, koaBody, UserController.login)
    .get(serverConfig.api.getResume.url, ResumeController.getResume)
	.post(serverConfig.api.modifyResume.url, koaBody, ResumeController.modifyResume);

export default router;