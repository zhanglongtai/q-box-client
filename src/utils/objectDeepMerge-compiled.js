'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function baseDeepMerge(target, source) {
    var newObject = {};
    var targetKeys = Object.keys(target);
    var sourceKeys = Object.keys(source);
    var stackKeys = sourceKeys.slice();

    for (var i = 0; i < targetKeys.length; i++) {
        var k = targetKeys[i];
        var sIndex = sourceKeys.indexOf(k);

        if (sIndex !== -1) {
            if (_typeof(target[k]) === 'object' || _typeof(source[k]) === 'object') {
                newObject[k] = baseDeepMerge(target[k], source[k]);
                stackKeys = newArrayAfterPick(stackKeys, sIndex);
            } else {
                newObject[k] = source[k];
                stackKeys = newArrayAfterPick(stackKeys, sIndex);
            }
        } else {
            newObject[k] = target[k];
        }
    }

    if (stackKeys.length !== 0) {
        for (var _i = 0; _i < stackKeys.length; _i++) {
            var _k = stackKeys[_i];
            newObject[_k] = source[_k];
        }
    }

    return newObject;
}

function newArrayAfterPick(arr, index) {
    var tempArr = arr.slice();
    var newArr = arr.slice(0, index).concat(tempArr.slice(index + 1));
    return newArr;
}

function objectDeepMerge(target, source) {
    var argKeys = Object.keys(arguments);
    if (argKeys.length > 2) {
        var stack = [];

        for (var i = 0; i < argKeys.length; i++) {
            stack.push(arguments[argKeys[i]]);
        }

        var newObject = null;
        while (stack.length > 1) {
            var l = stack.length;
            newObject = baseDeepMerge(stack[l - 2], stack[l - 1]);
            stack.pop();
            stack[l - 2] = newObject;
        }

        return newObject;
    } else {
        return baseDeepMerge(target, source);
    }
}

exports.default = objectDeepMerge;
