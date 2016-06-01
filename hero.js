var Food = require('./food')
var ability = require('./ability')

var Hero = function(name,health,favFood,ability) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.ability = ability;
}

Hero.prototype = {
  talk: function() {
    console.log("I am " + this.name);
  },

  eat: function(food) {
    if(food.poisoned === false) {
      if(food === this.favFood) {
        this.health += ( food.replValue * 1.5 );
        console.log(this.name + " has eaten their favourite food!!\nNow has " + this.health + " health")
      } else {
      this.health += food.replValue;
      }
    } else {
      this.health -= food.replValue;
    }
  },

  useAbility: function(target) {
    target.health += this.ability.outcome
    if(target.health > 0){
      console.log(this.name + " has " + this.ability.pastName + " " + target.name + " with a result of " + this.ability.outcome + " health\n" + target.name + " now has " + target.health + " health")
      if(target.health < 0){
        target.health = 0;
      }
    }
    else {
      console.log(target.name + " is dead!")
    }
  }
}


module.exports = Hero;
