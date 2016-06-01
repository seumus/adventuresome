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
    if(food.bonus > 1) {
    this.ability.outcome *= food.bonus;
  }
    if(food.poisoned === false) {

      if(food === this.favFood) {
        this.health += ( food.replValue * 1.5 );
        console.log(this.name + " has eaten their favourite food!!\nNow has " + this.health + " health")
      }
      else {
        this.health += food.replValue;
        }
      }
      else {
        this.health -= food.replValue;
      if(this.health > 0){
        console.log(this.name + " now has " + this.health + " health")

      }
      else {
        if(this.health < 0){
          this.health = 0;
        }
        console.log(this.name + " is dead!")
      }
    }

  },

  useAbility: function(target) {

    if(target.health > 0){
      target.health += this.ability.outcome
      if(target.health < 0){
        target.health = 0;
      }
      console.log(this.name + " has " + this.ability.pastName + " " + target.name + " with a result of " + this.ability.outcome + " health\n" + target.name + " now has " + target.health + " health")
      if(target.health === 0){
        console.log(target.name + " is dead!");
      }
    }
    else {
      console.log(target.name + " is dead!");
    }
    // this.ability.outcome = 5;
  }

}



module.exports = Hero;
