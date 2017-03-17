import ResumeService from '../service/resume';
import status from '../entity/status';

import fs from 'fs-extra';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Display from '../view/display';
import { render2Html } from '../view';

const { OK, ERROR } = status;

export default {

    async getResume(ctx, next){

        let uid = ctx.params.uid;

        if(!uid){
            ctx.body = 'wrong query param';
            ctx.status = ERROR;
            return
        }
        
        try{

            let res = await ResumeService.get(uid);

            ctx.body = res;

        }catch(rej){

            ctx.body = rej;

        }

    },
    async modifyResume(ctx, next){

        let body = ctx.request.body;

        if(!body.token || !body.resume || !body.resume.uid){
            ctx.body = 'wrong request body'
            ctx.status = ERROR
            return
        }

        try{
            let token = await redisClient.getAsync(body.resume.uid);

            if(body.token !== token){
                ctx.body = 'token validate failed'
                ctx.status = ERROR
                return
            }

        }catch(err){
            ctx.body = 'unknown error'
            ctx.status = ERROR
            return
        }


        try{

            let res = await ResumeService.modify(body.resume);

            ctx.body = res;

        }catch(rej){

            ctx.body = rej;

        }

    },
    async publishResume(ctx, next){

        let {token, uid} = ctx.request.body;

        if(!token || !uid){
            ctx.body = 'wrong request body'
            ctx.status = ERROR
            return
        }

        try{
            let _token = await redisClient.getAsync(uid);

            if(_token !== token){
                ctx.body = 'token validate failed'
                ctx.status = ERROR
                return
            }

        }catch(err){
            ctx.body = 'unknown error'
            ctx.status = ERROR
            return
        }


        try{

            let res = await ResumeService.get(uid);

            let render = ReactDOMServer.renderToString(<Display resume={res.result}/>);

            fs.outputFileSync(`public/publish/${uid}.html`, render2Html(uid, render));
            
            ctx.body = {
                status: OK,
                messsage: 'success'
            };



        }catch(rej){
            ctx.body = {
                status: ERROR,
                message: 'server error'
            };

        }

    }

}
