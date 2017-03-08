import Router from 'koa-router';
import KoaBody from 'koa-body';

var koaBody = new KoaBody();

const router = new Router();

router
	.get('/:str',async(ctx, next) => {
        ctx.body = ctx.params.str;
    });
	
export default router;