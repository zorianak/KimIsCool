/* hide all of the divs until we want them. */
function menu() {
    
    // we want to check for the document's hash. This helps with bookmarking.
        var hash = location.hash;
        if ( hash == '') {
            $('#siteWelcomeScreen').show(500);
            $('.contentSelection').hide();
	        $('#subPageMenu').hide(500);
            $('.home').addClass('selectedPage');
            
        } else {
            $('#siteWelcomeScreen').hide();
            $('.contentSelection').hide();
            $(hash).show(500);
            
            // we also add a selected class when they click - it only makes sense to do the same thing here, which will involve some high tech arithmeticky.
            var selectedElem = hash.slice(hash.indexOf('#') + 1, hash.length);
            $('.' + selectedElem).addClass('selectedPage');
        }

	/* any time a link is clicked, its HREF should point toward a certain element ID. we will take advantage of that.*/
	
	$('.subnav').click(function(e) {
		e.preventDefault();
        
		/* if it has a certain class, we don't want to hide all contentSelections.*/
		var linkClass = $(this).attr('id');
        
        // remove the selected class
        $('#sidebar li').removeClass('selectedPage');
        
        // but let's make sure that class is set again :-)
        $(this).parent().addClass('selectedPage');
		
		if(linkClass != 'subLink' && linkClass != 'subSubLink') {
			/* hide any options already displayed */
			$('.contentSelection').hide();
			$('.sublist').hide();
		}
		
		if(linkClass != 'subSubLink') {
			$('.subSections').hide(500);
		} else {
			$('#retrieveAuthList').hide(500);
			$('#searchMemberSubli').hide(500);
		}

		/* the href value of the links actually holds the ID of the divs to display.*/
        // also, update the URL hash
		var selectedOption = $(this).attr('href');
        document.location.hash = selectedOption;
        // I don't like that there isn't any real display that the link has been interacted with
        $(this).addClass('pageName');
		
		$('.sublist').hide(200);
		$('#siteWelcomeScreen').hide(500);
		$('#subPageMenu').show(500);
		
		$(selectedOption).show(500);
	});
    
}