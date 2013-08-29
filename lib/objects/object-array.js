var debug = require('dever').debug('ObjectArray'),
    error = require('dever').error('ObjectArray'),
    eventy = require('eventy'),
    slice = Array.prototype.slice,
    toString = Object.prototype.toString;


module.exports = function ObjectArray(data) {
  var array;

  var object = function() {
    if (toString.call(data) === '[object Array]') {
      /* handle ObjectArray(['a', 'b']) */
      array = data;
    } else {
      /* handle ObjectArray('a', 'b', 'c') */
      array = slice.call(arguments);
    }

    eventy(this);
    return this;
  }.apply({}, arguments)

  function destroy(object) {
    for (var i in object) {
      object[i] = undefined;
    }    
  }

  /* for console panel inspection */
  /*
  object.length = array.length;
  object.splice = function() {}
  */

  object.pop = function() {
    var result = array.pop();
    this.trigger('pop').trigger('change');
    return result;
  }

  object.push = function() {
    var result = array.push.apply(array, arguments);
    this.trigger('push').trigger('change');
    return result;
  }

  object.shift = function() {
    var result = array.shift()
    this.trigger('shift').trigger('change');
    return result;
  }

  object.unshift = function() {
    var result = array.unshift.apply(array, arguments);
    this.trigger('unshift').trigger('change');
    return result;
  }

  object.toString = function() {
    return array.toString();
  }

  object.toJSON = function() {
    return JSON.stringify(array);
  }

  object.inspect = function() {
    return this.toJSON()
  }

  object.typeOf = function() {
    return 'array';
  }

  object.lengthOf = function() {
    return array.length;
  }

  object.valueOf = function() {
    return array.valueOf();
  }

  object.empty = function() {
    array = new Array;
    this.trigger('empty').trigger('change');
    return this;
  }

  object.remove = function() {
    array = undefined;
    this.trigger('remove').trigger('change');
    destroy(this);
    this.valueOf = function() {
      return undefined;
    }
    return this;
  }

  return object;
}
