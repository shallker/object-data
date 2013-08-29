var debug = require('dever').debug('ObjectArray'),
    error = require('dever').error('ObjectArray'),
    eventy = require('eventy');


module.exports = function ObjectBoolean(data) {
  var boolean;

  var object = function() {
    boolean = new Boolean(data);
    eventy(this);
    return this;
  }.call({})

  function destroy(object) {
    for (var i in object) {
      object[i] = undefined;
    }
  }

  object.update = function(data) {
    boolean = new Boolean(data);
    this.trigger('update', this.valueOf()).trigger('change');
    return this;
  }

  object.toJSON = function() {
    return JSON.stringify(boolean);
  }

  object.toString = function() {
    return boolean.toString();
  }

  object.inspect = function() {
    return this.valueOf();
  }

  object.typeOf = function() {
    return typeof this.valueOf();
  }

  object.valueOf = function() {
    return boolean.valueOf();
  }

  object.remove = function() {
    boolean = undefined;
    this.trigger('remove').trigger('change');
    destroy(this);
    this.valueOf = function() {
      return undefined
    };
    return this;
  }

  return object;  
}
