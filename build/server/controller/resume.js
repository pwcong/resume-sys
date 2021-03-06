'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _resume = require('../service/resume');

var _resume2 = _interopRequireDefault(_resume);

var _status = require('../entity/status');

var _status2 = _interopRequireDefault(_status);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _display = require('../view/display');

var _display2 = _interopRequireDefault(_display);

var _view = require('../view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OK = _status2.default.OK,
    ERROR = _status2.default.ERROR;
exports.default = {
        getResume: async function getResume(ctx, next) {

                var uid = ctx.params.uid;

                if (!uid) {
                        ctx.body = 'wrong query param';
                        ctx.status = ERROR;
                        return;
                }

                try {

                        var res = await _resume2.default.get(uid);

                        ctx.body = res;
                } catch (rej) {

                        ctx.body = rej;
                }
        },
        modifyResume: async function modifyResume(ctx, next) {

                var body = ctx.request.body;

                if (!body.token || !body.resume || !body.resume.uid) {
                        ctx.body = 'wrong request body';
                        ctx.status = ERROR;
                        return;
                }

                try {
                        var token = await redisClient.getAsync(body.resume.uid);

                        if (body.token !== token) {
                                ctx.body = 'token validate failed';
                                ctx.status = ERROR;
                                return;
                        }
                } catch (err) {
                        ctx.body = 'unknown error';
                        ctx.status = ERROR;
                        return;
                }

                try {

                        var res = await _resume2.default.modify(body.resume);

                        ctx.body = res;
                } catch (rej) {

                        ctx.body = rej;
                }
        },
        publishResume: async function publishResume(ctx, next) {
                var _ctx$request$body = ctx.request.body,
                    token = _ctx$request$body.token,
                    uid = _ctx$request$body.uid;


                if (!token || !uid) {
                        ctx.body = 'wrong request body';
                        ctx.status = ERROR;
                        return;
                }

                try {
                        var _token = await redisClient.getAsync(uid);

                        if (_token !== token) {
                                ctx.body = 'token validate failed';
                                ctx.status = ERROR;
                                return;
                        }
                } catch (err) {
                        ctx.body = 'unknown error';
                        ctx.status = ERROR;
                        return;
                }

                try {

                        var res = await _resume2.default.get(uid);

                        var render = _server2.default.renderToString(_react2.default.createElement(_display2.default, { resume: res.result }));

                        _fsExtra2.default.outputFileSync('public/publish/' + uid + '.html', (0, _view.render2Html)(uid, render));

                        ctx.body = {
                                status: OK,
                                messsage: 'success'
                        };
                } catch (rej) {
                        ctx.body = {
                                status: ERROR,
                                message: 'server error'
                        };
                }
        }
};