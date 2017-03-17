import Router from 'koa-router';
import KoaBody from 'koa-body';
import send from 'koa-send';

import serverConfig from '../../../config/server.config';

import UserController from '../controller/user';
import ResumeController from '../controller/resume';

var koaBody = new KoaBody();

const router = new Router();

router
    .get(serverConfig.api.displayResume.url, async function(ctx, next) {
        let uid = ctx.params.uid;
        await send(ctx, `public/publish/${uid}.html`);

    })
	.post(serverConfig.api.register.url, koaBody, UserController.register)
    .post(serverConfig.api.login.url, koaBody, UserController.login)
    .get(serverConfig.api.getResume.url, ResumeController.getResume)
	.post(serverConfig.api.modifyResume.url, koaBody, ResumeController.modifyResume)
    .post(serverConfig.api.publishResume.url, koaBody, ResumeController.publishResume);

export default router;