import extend from 'extend';
import pick from 'object-pick';
import omit from 'object-omit';

export default {
	mixin: function(obj, opts = {}) {
		var filter = omit(this, 'mixin', 'extend');
		return extend(obj, opts.keys ? pick(filter, opts.keys) : filter);
	},

	extend: function(obj) {
		return extend({}, this, obj);
	}
};
