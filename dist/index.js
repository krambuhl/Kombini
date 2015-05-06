'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _extend2 = require('extend');

var _extend3 = _interopRequireDefault(_extend2);

var _objectPick = require('object-pick');

var _objectPick2 = _interopRequireDefault(_objectPick);

var _objectOmit = require('object-omit');

var _objectOmit2 = _interopRequireDefault(_objectOmit);

exports['default'] = {
	mixin: function mixin(obj) {
		var opts = arguments[1] === undefined ? {} : arguments[1];

		var filter = _objectOmit2['default'](this, 'mixin', 'extend');
		return _extend3['default'](obj, opts.keys ? _objectPick2['default'](filter, opts.keys) : filter);
	},

	extend: function extend(obj) {
		return _extend3['default']({}, this, obj);
	}
};
module.exports = exports['default'];
