# stock-market-india
A npm package which fetches data from Bombay & National Stock Exchange and provides an API to access it.


## National Stock Exchange (NSE) API

- Get the stock market status (open/closed)<br/>
Format: JSON<br/>
http://localhost:3000/get_market_status<br/>

- Get all the indices of NSE(change, year high and low, index order)<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_indices<br/>

- Get the quotes of all indexes in NSE<br/>
Format: HTML<br/>
http://localhost:3000/nse/get_quotes<br/>

- Get the quotation data of the symbol (companyName) from NSE<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_quote_info?companyName=TCS<br/>

- Get the top 10 gainers of NSE<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_gainers<br/>

- Get the top 10 losers of NSE<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_losers<br/>

- Get advances/declines of individual index, and the value if its changed or not<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_incline_decline<br/>

- Get the information of all the companies in a single NSE index<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_index_stocks?symbol=nifty<br/>

- Get the list of companies in provided NSE index with matching keyword data<br/>
Format: JSON<br/>
http://localhost:3000/nse/search_stocks?keyword=AXIS<br/>

- Get the intraday data of company in NSE<br/>
Format: XML<br/>
http://localhost:3000/nse/get_intra_day_data?companyName=TCS&time=1<br/>
http://localhost:3000/nse/get_intra_day_data?companyName=TCS&time=month<br/>

- Get 52 weeks all high stocks in NSE<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_52_week_high<br/>

- Get 52 weeks all low stocks in NSE<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_52_week_low<br/>

- Get the NSE stocks with highest values<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_top_value_stocks<br/>

- Get the NSE stocks with highest sold volumes<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_top_volume_stocks<br/>

- Get the futures data for a company stock (symbol) and time<br/>
Format: JSON<br/>
http://localhost:3000/nse/get_stock_futures_data?companyName=TCS&time=15<br/>
http://localhost:3000/nse/get_stock_futures_data?companyName=VEDL&time=month<br/>

- Get chart data of a company name(symbol) depending on time in NSE<br/>
Format: CSV Format (delimiter - |)<br/>
http://localhost:3000/nse/get_chart_data_new?companyName=VEDL&time=5<br/>
http://localhost:3000/nse/get_chart_data_new?companyName=VEDL&time=year<br/>

- symbol (Slug List)

```javascript

 {
  'NIFTY 50': 'nifty',
  'NIFTY NEXT 50': 'juniorNifty',
  'NIFTY MIDCAP 50': 'niftyMidcap50',
  'NIFTY AUTO': 'cnxAuto',
  'NIFTY BANK': 'bankNifty',
  'NIFTY ENERGY': 'cnxEnergy',
  'NIFTY FIN SERVICE': 'cnxFinance',
  'NIFTY FMCG': 'cnxFMCG',
  'NIFTY IT': 'cnxit',
  'NIFTY MEDIA': 'cnxMedia',
  'NIFTY METAL': 'cnxMetal',
  'NIFTY PHARMA': 'cnxPharma',
  'NIFTY PSU BANK': 'cnxPSU',
  'NIFTY REALTY': 'cnxRealty',
  'NIFTY PVT BANK': 'niftyPvtBank',
  'NIFTY COMMODITIES': 'cnxCommodities',
  'NIFTY CONSUMPTION': 'cnxConsumption',
  'NIFTY CPSE': 'cpse',
  'NIFTY INFRA': 'cnxInfra',
  'NIFTY MNC': 'cnxMNC',
  'NIFTY GROWSECT 15': 'ni15',
  'NIFTY PSE': 'cnxPSE',
  'NIFTY SERV SECTOR': 'cnxService',
  'NIFTY100 LIQ 15': 'nseliquid',
  'NIFTY MID LIQ 15': 'niftyMidcapLiq15',
  'NIFTY DIV OPPS 50': 'cnxDividendOppt',
  'NIFTY50 VALUE 20': 'nv20',
  'NIFTY QUALITY 30': 'niftyQuality30',
  'NIFTY50 EQL WGT': 'nifty50EqualWeight',
  'NIFTY100 EQL WGT': 'nifty100EqualWeight',
  'NIFTY100 LOWVOL30': 'nifty100LowVolatility30',
  'NIFTY ALPHA 50': 'niftyAlpha50',


  'INDIA VIX': '-',
  'NIFTY 100': '-',
  'NIFTY 500': '-',
  'NIFTY MIDCAP 100': '-',
  'NIFTY GS 11 15YR': '-',
  'NIFTY50 PR 1X INV': '-',
  'NIFTY GS COMPSITE': '-',
  'NIFTY GS 15YRPLUS': '-',
  'NIFTY50 PR 2X LEV': '-',
  'NIFTY50 TR 1X INV': '-',
  'NIFTY 200': '-',
  'NIFTY GS 4 8YR': '-',
  'NIFTY GS 8 13YR': '-',
  'NIFTY50 TR 2X LEV': '-',
  'NIFTY50 DIV POINT': '-',
  'NIFTY SMLCAP 100': '-',
  'NIFTY GS 10YR': '-',
  'NIFTY GS 10YR CLN': '-',
};

```

