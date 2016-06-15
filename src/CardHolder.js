'use strict';

class CardHolder {
  constructor() {
    this.cards = {
      active: [],
      discarded: []
    };
  }

  getCardsOfClass(cardClass) {
    return this.cards.active.filter(card => card instanceof cardClass);
  }

  addCard(card) {
    this.cards.active.push(card);
  }

  discard(card) {
    const i = this.cards.active.indexOf(card);
    this.cards.active.splice(i, 1);
    this.cards.discarded.push(card);
  }

  onDock() {
    this.cards.active.forEach((card) => {
      card.onDock();
    });
  }
}

module.exports = CardHolder;
