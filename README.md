# Kombini

A basic interface for creating object mixins.

## Static Methods


### Kombini.extend(obj)

Defines a new Kombini mixin.

``` js
let SlapMixin = Kombini.extend({
  slapCount: 0,
  slap: function () {
    this.slapCount++;
  }
});
```


### Kombini.mixin(obj, opts)

Extends interface into a target object.

```js
var person = { name: 'Billy' }
SlapMixin.mixin(person);

person.slapCount // ==> 0
person.slap();
person.slapCount // ==> 1
```