- companyName

```javascript

[ ACC, ADANIENT, ADANIPORTS, ADANIPOWER, AJANTPHARM, ALBK, AMARAJABAT, AMBUJACEM, APOLLOHOSP, APOLLOTYRE, ARVIND, ASHOKLEY, ASIANPAINT, AUROPHARMA, AXISBANK, BAJAJ-AUTO, BAJFINANCE, BAJAJFINSV, BALKRISIND, BANKBARODA, BANKINDIA, BATAINDIA, BEML, BERGEPAINT, BEL, BHARATFIN, BHARATFORG, BPCL, BHARTIARTL, INFRATEL, BHEL, BIOCON, BOSCHLTD, BRITANNIA, CADILAHC, CANFINHOME, CANBK, CAPF, CASTROLIND, CEATLTD, CENTURYTEX, CESC, CGPOWER, CHENNPETRO, CHOLAFIN, CIPLA, COALINDIA, COLPAL, CONCOR, CUMMINSIND, DABUR, DCBBANK, DHFL, DISHTV, DIVISLAB, DLF, DRREDDY, EICHERMOT, ENGINERSIN, EQUITAS, ESCORTS, EXIDEIND, FEDERALBNK, GAIL, GLENMARK, GMRINFRA, GODFRYPHLP, GODREJCP, GODREJIND, GRASIM, GSFC, HAVELLS, HCLTECH, HDFCBANK, HDFC, HEROMOTOCO, HEXAWARE, HINDALCO, HINDPETRO, HINDUNILVR, HINDZINC, ICICIBANK, ICICIPRULI, IDBI, IDEA, IDFCBANK, IDFC, IFCI, IBULHSGFIN, INDIANB, IOC, IGL, INDUSINDBK, INFIBEAM, INFY, INDIGO, IRB, ITC, JISLJALEQS, JPASSOCIAT, JETAIRWAYS, JINDALSTEL, JSWSTEEL, JUBLFOOD, JUSTDIAL, KAJARIACER, KTKBANK, KSCL, KOTAKBANK, KPIT, L&TFH, LT, LICHSGFIN, LUPIN, M&MFIN, MGL, M&M, MANAPPURAM, MRPL, MARICO, MARUTI, MFSL, MINDTREE, MOTHERSUMI, MRF, MCX, MUTHOOTFIN, NATIONALUM, NBCC, NCC, NESTLEIND, NHPC, NIITTECH, NMDC, NTPC, ONGC, OIL, OFSS, ORIENTBANK, PAGEIND, PCJEWELLER, PETRONET, PIDILITIND, PEL, PFC, POWERGRID, PTC, PNB, PVR, RAYMOND, RBLBANK, RELCAPITAL, RCOM, RELIANCE, RELINFRA, RPOWER, REPCOHOME, RECLTD, SHREECEM, SRTRANSFIN, SIEMENS, SREINFRA, SRF, SBIN, SAIL, STAR, SUNPHARMA, SUNTV, SUZLON, SYNDIBANK, TATACHEM, TATACOMM, TCS, TATAELXSI, TATAGLOBAL, TATAMTRDVR, TATAMOTORS, TATAPOWER, TATASTEEL, TECHM, INDIACEM, RAMCOCEM, SOUTHBANK, TITAN, TORNTPHARM, TORNTPOWER, TV18BRDCST, TVSMOTOR, UJJIVAN, ULTRACEMCO, UNIONBANK, UBL, MCDOWELL-N, UPL, VEDL, VGUARD, VOLTAS, WIPRO, WOCKPHARMA, YESBANK, ZEEL ]

```

