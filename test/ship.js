'use strict';

const chai = require('chai');
const expect = chai.expect;
const { getShip, getComponentCard } = require('../src/helpers');
const defaults = require('../src/data/defaults');
const Ship = require('../src/Ship');
const { Drive } = require('../src/cards/components');

describe('Ship', () => {

  it('should not accept two drives', (done) => {
    const ship = new Ship(getShip(defaults.startingShip));

    // Starting drive
    expect(ship.getCardsOfClass(Drive)).to.not.be.empty;

    function addDrive() {
      ship.addCard(getComponentCard('Drive.basic'));
    }

    expect(addDrive).to.throw(Error);
    done();
  });
});
