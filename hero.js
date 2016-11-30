var Hero = function(name, healthLevel, favouriteFood) {
  this.name = name;
  this.healthLevel = healthLevel;
  this.favouriteFood = favouriteFood;
};

Hero.prototype = {
  talk: function() {
    return "I am " + this.name;
  }
};

module.exports = Hero;