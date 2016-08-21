var config = require('./config');

console.log('index.js, config.x: ', config.x);

config.x = 42;

var test = require('./test');