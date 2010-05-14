speechify_path = $('script[src*=speechify.js]').attr('src').replace(/[^\/]*$/, ''); // Trick to find out the url of the plugin
$('script:last').after("<link rel='stylesheet' type='text/css' href='" + speechify_path + "tooltip.css' />"); // Add CSS file

;(function($) {
	$.fn.speechify = function(options) {
		
		// Settings
		var defaults = {
			colorBehindTooltip: 'white',
		};
		var settings = $.extend({}, defaults, options);
		
		return this.each(function() {
			var $$ = $(this);
			if ($$.attr('title')!='') {
				$$.data('speech', this.title);
				this.title = ''; // Empty the title to disable the default tooltip
				$$.hover(function(e){ // Rollover
						$("body").append("<div id='speechify_wrapper'><div id='speechify'>" + $$.data('speech') + "</div><div id='speechify_spike'></div></div>"); // Add tooltip and spike to page
						var $speechify = $('#speechify');
						$('#speechify_spike').css({
							position: 'relative', width: '0px', height: '0px', left: $speechify.css('padding-left'),
							borderStyle: 'solid', borderWidth: $speechify.css('padding-left'), borderColor: 'black transparent transparent transparent'
						});				  							  	
			    },
					function(){		
						$("#speechify_wrapper").remove();
			  });
				$$.mousemove(function(e){ // Position
					var $speechify = $('#speechify');
					$("#speechify_wrapper")
						.css("bottom",($(window).height() - ($$.offset().top)) + "px")
						.css("left",(e.pageX - parseInt($speechify.css('padding-left'))*2) + "px");
				});
				$$.click(function(e){ // Make it disapear on click to avoid it to stay on some Ajax tricks
					$$.mouseout();
				});
			}
		});
	}
	
	$.speechify = function(options) {
		// Assign elements with a non-blank title field
		// You might overwrite this if you want to use livequery or whatever
		// But i keep this for the ease of use
		$(function() {
			if ($.fn.livequery) {
				$('*[title]').livequery(function() {
					$(this).speechify(options);
				});
			} else {
				$('*[title]').each(function() {
					$(this).speechify(options);
				});
			}
		});	
		
	}
	
})(jQuery);