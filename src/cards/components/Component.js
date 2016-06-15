'use strict';
const Card = require('../Card');

class Component extends Card {
  constructor({ price, volume, mass, game }) {
    super();
    this.price = price;
    this.volume = volume;
    this.mass = mass;
    this.game = game;
  }
}

module.exports = Component;
