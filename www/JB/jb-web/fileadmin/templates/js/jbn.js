jQuery(document).ready(function() { 
	
	// hide first archive link in sidebar
	$(".news-amenu-container ul li").first().css("display", "none");
	
	// Acitvate Lightbox
	jQuery('a.lightbox').fancybox({ 
		'titlePosition' : 'inside', 
		'overlayColor' : '#000000', 
		'overlayOpacity' : '0.7', 
		'hideOnContentClick' : 'true', 
		'speedIn' : '100', 
		'speedOut' : '100', 
		'transitionIn' : 'fade', 
		'transitionOut' : 'fade'
	});
	
	// set first element in sidebar to 0 margin
	$('#sidebar-content h2').first().css('margin-top','0');
	
	// iPad Dropdown Fix (delay)
	var pageWidth = $(window).width();
	if ( pageWidth > 761 ) {
		$('ul.sf-menu').superfish({
			delay: 0
			});
		$('.no-javascript').hide();
	};
	
	// News List - line on top first message
	$(".news-list-browse a:first-child").addClass("first");
	$(".news-list-browse a:last-child").addClass("last");
	$(".news-latest-container .news-latest-item:last").addClass("last");
	$(".portlet-jbn:nth-child(4)").addClass("right-element");
	
	// On Site - image gallery - only show first image
	$(".csc-textpic-imagerow").css("display", "none");
	$(".csc-textpic-imagerow:first-child").css("display", "block");
	$(".csc-textpic-imagewrap li").css("display", "none");
	$(".csc-textpic-imagewrap li:first-child").css("display", "block");
	$(".project-listing").first().addClass("first-item");
	
	// Selectbox (Dropdown styles)
	$('#thechoices').bind('change', function () {
		var url = $(this).val(); // get selected value
		if (url) { // require a URL
			window.location = url; // redirect
		}
		return false;
	});
	
	$("#thechoices, #jobapplication").selectbox();
	
	 //Lightbox (Icon)
	$('a.zoom, a.zoom-small').append('<span><\/span>');
});