
jQuery(document).ready(function($){

	// Auto hides the top navbar when scrolling
	$('.navbar-fixed-top').autoHidingNavbar({
		showOnUpScroll: true,
		showOnBottom:   true
	});

	// Initializes the RSS feed
	$('#rss-feed').FeedEk({
		FeedUrl  : 'http://alexdantas.net/stuff/posts/category/projects/nsnake/feed/',
		MaxCount : 5,
		ShowDesc : false,
		TitleLinkTarget : '_blank'
	});
});

