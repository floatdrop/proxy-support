'use strict';
var assert = require('assert');
var requireUncached = require('require-uncached');

var http = require('http');
var https = require('https');

var oldAgents = {
	http: http.globalAgent,
	https: https.globalAgent,
};

it('should not replace globalAgents when there is not proxy', function () {
	var proxySupport = requireUncached('./');
	assert.equal(oldAgents.http, http.globalAgent);
	assert.equal(oldAgents.https, https.globalAgent);
});

it('should replace globalAgents if env is set', function () {
	process.env.HTTPS_PROXY = '0.0.0.1';
	process.env.HTTP_PROXY = '0.0.0.2';

	var proxySupport = requireUncached('./');
	assert.notEqual(oldAgents.http, http.globalAgent);
	assert.notEqual(oldAgents.https, https.globalAgent);
});
