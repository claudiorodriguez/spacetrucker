'use strict';

class TurnAction {
  constructor({ type, content }) {
    this.type = type;
    this.content = content;
  }
}

module.exports = TurnAction;
