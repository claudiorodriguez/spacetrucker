'use strict';
const TurnAction = require('./TurnAction');
const { getSystem } = require('../helpers');

class MoveAction extends TurnAction {
  constructor({ system, game }) {
    super({ type: 'move', content: system });
    this.system = system;
    this.game = game;
  }

  process() {
    const originSystem = this.game.currentSystem;
    const destSystem = getSystem(this.system);
    if (!destSystem) {
      throw new Error('Destination system does not exist');
    }

    if (originSystem.exits.indexOf(destSystem.id) === -1) {
      throw new Error('Destination system is not connected to current system');
    }

    this.game.player.ship.onMove(1);

    this.game.player.system = destSystem.id;
    this.game.currentSystem = destSystem;
  }
}

module.exports = MoveAction;
