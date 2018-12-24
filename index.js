var BSEAPI = require('./bse/index');
var NSEAPI = require('./nse/index');

var API = {
	BSE: BSEAPI,
	NSE: NSEAPI
};

module.exports = API;