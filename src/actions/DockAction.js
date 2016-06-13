'use strict';
const TurnAction = require('./TurnAction');

class DockAction extends TurnAction {
  constructor({ game }) {
    super({ type: 'dock', content: game.currentSystem.id });
    this.game = game;
  }

  process() {
    this.game.player.ship.onDock();
    this.game.player.onDock();
  }
}

module.exports = DockAction;
