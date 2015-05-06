var Kombini = require('../dist/index.js');
var test = require('tape');

var Tester = Kombini.extend({
  text: 'test',
  func: function() {
    return 'super';
  }
});

test('should maintain proper context', function(t) {
  t.plan(2);

  var test = Kombini.extend({
    slapCount: 0,
    slap: function () {
      this.slapCount++;
    }
  }).mixin({
    a: 'b'
  });

  t.equal(test.slapCount, 0);
  test.slap();
  t.equal(test.slapCount, 1);
});


test('should not mixin kombini functions', function(t) {
  t.plan(2);

  var test = Tester.mixin({
    a: 'b'
  });

  t.equal(test.mixin, undefined);
  t.equal(test.extend, undefined);
});

test('should mixin strings', function(t) {
  t.plan(1);

  var test = Tester.mixin({
    a: 'b'
  });

  t.equal(test.text, 'test');
});



test('should mixin functions', function(t) {
  t.plan(1);

  var test = Tester.mixin({
    a: 'b'
  });

  t.equal(test.func(), 'super');
});

test('should mixin only specified keys', function(t) {
  t.plan(2);

  var test = Tester.mixin({
    a: 'b'
  }, {
    keys: 'text'
  });

  t.equal(test.text, 'test');
  t.equal(test.func, undefined);
});
