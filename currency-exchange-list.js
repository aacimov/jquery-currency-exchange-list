(function($) {
	
	$.fn.getCurrencyExchangeRates = function (options){
		
		var $exchangeList = $(".currency-exchange-list");
		
		var settings = $.extend({
            currencyList: ["CHF","EUR","USD","GBP"]
        }, options );
			
		function formattedDate(date) {
		    var d = new Date(date || Date.now()),
		        month = '' + (d.getMonth() + 1),
		        day = '' + d.getDate(),
		        year = d.getFullYear();
		    if (month.length < 2) month = '0' + month;
		    if (day.length < 2) day = '0' + day;
		    return [year,month,day, ].join('-');
		}
	
		$.ajax({
			dataType: "jsonp",
			url: "http://hnbex.eu/api/v1/rates/daily/?date="+formattedDate()+"?callback=",
			success: function(data) {
				$exchangeList.append("<tr class='header'><th>Valuta</th><th>Kupovni</th><th>Srednji</th>/<th>Prodajni</th></tr>")
				$.each(data, function(){
					$exchangeList.append(
						"<tr id=" + this.currency_code + ">" + 
						"<td>" + this.currency_code + "</td>" +
						"<td>" + this.buying_rate + "</td>" +
						"<td>" + this.median_rate + "</td>" +
						"<td>" + this.selling_rate + "</td>" + 
						"</tr>"
					);
				});
				$exchangeList.wrapInner("<table class='currency-exchange-list-table'>");
				function findCurrencies (currencyList) {
					currencyList.forEach(function(currencyName){
						$exchangeList.find("#" + currencyName).css("display","table-row");;
					});
				}
				findCurrencies (settings.currencyList);
			},
			error: function(){ $exchangeList.append("<tr><td>Pogreška u dohvaćanju informacija sa HNB tečajne liste.</td></tr>"); }
		});	
	}
	
}(jQuery));