'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var random = require('lodash/random');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var random__default = /*#__PURE__*/_interopDefaultLegacy(random);

function getRandom(base) {
    if (base === void 0) { base = 1; }
    return random__default['default'](base);
}

exports.default = getRandom;
