var API = require('./index');

/**
 * Returns market status
 * true => market Close
 * false => market Open
 * @returns {boolean}
 */
function getMarketStatus() {
  return API.getMarketStatus()
    .then(function (value) {
      console.log(value.data)
    });
}

/**
 * API returning top indices
 * @returns {*}
 */
function getIndices() {
  return API.getIndices()
    .then(function (value) {
      console.log(value.data)
    });
}

/**
 * Return list of companies with their sector name
 * [{
      sector: "NIFTY IT ", //Sector name
      symbol: "TRIGYN", //company symbol
      PE: "0", // Symbol P/E value
      date: "08-Jun-2018 06:45:10", // last date
      sectorPE: "19.53" // Sectoral Index P/E value
    }],
 * @returns {array}
 */
function getSectorsList() {
  return API.getSectorsList()
    .then(function (value) {
      console.log(value.data)
    });
}

function getQuotes(symbol) {
  return API.getQuotes()
    .then(function (value) {
      console.log(value.data)
    });
}

/**
 * Get info about a stock
 * @param symbol {string} symbol of company
 *
 * @returns {object}
 */
function getQuoteInfo(symbol) {
  return API.getQuoteInfo(symbol)
    .then(function (value) {
      console.log(value.data)
    });
}

/**
 * Get List of Gainers
 * @returns {*}
 */
function getGainers() {
  return API.getGainers()
    .then(function (value) {
      console.log(value.data)
    });
}

/**
 * Get List of Losers
 * @returns {*}
 */
function getLosers() {
  return API.getLosers()
    .then(function (value) {
      console.log(value.data)
    });
}

/**
 * Get Incline and Decline values
 * @returns {*}
 */
function getInclineDecline() {
  return API.getInclineDecline()
    .then(function (value) {
      console.log(value.data)
    });
}

function getIndexStocks(slugs) {
  return API.getIndexStocks(slugs)
    .then(function (value) {
      console.log(value.data)
    });
}

function getIntraDayData(symbol, time) {
  return API.getIntraDayData(symbol, time)
    .then(function (value) {
      console.log(value.data, 'value')
    });
}

function searchStocks(symbol) {
  return API.searchStocks(symbol)
    .then(function (value) {
      var data = value.data;
      console.log(data);

    });
}

function getStockFuturesData(symbol, date) {
  return API.getStockFuturesData(symbol, date)
    .then(function (value) {
      var data = value.data;
      console.log(data);
    });
}

function get52WeekHigh() {
  return API.get52WeekHigh()
    .then(function (value) {
      var data = value.data;
      console.log(data);
    });
}
function get52WeekLow() {
  return API.get52WeekLow()
    .then(function (value) {
      var data = value.data;
      console.log(data);
    });
}

function getTopValueStocks() {
  return API.getTopValueStocks()
    .then(function (value) {
      var data = value.data;
      console.log(data);
    });
}

function getTopVolumeStocks() {
  return API.getTopVolumeStocks()
    .then(function (value) {
      var data = value.data;
      console.log(data);
    });
}

function getChartDataNew(symbol, date) {
  return API.getChartDataNew(symbol, date)
    .then(function (value) {
      var data = value.data;
      console.log(data);
    });
}

// Examples

// Returns market status
getMarketStatus()

// Returns top indices
getIndices()

// Returns list of companies with their sector name
getSectorsList()

// Get HTML DOM Webscraped quotes of NSE
getQuotes()

// Get info about a stock
getQuoteInfo('TCS')

// Get the top gainers of NSE
getGainers()

// Get the top losers of NSE
getLosers()

// Get advances vs declines on NSE index
getInclineDecline()

// Get all stocks in NSE index
getIndexStocks('bankNifty')

getIntraDayData('TCS', 'month')

// Get the details of stock using Index
searchStocks('nifty')

// Get the futures data for a company stock (symbol) and time
getStockFuturesData('TCS', 'month')

// Get 52 weeks all high stocks
get52WeekHigh()

// Get 52 weeks all low stocks
get52WeekLow()

// Get the stocks whose values are highest
getTopValueStocks()

// Get the stocks whose volumes sold are highest
getTopVolumeStocks()

// Get chart data of a company(symbol) depending on time
getChartDataNew('VEDL', 'week')
