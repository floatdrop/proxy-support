'use strict';
var assert = require('assert');

var http = require('http');
var https = require('https');

var oldAgents = {
	http: http.globalAgent,
	https: https.globalAgent,
};

var caw = require('caw');

var proxySupport = require('./');

it('should not replace globalAgents when there is not proxy', function () {
	assert.equal(oldAgents.http, http.globalAgent);
	assert.equal(oldAgents.https, https.globalAgent);
});

it('should replace globalAgents if env is set', function () {
	process.env.HTTPS_PROXY = '0.0.0.1';
	process.env.HTTP_PROXY = '0.0.0.2';

	var caw = require('caw');
	var cawHttp = caw({protocol: 'http'});
	var cawHttps = caw({protocol: 'https'});

	assert.notEqual(oldAgents.http, cawHttp);
	assert.notEqual(oldAgents.https, cawHttps);
});
