/* hide all of the divs until we want them. */
	$('#siteWelcomeScreen').show(500);
	$('.contentSelection').hide();
	$('#subPageMenu').hide(500);

	/* any time a link is clicked, its HREF should point toward a certain element ID. we will take advantage of that.*/
	
	$('.subnav').click(function(e) {
		e.preventDefault();
		/* if it has a certain class, we don't want to hide all contentSelections.*/
		var linkClass = $(this).attr('class');
		
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
		var selectedOption = $(this).attr('href');
		
		$('.sublist').hide(200);
		$('#siteWelcomeScreen').hide(500);
		$('#subPageMenu').show(500);
		
		$(selectedOption).show(500);
	});