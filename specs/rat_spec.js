var assert = require('assert');
var rat = require('../rat');
var food = require('../food');

var greyRat;
var apple;

beforeEach( function() {
  greyRat = new rat('grey', 2);
  apple = new food('apple', 5, 0);
});

describe('Rat', function() {

  it('test rat setup', function() {
    assert.equal('grey', greyRat.type);
    assert.equal(2, greyRat.diseaseLevel);
  });

  it('can touch food and make it poisonous', function() {
    greyRat.touchFood(apple);
    assert.equal(2, apple.poisonLevel)
  })

});
