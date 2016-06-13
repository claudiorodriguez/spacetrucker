'use strict';

class MoveCargo {
  constructor({ cargoSpace, ware, reward, maxDate, origin, destination, game }) {
    this.cargoSpace = cargoSpace;
    this.ware = ware;
    this.cargo = { ware: this.ware, amount: this.cargoSpace };
    this.reward = reward;
    this.origin = origin;
    this.destination = destination;
    this.game = game;
  }

  accept() {
    this.game.player.ship.addCargo(this.cargo);
    this.game.player.addCard(this);
  }

  fail() {
    this.game.player.ship.removeCargo(this.cargo);
    this.game.player.discard(this);
  }

  success() {
    this.game.player.ship.removeCargo(this.cargo);
    this.game.player.discard(this);
    this.game.player.addCredits(this.reward);
  }

  onDock() {
    if (this.game.currentSystem.id === this.destination && (!this.maxDate || this.game.date <= this.maxDate)) {
      this.success();
    } else if (this.maxDate && this.game.date > this.maxDate) {
      this.fail();
    }
  }
}

module.exports = MoveCargo;
