'use strict';

module.exports = {
  systems: [
    {
      id: 'sol',
      name: 'Sol',
      exits: ['sirius']
    },
    {
      id: 'sirius',
      name: 'Sirius',
      exits: ['sol']
    }
  ]
};
