'use strict';

const defaults = require('./data/defaults');
const galaxy = require('./data/galaxy');
const { getShip, getSystem } = require('./helpers');
const { NoEventResult } = require('./results');
const Ship = require('./Ship');

class Game {
  constructor({ player, startingShip, startingSystem }) {
    this.player = player;
    this.player.system = startingSystem || defaults.startingSystem;
    this.player.ship = new Ship(getShip(startingShip || defaults.startingShip));
    this.galaxy = galaxy;
    this.currentSystem = getSystem(this.player.system);
    this.date = 0;
  }

  execute(turnAction) {
    turnAction.process();
    this.advanceTurn();
    return new NoEventResult();
  }

  advanceTurn() {
    this.date++;
  }
}

module.exports = Game;
