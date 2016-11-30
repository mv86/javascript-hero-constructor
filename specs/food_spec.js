var assert = require('assert');
var food = require('../food');

describe('Food', function() {

  apple = new food('apple', 5);

  it('test setup', function() {
    assert.equal('apple', apple.name);
    assert.equal(5, apple.healthValue);
  });

});