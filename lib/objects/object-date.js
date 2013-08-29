var debug = require('dever').debug('ObjectArray'),
    error = require('dever').error('ObjectArray'),
    eventy = require('eventy');


module.exports = function ObjectDate(data) {
  var date;

  var object = function() {
    date = new Date(data);
    eventy(this);
    return this;
  }.call({})

  function destroy(object) {
    for (var i in object) {
      object[i] = undefined;
    }
  }

  object.update = function(data) {
    date = new Date(data);
    this.trigger('update', this.valueOf()).trigger('change');
    return this;
  }

  object.toJSON = function() {
    return JSON.stringify(date);
  }

  object.toString = function() {
    return date.toString();
  }

  object.inspect = function() {
    return this.toJSON();
  }

  object.typeOf = function() {
    return 'date';
  }

  object.valueOf = function() {
    return date.valueOf();
  }

  object.lengthOf = function() {
    return this.toString().length;
  }

  object.reset = function() {
    date = new Date;
    this.trigger('reset').trigger('change');
    return this;
  }

  object.remove = function() {
    date = undefined;
    this.trigger('remove').trigger('change');
    destroy(this);
    this.valueOf = function() {
      return undefined;
    }
    return this;
  }

  return object; 
}
