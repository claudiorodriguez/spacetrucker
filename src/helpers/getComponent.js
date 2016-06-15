'use strict';

const components = require('../data/components');

function getComponent(componentId) {
  return components[componentId.split('.')[0]]
    .filter(component => component.id === componentId)[0];
}

module.exports = getComponent;
