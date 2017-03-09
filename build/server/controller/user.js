'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

var _user = require('../service/user');

var _user2 = _interopRequireDefault(_user);

var _status = require('../entity/status');

var _status2 = _interopRequireDefault(_status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OK = _status2.default.OK,
    ERROR = _status2.default.ERROR;
exports.default = {
    login: async function login(ctx, next) {

        var user = ctx.request.body;

        if (!user || !user.uid || !user.pwd) {
            ctx.status = ERROR;
            ctx.body = 'wrong request body';
            return;
        }

        try {
            var res = await _user2.default.login(user);
            var uuid = (0, _v2.default)();

            ctx.body = Object.assign({}, res, {
                result: {
                    uid: res.result.uid
                },
                token: uuid
            });

            redisClient.set(res.result.uid, uuid);
        } catch (rej) {

            ctx.body = rej;
        }
    },
    register: async function register(ctx, next) {

        var user = ctx.request.body;

        if (!user || !user.uid || !user.pwd) {
            ctx.status = ERROR;
            ctx.body = 'wrong request body';
            return;
        }

        try {
            var res = await _user2.default.register(user);
            var uuid = (0, _v2.default)();

            ctx.body = Object.assign({}, res, {
                token: uuid
            });

            redisClient.set(res.result.uid, uuid);
        } catch (rej) {

            ctx.body = rej;
        }
    }
};