// (c) 2009 - 2010 Mickael Riga - See MIT_LICENSE file for details
// Speechify.js version 2

;(function($) {
	$.fn.speechify = function(options) {
		
		// Settings
		var defaults = {
			color: 'white', backgroundColor: 'black', padding: '5px', fontFamily: 'sans-serif', fontSize: '11px', fontWeight: 'normal',
			'border-radius': '5px', '-moz-border-radius': '5px', '-webkit-border-radius': '5px'
		};
		var settings = $.extend({}, defaults, options);
		
		var give_speech = function() {
			var $$ = $(this);
			if ($$.attr('title')!='') {
				$$.data('speech', this.title);
				this.title = ''; // Empty the title to disable the default tooltip
				$$.hover(function(e){ // Rollover
						$("body").append("<div id='speechify_wrapper'><div id='speechify'>" + $$.data('speech') + "</div><div id='speechify_spike'></div></div>"); // Add tooltip and spike to page
						$('#speechify_wrapper').css('position', 'absolute');
						var $speechify = $('#speechify').css(settings).css('border', '0px');
						$('#speechify_spike').css({
							position: 'relative', width: '0px', height: '0px', left: $speechify.css('padding-left'),
							borderStyle: 'solid', borderWidth: $speechify.css('padding-left'), borderColor: $speechify.css('background-color')+' transparent transparent transparent'
						});				  							  	
			    },
					function(){		
						$("#speechify_wrapper").remove();
			  });
				$$.mousemove(function(e){ // Position
					var $speechify = $('#speechify');
					var bottom_pos = $(window).height() - $$.offset().top;
					var left_pos = e.pageX - (parseInt($speechify.css('padding-left'))*2);
					$("#speechify_wrapper").css({bottom: bottom_pos+"px", left: left_pos+"px"});
				});
				$$.click(function(e){ // Make it disapear on click to avoid it to stay on some Ajax tricks
					$$.mouseout();
				});
			}
		}; // Minified version breaks without that semi-colon
	
		if ($.fn.livequery) {
			return this.livequery(give_speech);
		}	else {
			return this.each(give_speech);
		}
	
	}; // Minified version breaks without that semi-colon
	
	$.speechify = function(options) {
		// Assign elements with a non-blank title field
		$(function() {
			$('*[title]').speechify(options);
		});			
	}	
})(jQuery);