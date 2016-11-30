var assert = require('assert');
var rat = require('../rat');
var food = require('../food');

var greyRat;
var apple;

beforeEach( function() {
  greyRat = new rat('grey', 'slightlyPoisoned');
  apple = new food('apple', 5, 'none');
});

describe('Rat', function() {

  it('test rat setup', function() {
    assert.equal('grey', greyRat.type);
    assert.equal('slightlyPoisoned', greyRat.diseaseLevel);
  });

  it('can touch food and make it poisonous', function() {
    greyRat.touchFood(apple);
    assert.equal('slightlyPoisoned', apple.poisonLevel)
  })

});
