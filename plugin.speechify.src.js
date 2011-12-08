// (c) 2009 - 2011 Mickael Riga - See MIT_LICENSE file for details
// Speechify.js version 3
// Use jQuery 1.6.2

;(function($) {
	$.fn.speechify = function(options) {
		
		// Settings
		if (options) {
			var pointer_offset = options.pointer_offset;
			delete options.pointer_offset;
		}
		
		var defaults = {
			color: 'white', backgroundColor: 'black', padding: '5px', fontFamily: 'sans-serif', fontSize: '11px', fontWeight: 'normal',
			'border-radius': '5px', '-moz-border-radius': '5px', '-webkit-border-radius': '5px'
		};
		var settings = $.extend({}, defaults, options);
		
		// Init the tooltip
		var $speechify_wrapper = $("<div id='speechify_wrapper'><div id='speechify'></div><div id='speechify_spike'></div></div>");
		$("body").append($speechify_wrapper);
		$speechify_wrapper.css('position', 'absolute');
		var $speechify = $('#speechify').css(settings).css('border', '0px');
		$('#speechify_spike').css({
			position: 'relative', width: '0px', height: '0px', left: $speechify.css('padding-left'),
			borderStyle: 'solid', borderWidth: $speechify.css('padding-left'), borderColor: $speechify.css('background-color')+' transparent transparent transparent'
		});
		
		$speechify_wrapper.hide();
		
		var $$ = $(this);
		
		$$.live({
			'mouseenter.speechify': function() {
				if (this.title!='') {
					$(this).data('title', this.title);
					this.title = '';
				}
				if ($(this).data('title')) {
					$speechify.html($(this).data('title'));
					$speechify_wrapper.show();
				}
			},
			'mouseleave.speechify': function() {
				$speechify_wrapper.hide();
			},
			'mousemove.speechify': function(e) {
				if (pointer_offset) {
					var bottom_pos = $(window).height() - e.pageY + pointer_offset.bottom;
					var left_pos = e.pageX + pointer_offset.left;
				} else {
					var bottom_pos = $(window).height() - $(this).offset().top;
					var left_pos = e.pageX - (parseInt($speechify.css('padding-left'))*2);
				}
				$speechify_wrapper.css({bottom: bottom_pos+"px", left: left_pos+"px"});
			},
			'click.speechify': function() {
				$speechify_wrapper.hide();
			}
		});
	
	}; // Minified version breaks without that semi-colon
	
	$.speechify = function(options) {
		// Assign elements with a non-blank title field
		$('*[title]').speechify(options);		
	}	
})(jQuery);