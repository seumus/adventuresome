var Food = require('./food')

var Hero = function(name,health,favFood) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
}

Hero.prototype = {
  talk: function() {
    console.log("I am " + this.name);
  },

  eat: function(food) {
    if(food.poisoned === false) {
      if(food === this.favFood) {
        this.health += ( food.replValue * 1.5 );
      } else {
      this.health += food.replValue;
      }
    } else {
      this.health -= food.replValue;
    }
  }
}


module.exports = Hero;
