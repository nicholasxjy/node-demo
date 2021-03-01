'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var random = require('random-number');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var random__default = /*#__PURE__*/_interopDefaultLegacy(random);

function getRandomNumber(base) {
    if (base === void 0) { base = 1; }
    var num = random__default['default'](base);
    return num;
}

exports.default = getRandomNumber;
