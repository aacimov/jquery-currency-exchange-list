#jquery-currency-exchange-list
jQuery plugin for displaying currency exchange list based on Croatian national bank (HNB) Exchange Rate Lookup by hnbex.eu. Plugin gets the currency list in JSONP using AJAX which makes possible using cross-domain requests from JavaScript directly from the user's browser.
##Usage
Use this plugin to get Croatian national bank (HNB) currency exchange list for present day. You can easily format the displayed list of currencies using options described below. Plugin is using the API provided by hnbex.eu.
##Implementation
* Plugin is jQuery based so before attaching the plugin you have to add jQuery to your `<head>` tag<br>`<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>`<br><br>
* Add the plugin script anywhere after jQuery in `<head>` tag<br>`<script type="text/javascript" src="currency-exchange-list.js"></script>`<br><br>
* Create `<div id="hnb">` in your template file<br><br>
* Attach the plugin to `<div id="hnb"></div>`
```javascript
$(document).ready(function() {
	$("#hnb").getCurrencyExchangeRates();
});
```
* If you want to use a different selector, just pass it in options parameter, like this: 
```javascript 
$("#hnb").getCurrencyExchangeRates({selector:'.my-currency-exchange-widget'});
```
* By default (if no options added), displayed currencies are CHF, EUR, GBP, USD.<br><br>

##Options to customize the displayed currency list (`currencyList`,`date`)

* If you wish to display your own set of currencies you can do it by adding options parameter (`currencyList`) <br><br>_Example for showing only EUR and USD:_<br>
```javascript
$(document).ready(function() {
	$("#hnb").getCurrencyExchangeRates({
		currencyList: ["EUR","USD"]
	});
});
```
* You can add following currencies: AUD, CAD, CZK, DKK, HUF, JPY, NOK, SEK, CHF, GBP, USD, EUR, PLN<br><br>
* If you wish to display table of currency exchange rates on a specified date you can use an option parameter (`date`)<br><br>_Example showing rates on a specified date:_<br>
```javascript
$(document).ready(function() {
	$("#hnb").getCurrencyExchangeRates({
		date: "yyyy-mm-dd"
	});
});
```
* Of course you can use both parameters (`currencyList` and `date`)<br><br>
_Example showing EUR and USD on a specified date (2015-03-01)_<br>
```javascript
$(document).ready(function() {
	$("#hnb").getCurrencyExchangeRates({
		currencyList: ["EUR","USD"],
		date: "2015-03-01"
	});
});
```

##Fork
Feel free to improve the plugin and share your fork with the world :)
