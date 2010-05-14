

;(function($) {
	$.fn.speechify = function(options) {
		
		// Settings
		var defaults = {
			color: 'white', backgroundColor: 'black', padding: '5px', fontFamily: 'sans-serif', fontSize: '11px', fontWeight: 'normal',
			'border-radius': '5px', '-moz-border-radius': '5px', '-webkit-border-radius': '5px',
		};
		var settings = $.extend({}, defaults, options);
		
		return this.each(function() {
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