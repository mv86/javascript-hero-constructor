var Rat = function(type, diseaseLevel) {
  this.type = type;
  this.diseaseLevel = diseaseLevel;
};

Rat.prototype = {
  touchFood: function(food) {
    food.poisonLevel = this.diseaseLevel;
  }
}

module.exports = Rat;