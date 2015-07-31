var caw = require('caw');

require('http').globalAgent = caw({protocol: 'http'});
require('https').globalAgent = caw({protocol: 'https'});
