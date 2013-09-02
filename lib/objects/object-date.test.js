var ObjectDate = require('./object-date');
var ok = require('assert').ok
var eq = require('assert').strictEqual

var log = function() {console.log.apply(console, arguments)}

var date = 'Tue Aug 27 2013 03:52:06 GMT+0800 (CST)';
var value = 1377546726000;
var born = ObjectDate(date);

// log(born)
eq(born.typeOf(), 'date')
eq(typeof born.valueOf(), 'number')
eq(born.valueOf(), value)
eq(born.lengthOf(), 'Tue Aug 27 2013 03:52:06 GMT+0800 (CST)'.length)
eq(born.toString(), 'Tue Aug 27 2013 03:52:06 GMT+0800 (CST)')
eq(born.toJSON(), '"2013-08-26T19:52:06.000Z"')

ok(born.update('Tue Aug 27 2013 04:05:47 GMT+0800 (CST)'))
eq(born.typeOf(), 'date')
eq(typeof born.valueOf(), 'number')
eq(born.valueOf(), 1377547547000)
eq(born.lengthOf(), 'Tue Aug 27 2013 04:05:47 GMT+0800 (CST)'.length)
eq(born.toString(), 'Tue Aug 27 2013 04:05:47 GMT+0800 (CST)')
eq(born.toJSON(), '"2013-08-26T20:05:47.000Z"')

ok(born.update('2013-08-26T20:05:47.756Z'))
eq(born.typeOf(), 'date')
eq(typeof born.valueOf(), 'number')
eq(born.valueOf(), 1377547547756)
eq(born.lengthOf(), 'Tue Aug 27 2013 04:05:47 GMT+0800 (CST)'.length)
eq(born.toString(), 'Tue Aug 27 2013 04:05:47 GMT+0800 (CST)')
eq(born.toJSON(), '"2013-08-26T20:05:47.756Z"')

ok(born.reset())
eq(born.typeOf(), 'date')
eq(typeof born.valueOf(), 'number')
// eq(born.valueOf(), 0)
// eq(born.lengthOf(), 1)
// eq(born.toString(), '0')
// eq(born.toJSON(), '0')

ok(born.remove())
eq(born.valueOf(), undefined)
eq(born.typeOf, undefined)
eq(born.toString, undefined)
eq(born.toJSON, undefined)
