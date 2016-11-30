var Hero = function(name, healthLevel, favouriteFood) {
  this.name = name;
  this.healthLevel = healthLevel;
  this.favouriteFood = favouriteFood;
};

Hero.prototype = {
  talk: function() {
    return "I am " + this.name;
  },
  eat: function(food) {
    this.healthLevel += food.healthValue;
    return "I am eating " + food.name
  }
};

module.exports = Hero;