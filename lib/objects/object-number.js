var debug = require('dever').debug('ObjectArray'),
    error = require('dever').error('ObjectArray'),
    eventy = require('eventy');


module.exports = function ObjectNumber(data) {
  var number;

  var object = function() {
    number = new Number(data);
    eventy(this);
    return this;
  }.call({})

  function destroy(object) {
    for (var i in object) {
      object[i] = undefined;
    }
  }

  object.update = function(data) {
    number = new Number(data);
    this.trigger('update', this.valueOf()).trigger('change');
    return this;
  }

  object.toJSON = function() {
    return JSON.stringify(number);
  }

  object.toString = function() {
    return number.toString()
  }

  object.inspect = function() {
    return this.valueOf();
  }

  object.typeOf = function() {
    return typeof this.valueOf();
  }

  object.valueOf = function() {
    return number.valueOf();
  }

  object.lengthOf = function() {
    return this.toString().length;
  }

  object.empty = function() {
    number = new Number;
    this.trigger('empty').trigger('change');
    return this;
  }

  object.remove = function() {
    number = undefined;
    this.trigger('remove').trigger('change');
    destroy(this);
    this.valueOf = function() {
      return undefined;
    }
    return this;
  }

  return object;
}
