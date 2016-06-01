var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var ability = require('../ability');
var assert = require('chai').assert;


describe('AdventureGame', function() {

  beforeEach(function(){
    food1 = new Food("grain", 10);
    food2 = new Food("pizza", 5000);

    gooseman = new Hero("Gooseman", 100, food1, ability[1]);
    seumoose = new Hero("Seumoose", 100, food2, ability[0]);

    ratman = new Rat('Ratman', 100, ability[2]);
  });

  it('should eat and replenish', function(){
    gooseman.eat(food1);
    assert.equal(115,gooseman.health)
  });

  it('should remove health if poisoned', function(){
    ratman.touch(food1);
    // console.log(food1)
    gooseman.eat(food1);

    assert.equal(90, gooseman.health)
  });

  it('should use attack ability', function(){
    gooseman.useAbility(ratman);
    assert.equal(95,ratman.health)
  });

  it('should use heal ability', function(){
    seumoose.useAbility(gooseman);
    assert.equal(105,gooseman.health)
  });

  it('should use bite ability', function(){
    ratman.useAbility(seumoose);
    ratman.useAbility(seumoose);
    // ratman.useAbility(seumoose);
    assert.equal(0,seumoose.health)
  });

  it('should have a battle', function(){
    ratman.useAbility(seumoose);
    seumoose.useAbility(seumoose);
    // ratman.touch(food2);
    seumoose.eat(food2);

    assert.equal(7555,seumoose.health)
  });

})
