'use strict';
const CardHolder = require('./CardHolder');
const defaults = require('./data/defaults');

class Player extends CardHolder {
  constructor ({ name, ship }) {
    super();
    this.name = name;
    this.ship = ship;
    this.credits = defaults.startingCredits || 1000;
  }

  addCredits (credits) {
    this.credits += credits;
  }

  removeCredits (credits) {
    if (this.credits < credits) {
      throw new Error('Insufficient credits');
    }

    this.credits -= credits;
  }
}

module.exports = Player;
