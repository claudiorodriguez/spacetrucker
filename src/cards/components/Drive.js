'use strict';
const Component = require('./Component');

class Drive extends Component {
  constructor({ range, fuelRate, price, volume, mass, game }) {
    super({ price, volume, mass, game });
    this.range = range;
    this.fuelRate = fuelRate;
  }
}

module.exports = Drive;
