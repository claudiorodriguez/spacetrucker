'use strict';
const CardHolder = require('./CardHolder');

class Ship extends CardHolder {
  constructor({ id, name, cargoCapacity, fuelCapacity, fuelRate }) {
    super();
    this.id = id;
    this.name = name;
    this.cargoCapacity = cargoCapacity;
    this.fuelCapacity = fuelCapacity;
    this.fuelRate = fuelRate;
    this.fuel = this.fuelCapacity;
    this.cargo = [];
  }

  onMove(distance) {
    const requiredFuel = distance * this.fuelRate;
    if (this.fuel < requiredFuel) {
      throw new Error('Not enough fuel to move');
    }

    this.fuel -= requiredFuel;
  }

  addCargo({ ware, amount }) {
    if (amount > this.cargoCapacity - this.occupiedCargo) {
      throw new Error('Insufficient cargo space');
    }

    this.cargo.push({ ware, amount });
  }

  removeCargo(cargoItem) {
    const i = this.cargo.indexOf(cargoItem);
    this.cargo.splice(i, 1);
  }

  occupiedCargo() {
    return this.cargo.reduce((acc, item) => acc + item.amount, 0);
  }

  onDock() {
    this.fuel = this.fuelCapacity;
    super.onDock();
  }
}

module.exports = Ship;
