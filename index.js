var pkg = require('./package'),
    ObjectData = require('./lib/object-data'),
    ObjectDate = require('./lib/objects/object-date'),
    ObjectArray = require('./lib/objects/object-array'),
    ObjectNumber = require('./lib/objects/object-number'),
    ObjectString = require('./lib/objects/object-string'),
    ObjectBoolean = require('./lib/objects/object-boolean');


exports = module.exports = ObjectData;

exports.ObjectDate = ObjectDate;

exports.ObjectArray = ObjectArray;

exports.ObjectNumber = ObjectNumber;

exports.ObjectString = ObjectString;

exports.ObjectBoolean = ObjectBoolean;

exports.version = pkg.version;
