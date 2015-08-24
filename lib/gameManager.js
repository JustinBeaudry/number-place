'use strict';

var $ = require('jquery');

// Singleton
function GameManager() {
  this.ui = {
    lead: $('.lead')
  };
}

module.exports = GameManager;
