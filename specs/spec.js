var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var assert = require('chai').assert;


describe('AdventureGame', function() {

  beforeEach(function(){
    food1 = new Food("grain", 10);

    gooseman = new Hero("Gooseman", 100, food1);

    ratman = new Rat('Ratman');
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
  })
})
