'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _resume = require('../service/resume');

var _resume2 = _interopRequireDefault(_resume);

var _status = require('../entity/status');

var _status2 = _interopRequireDefault(_status);

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
        }
};