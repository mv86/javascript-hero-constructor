var assert = require('assert');
var hero = require('../hero');
var food = require('../food');

  var hero1;
  var apple;

  beforeEach( function() {
    hero1 = new hero('Dave', 70, 'beef');
    apple = new food('apple', 5, 0);
    beef = new food('beef', 20, 0);
    cheese = new food('cheese', 10, 4)
  });

describe('hero', function() {

  it('test has name', function() {
    assert.equal('Dave', hero1.name);
  });

  it('test has health level', function() {
    assert.equal(70, hero1.healthLevel);
  });

  it('test has favourite food', function() {
    assert.equal('beef', hero1.favouriteFood);
  });

  it('test uses prototype talk method', function() {
    assert.equal("I am Dave", hero1.talk());
  })

  it('test uses prototype eat method', function() {
    assert.equal("I am eating apple", hero1.eat(apple));
  })

  it('test health changes after eating', function() {
    hero1.eat(apple);
    assert.equal(75, hero1.healthLevel);
  })

  it('test health changes by 1.5 after eating fav food', function() {
    hero1.eat(beef);
    assert.equal(100, hero1.healthLevel);
  })

  it('test health depleates after eating poisioned food', function() {
    hero1.eat(cheese);
    assert.equal(40, hero1.healthLevel);
  })

})