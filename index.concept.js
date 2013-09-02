
/*

var ObjectData = require('object-data')
var ObjectDate = require('object-data').ObjectDate
var ObjectArray = require('object-data').ObjectArray
var ObjectNumber = require('object-data').ObjectNumber
var ObjectString = require('object-data').ObjectString
var ObjectBoolean = require('object-data').ObjectBoolean


var userData = {
  id: 123,
  name: {
    first: 'Jack',
    last: 'Wang'
  },
  born: new Date(),
  password: 'password',
  email: 'jack@mail.com',
  smart: false,
  hobbies: ['music', 'movie']
}

var userSchema = {
  id: Number,
  name: {
    first: String,
    last: String
  },
  born: Date,
  password: String,
  email: String,
  hobbies: Array,
  smart: Boolean,
}

var ObjectUser = ObjectData(userSchema);

var user = new ObjectUser(userData);

user.id.update(25)
user.id.typeOf()
user.id.valueOf()
user.id.lengthOf()
user.id.toString()
user.id.toJSON()
user.id.on('update', function(value) {
  console.log('new value', vlaue);
  // or
  console.log('new value', this.valueOf());
})
user.id.on('empty', function() {})
user.id.on('remove', function() {})
user.id.on('change', function() {})
user.id.off('update', function() {})
user.id.off('empty', function() {})
user.id.off('remove', function() {})
user.id.off('change', function() {})
user.id.trigger('update')
user.id.trigger('empty')
user.id.trigger('remove')
user.id.trigger('change')
user.id.empty()
user.id.remove()

user.valueOf()
user.toJSON()
user.toString()
user.destroy()

*/