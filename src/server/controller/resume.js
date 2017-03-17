import ResumeService from '../service/resume';
import status from '../entity/status';

import fs from 'fs-extra';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Display from '../view/display';

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

            fs.outputFileSync(`public/publish/${uid}.html`, renderHtml(uid, render));
            
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

function renderHtml(uid, render){

    return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>${uid}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/font-awesome.min.css">
        <!-- Loading Bootstrap -->
        <link href="/css/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

        <!-- Loading Flat UI -->
        <link href="/css/flat-ui.min.css" rel="stylesheet">

        <link rel="shortcut icon" href="img/favicon.ico">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. -->
        <!--[if lt IE 9]>
        <script src="js/vendor/html5shiv.js"></script>
        <script src="js/vendor/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>

        <div id="app" class="container">${render}</div>

        <!-- jQuery (necessary for Flat UI's JavaScript plugins) -->
        <script src="/js/vendor/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="/js/vendor/video.js"></script>
        <script src="/js/flat-ui.min.js"></script>

    </body>
</html>`;

}