- time

```javascript

var time = [1, 5, 15, 30, 60, 'week', 'month', 'year'] minutes

```

## Bombay Stock Exchange (BSE) API

- Get details of all index in BSE Stock exchange<br/>
Format: JSON<br/>
http://localhost:3000/bse/get_indices<br/>

- Get all the indices of NSE(Get the information of only a single index<br/>
Format: JSON<br/>
http://localhost:3000/bse/getIndexInfo?indexId=16<br/>

- Get todays closing data and daily data of past time using IndexId and time from BSE<br/>
Format: JSON<br/>
http://localhost:3000/bse/get_index_chart_data?indexId=16<br/>

- Get details of all the stocks in an index<br/>
Format: JSON<br/>
http://localhost:3000/bse/get_index_stocks?indexId=16<br/>

- Gets the StockValue, Volume for company in specified past time<br/>
// 500112 - symbol (securityCode) of SBIN stock BSE<br/>
Format: JSON<br/>
http://localhost:3000/bse/get_company_info?companyKey=500112<br/>

- Get the stocks chart data<br/>
Format: JSON<br/>
http://localhost:3000/bse/get_stocks_chart_data?companyKey=500325&time=5<br/>
http://localhost:3000/bse/get_stocks_chart_data?companyKey=500325&time=month<br/>

- Get BSE stock data of stock info and day chart<br/>
Format: HTML<br/>
http://localhost:3000/bse/get_stock_info_and_day_chart_data?companyKey=500325<br/>

- Get the top gainers of BSE stock exchange<br/>
Format: JSON<br/>
http://localhost:3000/bse/get_gainers<br/>

- Get the top losers of BSE stock exchange<br/>
Format: JSON<br/>
http://localhost:3000/bse/get_losers<br/>

- Get the top turnovers of BSE stock exchange<br/>
Format: JSON<br/>
http://localhost:3000/bse/getTopTurnOvers<br/>

- indexId (symbolKey)

**`symbolKey` is different from `symbol` or `securityCode`, this value is present in response of getIndices method in 'key' property**

**valid symbols for Index Futures and Options are `["BANKNIFTY","FTSE100","NIFTY","NIFTYINFRA","NIFTYIT","NIFTYMID50","NIFTYPSE"]`**

- companyKey

You can check the company key values using:

```javascript

https://github.com/maanavshah/stock-market-india/bse/constant/names.js

```

- time

```javascript

var time = [1, 5, 15, 30, 60, 'week', 'month', 'year'] minutes

```

## INSTALLATION

Let's get step by step here.

**Identify the location for your application.**

First identify the location for your application. Let's take it as /home/user/your_app. The path doesn’t matter, so feel free to locate the directory wherever it is best for you.

**Installing Node.js**

Here is where we will set up Node.js and Express. Node.js is a framework and Express provides a web server. The webserver we need does not need to do anything fancy. The only feature that the webserver needs are the ability to provide static files.

To get started download and install Node.JS: [nodejs.org](http://nodejs.org/)

**Install Express**

Express is a package that executes within Node.js. To install express, in the Command Prompt navigate to your directory for the application which is  /home/user/your_app.

Now let's install Express as a package for Node.js. At the command prompt type “npm install express”. That installed Express and should have created a directory called “node_modules”. 

**Start Express Web Server in Node.js**

In the terminal confirm you are at the  /home/user/your_app directory and execute the following command.

> node app.js 3000

Now the webserver should be running on port 3000 and you should be able to access the APIs.

## IMPORTANT

> API Calls will fail when made from browser due to 'OPTIONS' request sent by browsers before making an API call and Have few 'insecure' headers set which fails when changed from browser.

> We Get all the indices of NSE (work around to make the call either on your server or in your app).

### Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/maanavshah/stock-market-india. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.
I give credits to https://github.com/kaushiknishchay/indian-stock-exchange, using which it was possible for me to create the library.

### License

The content of this repository is licensed under [MIT LICENSE](LICENSE).
