var debug = require('dever').debug('ObjectArray'),
    error = require('dever').error('ObjectArray'),
    eventy = require('eventy');


module.exports = function ObjectString(data) {
  var string;

  var object = function() {
    string = new String(data);
    eventy(this);
    return this;
  }.call({})

  function destroy(object) {
    for (var i in object) {
      object[i] = undefined;
    }
  }

  object.update = function(data) {
    string = new String(data);
    this.trigger('update', this.valueOf()).trigger('change');
    return this;
  }

  object.toJSON = function() {
    return JSON.stringify(string);
  }

  object.toString = function() {
    return string.toString();
  }

  object.inspect = function() {
    return this.valueOf();
  }

  object.typeOf = function() {
    return typeof this.valueOf();
  }

  object.valueOf = function() {
    return string.valueOf();
  }

  object.lengthOf = function() {
    return string.length;
  }

  object.empty = function() {
    string = new String;
    this.trigger('empty').trigger('change');
    return this;
  }

  object.remove = function() {
    string = undefined;
    this.trigger('remove').trigger('change');
    destroy(this);
    this.valueOf = function() {
      return undefined;
    };
    return this;
  }

  return object;
}
