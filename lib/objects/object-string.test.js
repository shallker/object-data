var ObjectString = require('./object-string');
var ok = require('assert').ok
var eq = require('assert').strictEqual

var log = function() {console.log.apply(console, arguments)}


var email = ObjectString('jack@mail.com')

// log(email)
eq(email.typeOf(), 'string')
eq(email.valueOf(), 'jack@mail.com')
eq(email.lengthOf(), 13)
eq(email.toString(), 'jack@mail.com')
eq(email.toJSON(), '"jack@mail.com"')
ok(email.update('new@mail.com'))
eq(email.valueOf(), 'new@mail.com')
eq(email.lengthOf(), 12)

ok(email.empty())
eq(email.lengthOf(), 0)
eq(email.valueOf(), '')
eq(email.toString(), '')
eq(email.toJSON(), '""')

ok(email.remove())
eq(email.valueOf(), undefined)
eq(email.typeOf, undefined)
eq(email.toString, undefined)
eq(email.toJSON, undefined)
