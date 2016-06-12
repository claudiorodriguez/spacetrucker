'use strict';

const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Player = require('../src/Player');
const { getShip, getSystem } = require('../src/helpers');
const defaults = require('../src/data/defaults');
const { MoveAction } = require('../src/actions');
const { NoEventResult } = require('../src/results');

describe('Game', () => {

  it('should consume fuel when moving', (done) => {
    const player = new Player({ name: 'John' });
    const game = new Game({ player });
    expect(player.ship).to.eql(getShip(defaults.startingShip));
    expect(game.currentSystem).to.eql(getSystem(defaults.startingSystem));
    expect(player.ship.fuel).to.eql(player.ship.fuelCapacity);

    // Move the ship
    const newSystemId = game.currentSystem.exits[0];
    const moveAction = new MoveAction({ system: newSystemId });
    let turnResult;
    function makeMove() {
      turnResult = game.execute(moveAction);
    }

    expect(makeMove).to.not.throw(Error);
    expect(turnResult).to.be.an.instanceof(NoEventResult);
    expect(game.currentSystem.id).to.eql(newSystemId);
    expect(player.ship.fuel).to.eql(player.ship.fuelCapacity - 1);

    done();
  });
});
