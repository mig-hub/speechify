tooltip_offset = 10;
speechify_path = $('script[src*=speechify.js]').attr('src').replace(/[^\/]*$/, '');
spike_file = speechify_path + 'tooltip_spike.gif';
$('script:last').after("<link rel='stylesheet' type='text/css' href='" + speechify_path + "tooltip.css' />");

;(function($) {
	$.fn.speechify = function() {
		
		return this.each(function() {
			$(this).data('speech', this.title);
			this.title = '';
			$(this).hover(function(e){											  							  
				
				$("body").append("<img src='" + spike_file + "' id='tooltip_spike' /><p id='tooltip'>" + $(this).data('speech') + "</p>");
				$("#tooltip, #tooltip_spike").show();		
		    },
				function(){		
					$("#tooltip, #tooltip_spike").remove();
		  });
			$(this).mousemove(function(e){
				$("#tooltip_spike")
					.css("bottom",($(window).height() - ($(this).offset().top)) + "px")
					.css("left",(e.pageX - 8) + "px");
				$("#tooltip")
					.css("bottom",($(window).height() - ($(this).offset().top)) + "px")
					.css("left",(e.pageX - 8 - 7) + "px");
			});
			$(this).click(function(e){
				$(this).mouseout();
			});
		});
	}
})(jQuery);

$(function() {
	$('*[title]').each(function() {
		if ($(this).attr('title')!='') {
			$(this).speechify();
		}
	});
});