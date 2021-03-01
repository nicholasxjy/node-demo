'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var random = require('lodash/random');
var fromNow = require('commons.js/functions/fromNow');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var random__default = /*#__PURE__*/_interopDefaultLegacy(random);
var fromNow__default = /*#__PURE__*/_interopDefaultLegacy(fromNow);

function getRandom(base) {
    if (base === void 0) { base = 1; }
    return random__default['default'](base);
}
function fromNowOn(time) {
    return fromNow__default['default'](time);
}

exports.fromNowOn = fromNowOn;
exports.getRandom = getRandom;
