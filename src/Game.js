'use strict';

const defaults = require('./data/defaults');
const galaxy = require('./data/galaxy');
const { getShip, getSystem } = require('./helpers');
const { NoEventResult } = require('./results');

class Game {
  constructor({ player, startingShip, startingSystem }) {
    this.player = player;
    this.player.system = startingSystem || defaults.startingSystem;
    this.player.ship = getShip(startingShip || defaults.startingShip);
    this.player.ship.fuel = this.player.ship.fuelCapacity;
    this.galaxy = galaxy;
    this.currentSystem = getSystem(this.player.system);
  }

  execute(turnAction) {
    turnAction.process(this);
    return new NoEventResult();
  }
}

module.exports = Game;
