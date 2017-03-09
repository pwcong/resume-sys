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
                }

                try {

                        var res = await _resume2.default.get(uid);

                        ctx.body = res;
                } catch (rej) {

                        ctx.body = rej;
                }
        }
};