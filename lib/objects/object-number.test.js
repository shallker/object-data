var ObjectNumber = require('./object-number');
var ok = require('assert').ok
var eq = require('assert').strictEqual

var log = function() {console.log.apply(console, arguments)}

var age = ObjectNumber('22')

// log(age)
eq(age.typeOf(), 'number')
eq(typeof age.valueOf(), 'number')
eq(age.valueOf(), 22)
eq(age.lengthOf(), 2)
eq(age.toString(), '22')
eq(age.toJSON(), '22')

ok(age.update('25'))
eq(age.typeOf(), 'number')
eq(typeof age.valueOf(), 'number')
eq(age.valueOf(), 25)
eq(age.lengthOf(), 2)
eq(age.toString(), '25')
eq(age.toJSON(), '25')

ok(age.update(29))
eq(age.typeOf(), 'number')
eq(typeof age.valueOf(), 'number')
eq(age.valueOf(), 29)
eq(age.lengthOf(), 2)
eq(age.toString(), '29')
eq(age.toJSON(), '29')

ok(age.empty())
eq(age.typeOf(), 'number')
eq(typeof age.valueOf(), 'number')
eq(age.valueOf(), 0)
eq(age.lengthOf(), 1)
eq(age.toString(), '0')
eq(age.toJSON(), '0')

ok(age.remove())
eq(age.valueOf(), undefined)
eq(age.typeOf, undefined)
eq(age.toString, undefined)
eq(age.toJSON, undefined)
