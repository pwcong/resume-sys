import ResumeService from '../service/resume';
import status from '../entity/status';

const { OK, ERROR } = status;

export default {

    async getResume(ctx, next){

        let uid = ctx.params.uid;

        if(!uid){
            ctx.body = 'wrong query param';
            ctx.status = ERROR;
        }
        
        try{

            let res = await ResumeService.get(uid);

            ctx.body = res;

        }catch(rej){

            ctx.body = rej;

        }

    }


}