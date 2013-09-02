 // prototype

var ObjectData = require('./object-data');

var userData = {
  id: 123,
  name: {
    first: 'Jack',
    last: 'Wang'
  },
  born: '1989-09-03',
  join: new Date,
  password: 'mysecret',
  email: 'jack@mail.com',
  smart: 'yes',
  hobbies: ['music', 'movie'],
  extra: 'bom'
}

var userSchema = {
  id: Number,
  name: {
    first: String,
    last: String
  },
  born: Date,
  join: Date,
  password: String,
  email: String,
  hobbies: Array,
  smart: Boolean,
}

var ObjectUser = ObjectData(userSchema);
var user1 = new ObjectUser(userData);
console.log(user1.valueOf());
console.log(user1.toJSON());

var user2 = ObjectData(userSchema)();
console.log(user2.valueOf());
console.log(user2.toJSON());
