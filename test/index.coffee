ObjectData = require('../index')

describe 'ObjectData.version', ->
  it 'should have a version', ->
    ObjectData.version.should.be.a 'string'
