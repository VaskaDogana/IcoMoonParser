/*
Plugin: IcoMoonParser
Author: Davide Calignano
*/
(function ( $ ) {

	$.fn.icomoonParser = function(options) {

		//Options
		var settings = $.extend({
			json: "selection.json"
		}, options );

		//Append some container div
		this.append('<style>#icomoon-parser-results [class^="icon-"],#icomoon-parser-results [class*=" icon-"] {display: inline-block;color: #888;fill: currentColor;width:24px;height: 24px;vertical-align: middle;}</style>');
		this.append('<svg id="icomoon-parser-svg" display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs></svg>');
		this.append('<div id="icomoon-parser-results"></div>');

		//Cache vars
		var $svg = $('#icomoon-parser-svg > defs');
		var $results = $('#icomoon-parser-results');
		var prefix = svg = results = '';

		//Download json and parse
		$.ajax({
			url: settings.json,
			dataType: "json",
			success: function(data) {
				prefix = data.preferences.fontPref.prefix;
				$.each(data.icons, function(i,v) {						
					generate_symbol(v.icon.paths, v.properties.name)
				});

				$svg.html(svg);
				$results.html(results);
			}
		}).fail(function() {
			$results.append("<p>Error, unable to download <i>"+settings.json+"</i></p>")
		});

		//Generate all Symbols
		function generate_symbol(paths, name) {
			var path;
			$.each(paths, function(i,v){ 
				path+='<path class="path'+i+'" d="'+v+'"></path>'
			});
			
			svg += '<symbol id="'+prefix+name+'" viewBox="0 0 1024 1024"><title>'+name+'</title>'+path+'</symbol>';
			results += '<div class="ic"><svg class="'+prefix+name+'"><use xlink:href="#'+prefix+name+'"></use></svg><span class="mls"> '+prefix+name+'</span></div>';
		}

		return this;
	};
}( jQuery ));