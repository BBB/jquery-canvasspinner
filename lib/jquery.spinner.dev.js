/*
  * jQuery Canvas Spinner Plugin
  * version: 1.0
  * Author: Ollie Relph
  * http://github.com/BBB/jquery-canvasspinner
  * Copyright: Copyright 2010 Ollie Relph
  */ 
 (function($) {
 	$.fn.spinner = function(settings) {
 		
 		settings = $.extend({
 			sqr: 0,
 			framerate : 10,
 			spokes : 16,
 			colour : '255,255,255',
 			backup : 'images/spinner.gif'
 		}, settings || {});
 
 		return this.each(function () {
 
 			var $this = $(this),
 				width = $this.width(),
 				height = $this.height(),
 				ctx;
 				
 			if (settings.sqr === 0 ) {
 				settings.sqr = Math.round(width >= height ? height : width);
 			}
 			
 			var hsqr = settings.sqr/2, 			
	 			$wrap = $('<div id="spinner-' + $.fn.spinner.count + '" class="spinner" />').css({'position' : 'absolute', 'z-index' : 999, 'left' : '50%', 'top' : '50%', 'margin' : hsqr * -1 + 'px 0 0 ' + hsqr * -1 + 'px', 'width' : settings.sqr, 'height' : settings.sqr })
 		  		$canv = $('<canvas />').attr({ 'width' : settings.sqr, 'height' : settings.sqr });
 			
 			var tcss = $this.css('position');
 			log(tcss);
 			if ( tcss === 'static' ) {
 				$this.css({ 'position' : 'relative' });
 			}
 			
 			$canv.appendTo($wrap);
 			$wrap.appendTo($this);
 			 		
			if ( $canv[0].getContext ){  
				ctx = $canv[0].getContext('2d');
				ctx.translate(hsqr, hsqr);
				ctx.lineWidth = Math.ceil(settings.sqr * 0.025);
				ctx.lineCap = 'round'
				this.loop = setInterval(drawSpinner, 1000/ settings.framerate);
			} else {
				// show a backup image...
				$canv.remove();
				$wrap.css({ 'background-image' : 'url(' + settings.backup + ')', 'background-position' : 'center center', 'background-repeat' : 'none'})
			}
			
			function drawSpinner () {
				ctx.clearRect(hsqr * -1, hsqr * -1, settings.sqr, settings.sqr);
				ctx.rotate(Math.PI * 2 / settings.spokes);
				for (var i = 0; i < settings.spokes; i++) {
					ctx.rotate(Math.PI * 2 / settings.spokes);
					ctx.strokeStyle = 'rgba(' + settings.colour + ','+ i / settings.spokes +')';
					ctx.beginPath();
					ctx.moveTo(0, hsqr * 0.3);
					ctx.lineTo(0, hsqr * 0.6);
					ctx.stroke();
				}
			}  
 			$.fn.spinner.count++;
 		});
 	};
 	$.fn.spinner.count = 0;
 	$.fn.spinner.loop;
 
 	$.fn.clearSpinner = function() {
 		return this.each(function () {
	 		clearTimeout($.fn.spinner.loop);
	 		$(this).find('div.spinner').fadeOut().remove().end();
 		});
 	}
})(window.jQuery);