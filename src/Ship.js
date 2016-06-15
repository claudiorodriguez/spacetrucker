'use strict';
const CardHolder = require('./CardHolder');
const { Drive } = require('./cards/components');
const { getComponentCard } = require('./helpers');

class Ship extends CardHolder {
  constructor({ id, name, cargoCapacity, fuelCapacity, defaultComponents }) {
    super();
    this.id = id;
    this.name = name;
    this.cargoCapacity = cargoCapacity;
    this.fuelCapacity = fuelCapacity;
    this.fuel = this.fuelCapacity;
    this.cargo = [];
    if (defaultComponents) {
      defaultComponents.forEach(componentId => this.addCard(getComponentCard(componentId)));
    }
  }

  onMove(distance) {
    const fuelRate = this.getCardsOfClass(Drive)[0].calculate('fuelRate');
    const requiredFuel = distance * fuelRate;
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

  addCard(card) {
    if (card instanceof Drive && this.getCardsOfClass(Drive).length) {
      throw new Error('Ships can only have one drive component');
    }

    super.addCard(card);
  }

  onDock() {
    this.fuel = this.fuelCapacity;
    super.onDock();
  }
}

module.exports = Ship;
