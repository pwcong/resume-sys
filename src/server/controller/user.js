import uuidV1 from 'uuid/v1';
import UserService from '../service/user';
import status from '../entity/status';

const { OK, ERROR } = status;

export default {

    async login(ctx, next){

        let user = ctx.request.body;

        if(!user || !user.uid || !user.pwd){
            ctx.status = ERROR;
            ctx.body = 'wrong request body';
            return;
        }

        try{
            let res = await UserService.login(user);
            let uuid = uuidV1();

            ctx.body = Object.assign({}, res, {
                result: {
                    uid: res.result.uid,
                },
                token: uuid
            });

            redisClient.set(res.result.uid, uuid);

        }catch(rej){

            ctx.body = rej;

        }
        


    },
    async register(ctx, next){

        let user = ctx.request.body;

        if(!user || !user.uid || !user.pwd){
            ctx.status = ERROR;
            ctx.body = 'wrong request body';
            return;
        }

        try{
            let res = await UserService.register(user);
            let uuid = uuidV1();

            ctx.body = Object.assign({}, res, {
                token: uuid
            });

            redisClient.set(res.result.uid, uuid);

        }catch(rej){

            ctx.body = rej;

        }

    }

}