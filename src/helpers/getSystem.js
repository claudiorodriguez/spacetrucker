'use strict';

const { systems } = require('../data/galaxy');

function getSystem(systemId) {
  return systems.filter(system => system.id === systemId)[0];
}

module.exports = getSystem;
