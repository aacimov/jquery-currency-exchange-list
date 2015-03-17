(function($) {

	$.fn.getCurrencyExchangeRates = function (options){

		var settings = $.extend({
			currencyList: ["CHF","EUR","USD","GBP"],
			date: "",
			selector: '#hnb'
		}, options );

		var $exchangeList = $(settings.selector);

		function formattedDate() {
			var d = new Date(settings.date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();
			if (month.length < 2) month = '0' + month;
			if (day.length < 2) day = '0' + day;
			return [year,month,day, ].join('-');
		}

		var $table = $('<table class="currency-exchange-list-table"/>');

		$.ajax({
			dataType: "jsonp",
			url: "http://hnbex.eu/api/v1/rates/daily/?date="+formattedDate(settings.date)
		})
		.done(function(data) {
			$table.append("<tr class='header'><th>Valuta</th><th>Kupovni</th><th>Srednji</th>/<th>Prodajni</th></tr>");

			var filtered_data = $.grep(data, function(currency){
				return currency && settings.currencyList.indexOf(currency.currency_code) > 0;
			});

			$.each(filtered_data, function(){
				$table.append(
				                     "<tr id=" + this.currency_code + ">" +
				                     "<td>" + this.currency_code + "</td>" +
				                     "<td>" + this.buying_rate + "</td>" +
				                     "<td>" + this.median_rate + "</td>" +
				                     "<td>" + this.selling_rate + "</td>" +
				                     "</tr>"
				                     );
			});

		})
		.fail(function(){
			$table.append("<tr><td>Pogreška u dohvaćanju informacija sa HNB tečajne liste.</td></tr>");
		})
		.always(function(){
			$exchangeList.append($table);
		});

	};

}(jQuery));