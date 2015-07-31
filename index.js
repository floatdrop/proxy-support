var caw = require('caw');
var http = require('http');
var https = require('https');
var util = require('util');
var url = require('url');

var httpProxyAgent = caw({protocol: 'http'});

if (httpProxyAgent) {
	http.globalAgent = http.Agent.globalAgent = httpProxyAgent;
	var _httpRequest = http.request;
	http.request = function(options, cb) {
		options.agent = options.agent || httpProxyAgent;
		return _httpRequest.call(http, options, cb);
	};
}

var httpsProxyAgent = caw({protocol: 'https'});

if (httpsProxyAgent) {
	https.globalAgent = https.Agent.globalAgent = httpsProxyAgent;
	var _httpsRequest = https.request;
	https.request = function (options, cb) {
		if (typeof options === 'string') {
			options = url.parse(options);
		} else {
			options = util._extend({}, options);
		}
		options.agent = options.agent || httpsProxyAgent;
		return _httpsRequest.call(https, options, cb);
	};
}
