var caw = require('caw');
var http = require('http');
var https = require('https');

http.globalAgent = caw({protocol: 'http'}) || http.globalAgent;
https.globalAgent = caw({protocol: 'https'}) || https.globalAgent;
