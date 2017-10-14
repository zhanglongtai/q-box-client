"use strict";

var _log = require("./log-compiled");

var _log2 = _interopRequireDefault(_log);

var _objectDeepMerge = require("./objectDeepMerge-compiled");

var _objectDeepMerge2 = _interopRequireDefault(_objectDeepMerge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function beginTest() {
    var arg1 = {};
    var arg2 = {
        a: 1,
        b: {
            c: 1,
            d: 1
        }
    };
    var arg3 = {
        b: {
            c: 3
        }
    };
    var arg4 = {
        a: 2,
        b: {
            c: 1,
            d: 1,
            f: {
                e: 1,
                g: 1
            }
        }
    };

    var result1 = (0, _objectDeepMerge2.default)(arg1, arg2, arg3);
    (0, _log2.default)({
        a: 1,
        b: {
            c: 3,
            d: 1
        }
    }, result1);

    var result2 = (0, _objectDeepMerge2.default)(arg3, arg4);
    (0, _log2.default)({
        a: 2,
        b: {
            c: 1,
            d: 1,
            f: {
                e: 1,
                g: 1
            }
        }
    }, result2);
}

beginTest();
