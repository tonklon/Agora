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

module.exports = function (key) {
  var string;
  try {
    string = eval('strings.' + key);
  }
  catch (e) {
    logger.info('Missing string for key "' + key + '"');
    return '';
  }
  if (string === undefined) {
    logger.info('Missing string for key "' + key + '"');
    return '';
  }
  return string;
};
