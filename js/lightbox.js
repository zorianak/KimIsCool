/* logic for our lightbox */

function lightbox() {
	$('.portfolio_item').click(function(e) {
		// prevent browser from opening image in new tab
		e.preventDefault();
		
		// set its href
		var img_href = $(this).attr("href");
		if ($('#lightboxWrapper').length > 0) {
			// the href will dynamically be loaded into the rendered lightbox HTML
			$('#lightboxContent').html('<img src="' + img_href + '" />');
		
			$('#lightboxWrapper').show(500);
		} else {
			var lightbox = '<div id="lightboxWrapper">' +
				'<div id="lightboxContent">' +
				'<p class="closeBox">close</p>' +
				'<img src="' + img_href + '" />' +
				'</div>' +
				'</div>';
				
				$('body').append(lightbox);
		}
	});
	
	$('#lightboxWrapper').live('click', function() {
		$('#lightboxWrapper').hide(500);
		$('#lightboxWrapper').remove();
	});
    
}