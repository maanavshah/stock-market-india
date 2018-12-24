var NSEAPI = require('./service/API');
var merge = require('lodash/merge');


/**
 * Returns market status
 * true => market Close
 * false => market Open
 * @returns {boolean}
 */
function getMarketStatus() {
  return NSEAPI.getMarketStatus();
}


/**
 * API returning indices list
 * @returns {*}
 */
function getIndices() {
  return NSEAPI.getIndices();
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
  return NSEAPI.getSectorsList();
}


function getQuotes(symbol) {
  return NSEAPI.getQuotes(symbol);
}


/**
 * Get info about a stock
 * @param symbol {string} symbol of company
 *
 * @returns {object}
 */
function getQuoteInfo(symbol) {
  return NSEAPI.getQuoteInfo(symbol);
}


/**
 * Get List of Gainers
 * @returns {*}
 */
function getGainers() {
  return NSEAPI.getGainers();
}


/**
 * Get List of Losers
 * @returns {*}
 */
function getLosers() {
  return NSEAPI.getLosers();
}


/**
 * Get Incline and Decline values
 * @returns {*}
 */
function getInclineDecline() {
  return NSEAPI.getInclineDecline();
}


/**
 * Return stocks list for specified index slug
 * @param slug
 * @returns {*}
 */
function getIndexStocks(slug) {
  return NSEAPI.getIndexStocks(slug);
}


/**
 * Intra-day Stocks data
 * @param symbol = stock symbol
 * @param time [1, 5, 15, 30, 60, 'week', 'month', 'year'] minutes
 * @returns {*}
 */
function getIntraDayData(symbol, time) {
  return NSEAPI.getIntraDayData(symbol, time);
}


/**
 * Chart Data for Stocks and indexs
 * @param symbol = stock symbol
 * @param time [1, 5, 15, 30, 60, 'week', 'month', 'year'] minutes
 * @returns {*}
 */
function getChartDataNew(symbol, time) {
  return NSEAPI.getChartDataNew(symbol, time);
}


/**
 * Search NSE Stocks by symbol or name
 * @param symbol {string} min 3 chars
 * @returns {[{name, symbol]}
 */
function searchStocks(symbol) {
  return NSEAPI.searchStocks(symbol);
}


/**
 * Get Stock Futures Data
 * @param symbol
 * @param expiryDate
 * @param isIndex {boolean}
 * @returns {*}
 */
function getStockFuturesData(symbol, expiryDate, isIndex) {
  return NSEAPI.getStockFuturesData(symbol, expiryDate, isIndex);
}


function get52WeekHigh() {
  return NSEAPI.get52WeekHigh();
}


function get52WeekLow() {
  return NSEAPI.get52WeekLow();
}


function getTopValueStocks() {
  return NSEAPI.getTopValueStocks();
}


function getTopVolumeStocks() {
  return NSEAPI.getTopVolumeStocks();
}


var nse = {
  getMarketStatus: getMarketStatus,
  getIndices: getIndices,
  getSectorsList: getSectorsList,
  getQuotes: getQuotes,
  getQuoteInfo: getQuoteInfo,
  getGainers: getGainers,
  getLosers: getLosers,
  getInclineDecline: getInclineDecline,
  getIndexStocks: getIndexStocks,
  getIntraDayData: getIntraDayData,
  searchStocks: searchStocks,
  getStockFuturesData: getStockFuturesData,
  get52WeekHigh: get52WeekHigh,
  get52WeekLow: get52WeekLow,
  getTopValueStocks: getTopValueStocks,
  getTopVolumeStocks: getTopVolumeStocks,
  getChartDataNew: getChartDataNew
};

module.exports = nse;
