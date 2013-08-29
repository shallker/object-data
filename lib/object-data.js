var debug = require('dever').debug('ObjectData'),
    error = require('dever').error('ObjectData'),
    warn = require('dever').warn('ObjectData'),
    ObjectDate = require('./objects/object-date'),
    ObjectArray = require('./objects/object-array'),
    ObjectNumber = require('./objects/object-number'),
    ObjectString = require('./objects/object-string'),
    ObjectBoolean = require('./objects/object-boolean'),
    eventy = require('eventy'),
    toString = Object.prototype.toString;


module.exports = function(schema) {

  function validSchema(schema) {
    for (var field in schema) {
      if (toString.call(schema[field] === '[object Object]')) {
        if (!validSchema(schema[field])) {
          return false;
        }
        continue;
      }
      if (toString.call(schema[field]) !== '[object Function]') {
        error('invalid schema field type');
        return false;
      }        
    }
    return true;
  }

  function ObjectData(data) {

    var object = function() {
      eventy(this);
      return this;
    }.call(fillData(data, schema))

    function fillData(data, schema) {
      var result = {};
      for (var field in schema) {
        if (typeof data[field] === 'undefined') {
          debug('data field not exists', field);
          continue;
        }
        if (toString.call(schema[field]) === '[object Object]') {
          if (toString.call(data[field]) === '[object Object]') {
            result[field] = fillData(data[field], schema[field]);
          }
          continue;
        }
        var fieldType = toString.call(new schema[field]);
        if (toString.call(data[field]) !== fieldType) {
          warn('data type not equal');
        }
        switch (fieldType) {
          case '[object Number]':
            result[field] = new ObjectNumber(data[field]);
            break;
          case '[object String]':
            result[field] = new ObjectString(data[field]);
            break;
          case '[object Date]':
            result[field] = new ObjectDate(data[field]);
            break;
          case '[object Array]':
            result[field] = new ObjectArray(data[field]);
            break;
          case '[object Boolean]':
            result[field] = new ObjectBoolean(data[field]);
            break;
        }
      }
      return result;
    }

    function extractData(object, schema) {
      var result = {};
      for (var field in schema) {
        if (typeof object[field] === 'undefined') {
          continue;
        }
        if (toString.call(schema[field]) === '[object Object]') {
          if (toString.call(object[field]) === '[object Object]') {
            result[field] = extractData(object[field], schema[field]);
          }
          continue;
        }
        result[field] = object[field].valueOf()
      }
      return result;
    }

    object.valueOf = function() {
      return extractData(this, schema);
    }

    object.toJSON = function() {
      return JSON.stringify(this.valueOf());
    }

    object.toString = function() {

    }

    object.destroy = function() {

    }

    return object;
  }

  if (validSchema(schema)) {
    return ObjectData;
  }
}
