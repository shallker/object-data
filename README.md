object-data
==========

It's object, not just data.


## Installation
```bash
npm install object-data
```


## Quick Start
```javascript
var ObjectData = require('object-data');

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

var userData = {
  id: 123,
  name: {
    first: 'Jack',
    last: 'Wang'
  },
  born: '1989-09-03',
  join: new Date,
  password: 'secret',
  email: 'jack@mail.com',
  smart: 'yes',
  hobbies: ['music', 'movie'],
  extra: 'invalid'
}

var ObjectUser = ObjectData(userSchema);

var user = new ObjectUser(userData);

user.id.on('update', function(value) {
  console.log('new value', vlaue);
  console.log('new value', this.valueOf());
})
user.id.on('empty', function() {})
user.id.on('remove', function() {})
user.id.on('change', function() {})

user.id.update(25)
user.id.typeOf()
user.id.valueOf()
user.id.lengthOf()
user.id.toString()
user.id.toJSON()
user.id.empty()
user.id.remove()

user.valueOf()
user.toJSON()
user.toString()
user.destroy()
```

---

Copyright (c) 2013 Shallker Wang - MIT License (enclosed)
