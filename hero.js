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
    if (food.name === this.favouriteFood) {
      this.healthLevel += (food.healthValue * 1.5);
    } else {
      this.healthLevel += food.healthValue;
    }
    var poisonHealthDepletion = food.healthValue * food.poisonLevel;
    this.healthLevel -= poisonHealthDepletion;
    return "I am eating " + food.name;
  }
};

module.exports = Hero;