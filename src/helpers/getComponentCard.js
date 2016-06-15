'use strict';

const getComponent = require('./getComponent');
const componentClasses = require('../cards/components');

function getComponentCard(componentId) {
  const className = componentId.split('.')[0];
  return new componentClasses[className](getComponent(componentId));
}

module.exports = getComponentCard;
