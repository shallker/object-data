var ObjectBoolean = require('./object-boolean');
var ok = require('assert').ok
var eq = require('assert').strictEqual

var log = function() {console.log.apply(console, arguments)}

var activated = ObjectBoolean();

// log(activated)
eq(activated.typeOf(), 'boolean')
eq(activated.valueOf(), false)
eq(activated.toString(), 'false')
eq(activated.toJSON(), 'false')

ok(activated.update('yes'))
eq(activated.typeOf(), 'boolean')
eq(activated.valueOf(), true)
eq(activated.toString(), 'true')
eq(activated.toJSON(), 'true')

ok(activated.update('no'))
eq(activated.typeOf(), 'boolean')
eq(activated.valueOf(), true)
eq(activated.toString(), 'true')
eq(activated.toJSON(), 'true')

ok(activated.update(0))
eq(activated.typeOf(), 'boolean')
eq(activated.valueOf(), false)
eq(activated.toString(), 'false')
eq(activated.toJSON(), 'false')

ok(activated.update(1))
eq(activated.typeOf(), 'boolean')
eq(activated.valueOf(), true)
eq(activated.toString(), 'true')
eq(activated.toJSON(), 'true')

ok(activated.update(false))
eq(activated.typeOf(), 'boolean')
eq(activated.valueOf(), false)
eq(activated.toString(), 'false')
eq(activated.toJSON(), 'false')

ok(activated.update(true))
eq(activated.typeOf(), 'boolean')
eq(activated.valueOf(), true)
eq(activated.toString(), 'true')
eq(activated.toJSON(), 'true')

ok(activated.remove())
eq(activated.valueOf(), undefined)
eq(activated.typeOf, undefined)
eq(activated.toString, undefined)
eq(activated.toJSON, undefined)
