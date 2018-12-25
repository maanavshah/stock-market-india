exports.INDICES_URL =  'https://api.bseindia.com/bseindia/api/Indexmasternew/GetData';
exports.INDEX_INFO_URL = 'https://www.bseindia.com/SensexView/SensexViewbackPage.aspx';
exports.INDICES_CHART_DATA_URL = 'https://www.bseindia.com/BSEGraph/Graphs/GetSensexViewData1.aspx?index=';
exports.INDEX_HEAT_MAP_URL = 'https://www.bseindia.com/SensexView/HeatMapSensex.aspx?flag=HEAT&alpha=D';
exports.STOCK_HIGH_LOW_URL = 'https://www.bseindia.com/stock-share-price/SiteCache/EQHeaderData.aspx';
exports.STOCK_POINT_PERCENT_URL = 'https://www.bseindia.com/stock-share-price/SiteCache/IrBackupStockReach.aspx';
exports.HISTORY_STOCKS_URL = 'https://www.bseindia.com/BSEGraph/Graphs/GetStockReachVolPriceData.aspx?index=';
exports.DAILY_STOCKS_URL = 'https://www.bseindia.com/markets/equity/EQReports/MarketWatch.aspx?expandable=2';
exports.GAINERS_URL = 'https://www.bseindia.com/Msource/gainers.aspx?ln=en';
exports.LOSERS_URL = 'https://www.bseindia.com/Msource/Losers.aspx?ln=en';
exports.TURNOVER_URL = 'https://www.bseindia.com/Msource/Turnover.aspx?ln=en';
/**
 * Constant CSV Header Row to parse response values
 */
exports.INDICES_HEADERS = 'securityCode,todayClose,pointChange,pointPercent,unknownValue1,key,symbol';
exports.COMPANY_HEADER_URL = 'https://www.bseindia.com/SiteCache/1D/CompanyHeader.aspx?Type=EQ&text=';
exports.DAILY_STOCKS_HEADERS = 'dateTime,,stockValue,volume';
exports.DAILY_STOCKS_CLOSING_HEADERS = 'date,previousClose,minLow,maxHigh,symbol,latestValue,time,volumeRangeLow,volumeRangeHigh';
exports.GAINERS_HEADERS = 'securityCode,todayClose,pointChange,pointPercent,symbol,url';
exports.LOSERS_HEADERS = 'securityCode,todayClose,pointChange,pointPercent,symbol,url';
exports.TURNOVER_HEADERS = 'securityCode,todayClose,pointChange,pointPercent,symbol,turnover,volume,url';
