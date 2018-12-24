var API = require('./index');

function getIndices() {
  return API.getIndices()
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getIndexInfo(symbol) {
  return API.getIndexInfo(symbol)
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getIndexChartData(symbol, time) {
  return API.getIndexChartData(symbol, time)
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getIndexStocks(symbol) {
  return API.getIndexStocks(symbol)
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getCompanyInfo(symbol) {
  return API.getCompanyInfo(symbol)
    .then(function (value) {
      console.log(value);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getStocksChartData(key, time) {
  return API.getStocksChartData(key, time)
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getStockInfoAndDayChartData(symbol) {
  return API.getStockInfoAndDayChartData(symbol)
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getGainers() {
  return API.getGainers()
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getLosers() {
  return API.getLosers()
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

function getTopTurnOvers() {
  return API.getTopTurnOvers()
    .then(function (value) {
      console.log(value.data);
    })
    .catch(function (reason) {
      console.log(reason)
    });
}

// Examples

// Get details of all index in BSE Stock exchange
getIndices()

// Get the information of only a single index eg. SENSEX (16)
getIndexInfo('16') // symbolKey

// Get todays closing data and daily data of past time
getIndexChartData('16', '1M')
getIndexChartData('16', '3M')

// Get details of all the stocks in an index
getIndexStocks('16')  // Get details of all stocks in SENSEX index

// Get details of company (stock) using securityCode
// 500112 - symbol (securityCode) of SBIN stock BSE
getCompanyInfo(500112)  // From getIndexStocks() value of 'symbol' here

// Get chart type details of stocks
// returns(StockValue, Volume) for company in specified past time
getStocksChartData(500325, '3M')  // symbol(securityCode), Time

// Get HTML data of stock info and day chart
getStockInfoAndDayChartData(500325)

// Get the top gainers of BSE stock exchange
getGainers()

// Get the top losers of BSE stock exchange
getLosers()

// Get the top turnovers of BSE stock exchange
getTopTurnOvers()
