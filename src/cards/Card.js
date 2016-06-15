'use strict';
const CardHolder = require('../CardHolder');

class Card extends CardHolder {
  // Calculates with recursive card bonuses
  calculate(property) {
    if (!this[property]) {
      return false;
    }

    return this[property] + this.bonus(property);
  }

  // Calculate recursive bonuses on property
  bonus(property) {
    let bonus = (this.bonuses && this.bonuses[property]) || 0;
    this.cards.active.forEach(card => {
      bonus += card.bonus(property);
    });
    return bonus;
  }
}

module.exports = Card;
