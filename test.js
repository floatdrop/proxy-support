'use strict';
var assert = require('assert');

var http = require('http');
var https = require('https');

var caw = require('caw');
var cawHttp = caw({protocol: 'http'});
var cawHttps = caw({protocol: 'https'});

var oldAgents = {
	http: http.globalAgent,
	https: https.globalAgent,
};

var proxySupport = require('./');

it('should replace globalAgents', function () {
	assert.equal(oldAgents.http, cawHttp);
	assert.equal(oldAgents.https, cawHttps);
});
