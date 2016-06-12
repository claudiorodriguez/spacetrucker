'use strict';

const ships = require('../data/ships');

function getShip(shipId) {
  return ships.filter(ship => ship.id === shipId)[0];
}

module.exports = getShip;
