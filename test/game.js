'use strict';

const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game');
const Player = require('../src/Player');
const { getShip, getSystem } = require('../src/helpers');
const defaults = require('../src/data/defaults');
const { MoveAction, DockAction } = require('../src/actions');
const { NoEventResult } = require('../src/results');
const { MoveCargo } = require('../src/cards/contracts');

describe('Game', () => {

  it('should consume fuel when moving', (done) => {
    const player = new Player({ name: 'John' });
    const game = new Game({ player });
    expect(player.ship.id).to.eql(getShip(defaults.startingShip).id);
    expect(game.currentSystem).to.eql(getSystem(defaults.startingSystem));
    expect(player.ship.fuel).to.eql(player.ship.fuelCapacity);

    // Move the ship
    const newSystemId = game.currentSystem.exits[0];
    const moveAction = new MoveAction({ system: newSystemId, game });
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

  it('should add credits when completing a contract', (done) => {
    const player = new Player({ name: 'John' });
    const game = new Game({ player });

    const contractConfig = {
      cargoSpace: 5,
      ware: 'gears',
      reward: 1000,
      origin: game.currentSystem.id,
      destination: game.currentSystem.exits[0],
      game
    };

    const contract = new MoveCargo(contractConfig);
    contract.accept();
    expect(player.ship.occupiedCargo()).to.eql(contractConfig.cargoSpace);
    const newSystemId = game.currentSystem.exits[0];
    const moveAction = new MoveAction({ system: newSystemId, game });
    game.execute(moveAction);
    const dockAction = new DockAction({ game });
    game.execute(dockAction);
    expect(player.credits).to.eql(defaults.startingCredits + contractConfig.reward);
    expect(player.ship.occupiedCargo()).to.eql(0);
    done();
  });
});
