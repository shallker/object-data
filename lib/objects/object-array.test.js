var ObjectArray = require('./object-array');
var ok = require('assert').ok
var eq = require('assert').strictEqual

var log = function() {console.log.apply(console, arguments)}


var users = new ObjectArray('jack', 'rose')
eq(users.lengthOf(), 2)

var tags = new ObjectArray('js', 'css', 'html')

// log(tags)
eq(tags.lengthOf(), 3)
eq(tags.pop(), 'html')
eq(tags.lengthOf(), 2)
eq(tags.push('html'), 3)
eq(tags.lengthOf(), 3)
eq(tags.shift(), 'js')
eq(tags.lengthOf(), 2)
eq(tags.unshift('js'), 3)
eq(tags.lengthOf(), 3)
eq(tags.valueOf()[0], 'js')
eq(tags.valueOf()[1], 'css')
eq(tags.valueOf()[2], 'html')
eq(tags.typeOf(), 'array')
eq(tags.toString(), 'js,css,html')
eq(tags.toJSON(), '["js","css","html"]')

ok(tags.empty())
eq(tags.lengthOf(), 0)
eq(tags.valueOf().length, 0)
eq(tags.pop(), undefined)
eq(tags.toString(), '')
eq(tags.toJSON(), '[]')

ok(tags.remove())
eq(tags.valueOf(), undefined)
eq(tags.typeOf, undefined)
eq(tags.toString, undefined)
eq(tags.toJSON, undefined)

