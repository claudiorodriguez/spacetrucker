'use strict';
const TurnAction = require('./TurnAction');
const { getSystem } = require('../helpers');

class MoveAction extends TurnAction {
  constructor({ system }) {
    super({ type: 'move', content: system });
    this.system = system;
  }

  process(game) {
    const originSystem = game.currentSystem;
    const destSystem = getSystem(this.system);
    if (!destSystem) {
      throw new Error('Destination system does not exist');
    }

    if (originSystem.exits.indexOf(destSystem.id) === -1) {
      throw new Error('Destination system is not connected to current system');
    }

    if (game.player.ship.fuel < 1) {
      throw new Error('Insufficient fuel to move');
    }

    game.player.system = destSystem.id;
    game.currentSystem = destSystem;
    game.player.ship.fuel--;
  }
}

module.exports = MoveAction;
