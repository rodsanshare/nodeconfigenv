var _ = require('lodash');
require('dotenv/config');

var config = {
    dev: 'development',
    port: process.env.PORT || 3000
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

console.log('in config: ' + process.env.NODE_ENV);

config.env = process.env.NODE_ENV;

module.exports = config;