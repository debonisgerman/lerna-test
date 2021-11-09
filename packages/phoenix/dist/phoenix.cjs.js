'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var phoenixButton = require('@pgdbv/phoenix-button');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Text = function Text(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("p", null, children);
};

Object.defineProperty(exports, 'Button', {
  enumerable: true,
  get: function () { return phoenixButton.Button; }
});
exports.Text = Text;
