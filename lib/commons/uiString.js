"use strict";

var winston = require('winston');
var logger = winston.loggers.get('application');

var strings = {
  navigation: {
    buttons: {
      next: 'vor',
      back: 'zurück'
    }
  },
  index: {
    hero1: {
      title: 'Schön, dass Du vorbeischaust.'
    },
    hero2: {
      title: 'Wir sind …'
    },
    hero3: {
      title: 'Die Softwerkskammer ist etwas für Dich,'
    }
  }
};

module.exports = function (keyPath) {
  var string = strings;
  var keysArray = keyPath.split('.');

  while (keysArray.length) {
    var key = keysArray.shift();
    if (key in string) {
      string = string[key];
    } else {
      logger.info('Missing string for key "' + key + '"');
      return '';
    }
  }
  return string;
};
