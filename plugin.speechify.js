tooltip_offset = 10; // Right offset
speechify_path = $('script[src*=speechify.js]').attr('src').replace(/[^\/]*$/, ''); // Trick to find out the url of the plugin
spike_file = speechify_path + 'tooltip_spike.gif'; // Url of the spike
$('script:last').after("<link rel='stylesheet' type='text/css' href='" + speechify_path + "tooltip.css' />"); // Add CSS file

;(function($) {
	$.fn.speechify = function(options) {
		
		// Settings
		var defaults = {
			colorBehindTooltip: 'white',
		};
		var settings = $.extend({}, defaults, options);
		
		return this.each(function() {
			$(this).data('speech', this.title);
			this.title = ''; // Empty the title to disable the default tooltip
			$(this).hover(function(e){ // Rollover
				$("body").append("<img src='" + spike_file + "' id='speechify_spike' /><p id='speechify'>" + $(this).data('speech') + "</p>"); // Add tooltip and spike to page							  							  
				$("#speechify, #speechify_spike").show();		
		    },
				function(){		
					$("#speechify, #speechify_spike").remove();
		  });
			$(this).mousemove(function(e){ // Position
				$("#speechify_spike")
					.css("bottom",($(window).height() - ($(this).offset().top)) + "px")
					.css("left",(e.pageX - 8) + "px");
				$("#speechify")
					.css("bottom",($(window).height() - ($(this).offset().top)) + "px")
					.css("left",(e.pageX - 8 - 7) + "px");
			});
			$(this).click(function(e){ // Make it disapear on click to avoid it to stay on some Ajax tricks
				$(this).mouseout();
			});
		});
	}
	
	$.speechify = function(options) {
		// Assign elements with a non-blank title field
		// You might overwrite this if you want to use livequery or whatever
		// But i keep this for the ease of use
		$(function() {
			if ($.fn.livequery) {
				$('*[title]').livequery(function() {
					if ($(this).attr('title')!='') {
						$(this).speechify(options);
					}
				});
			} else {
				$('*[title]').each(function() {
					if ($(this).attr('title')!='') {
						$(this).speechify(options);
					}
				});
			}
		});	
		
	}
	
})(jQuery);