'use strict';
const aStar = require('a-star');
const getSystem = require('./getSystem');

function getPath({ startId, destId }) {
  const start = getSystem(startId);
  const end = getSystem(destId);
  const isEnd = node => node.id === destId;
  const neighbor = node => node.exits.map(id => getSystem(id));
  const hash = node => node.id;
  const heuristic = (node) =>
    Math.abs(Math.floor(
      Math.sqrt((node.x - end.x) * (node.x - end.x) + (node.y - end.y) * (node.y - end.y)) / 40
    ));
  const distance = () => 1;

  return aStar({
    start,
    isEnd,
    neighbor,
    hash,
    heuristic,
    distance
  });
}

module.exports = getPath;
