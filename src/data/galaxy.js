'use strict';

module.exports = {
  systems: [
    {
      id: 'sol',
      name: 'Sol',
      coords: { x: 500, y: 500 },
      exits: ['barnards-star', 'alpha-centauri', 'epsilon-eridani']
    },
    {
      id: 'barnards-star',
      name: `Barnard's Star`,
      coords: { x: 470, y: 535 },
      exits: ['61-cygni', 'sol', 'ross-154']
    },
    {
      id: 'alpha-centauri',
      name: 'Alpha Centauri',
      coords: { x: 525, y: 525 },
      exits: ['sol']
    },
    {
      id: 'epsilon-eridani',
      name: 'Epsilon Eridani',
      coords: { x: 520, y: 460 },
      exits: ['sol', 'tau-ceti', 'sirius']
    },
    {
      id: 'ross-154',
      name: 'Ross 154',
      coords: { x: 490, y: 580 },
      exits: ['barnards-star', 'fomalhaut', 'nu2-lupi']
    },
    {
      id: 'fomalhaut',
      name: 'Fomalhaut',
      coords: { x: 480, y: 640 },
      exits: ['ross-154']
    },
    {
      id: 'nu2-lupi',
      name: 'Nu2 Lupi',
      coords: { x: 530, y: 600 },
      exits: ['ross-154', 'ross-128']
    },
    {
      id: '61-cygni',
      name: '61 Cygni',
      coords: { x: 440, y: 540 },
      exits: ['barnards-star', 'altair', 'ross-248']
    },
    {
      id: 'altair',
      name: 'Altair',
      coords: { x: 410, y: 590 },
      exits: ['61-cygni']
    },
    {
      id: 'ross-248',
      name: 'Ross 248',
      coords: { x: 430, y: 480 },
      exits: ['61-cygni', 'groombridge-34']
    },
    {
      id: 'groombridge-34',
      name: 'Groombridge 34',
      coords: { x: 440, y: 460 },
      exits: ['ross-248', 'van-maanens']
    },
    {
      id: 'van-maanens',
      name: `Van Maanen's Star`,
      coords: { x: 480, y: 400 },
      exits: ['groombridge-34', 'tau-ceti', 'capella']
    },
    {
      id: 'tau-ceti',
      name: 'Tau Ceti',
      coords: { x: 500, y: 430 },
      exits: ['van-maanens', 'epsilon-eridani', 'kapteyns-star']
    },
    {
      id: 'ross-128',
      name: 'Ross 128',
      coords: { x: 565, y: 515 },
      exits: ['nu2-lupi', 'wolf-359']
    },
    {
      id: 'wolf-359',
      name: 'Wolf 359',
      coords: { x: 540, y: 470 },
      exits: ['ross-128', 'sirius']
    },
    {
      id: 'sirius',
      name: 'Sirius',
      coords: { x: 560, y: 440 },
      exits: ['wolf-359', 'epsilon-eridani', 'procyon']
    },
    {
      id: 'procyon',
      name: 'Procyon',
      coords: { x: 570, y: 410 },
      exits: ['sirius', 'luytens-star']
    },
    {
      id: 'luytens-star',
      name: `Luyten's Star`,
      coords: { x: 590, y: 390 },
      exits: ['procyon', 'kapteyns-star', 'pollux']
    },
    {
      id: 'kapteyns-star',
      name: `Kapteyn's Star`,
      coords: { x: 540, y: 395 },
      exits: ['tau-ceti', 'luytens-star']
    },
    {
      id: 'pollux',
      name: 'Pollux',
      coords: { x: 530, y: 320 },
      exits: ['luytens-star', 'lambda-aurigae', 'capella']
    },
    {
      id: 'lambda-aurigae',
      name: 'Lambda Aurigae',
      coords: { x: 505, y: 355 },
      exits: ['capella', 'pollux']
    },
    {
      id: 'capella',
      name: 'Capella',
      coords: { x: 480, y: 320 },
      exits: ['lambda-aurigae', 'pollux', 'van-maanens']
    },
  ]
};
