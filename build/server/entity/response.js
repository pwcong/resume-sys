"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (status, message, result) {
    return {
        status: status,
        message: message,
        result: result
    };
};

;