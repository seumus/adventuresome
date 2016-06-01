var Food = require('./food')
var Food = require('./ability')

var Rat = function(name, health,ability) {
  this.name = name;
  this.health = health;
  this.ability = ability;
}

Rat.prototype = {
  touch: function(food) {
    food.poisoned = true;
  },
  useAbility: function(target) {
    target.health += this.ability.outcome
    if(target.health > 0){
      console.log(this.name + " has " + this.ability.pastName + " " + target.name + " with a result of " + this.ability.outcome + " health\n" + target.name + " now has " + target.health + " health");
    }
    else {
      if(target.health < 0){
        target.health = 0;
      }
      console.log(target.name + " is dead!")
    }
  }

}

module.exports = Rat;
