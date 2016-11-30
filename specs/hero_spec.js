var assert = require('assert');
var hero = require('../hero');
var food = require('../food');


describe('hero', function() {
  hero1 = new hero('Dave', 100, 'Beef')

  it('test has name', function() {
    assert.equal('Dave', hero1.name);
  });

  it('test has health level', function() {
    assert.equal(100, hero1.healthLevel);
  });

  it('test has favourite food', function() {
    assert.equal('Beef', hero1.favouriteFood);
  });

  it('test uses prototype talk method', function() {
    assert.equal("I am Dave", hero1.talk());
  })

})