$(document).ready(function() {
	function assignAjaxLinks() {
		$("a.ajax").click(function(event) {
			event.preventDefault();
			
			var page = $(this).attr("href");
			var title = $(this).attr("data-title");
			var navigation = $(this).attr("data-nav");
			var objState = { "title": title, "navigation": navigation }; 
			
			$("a.ajax").removeClass("active");
			$(this).addClass("active");
			
			window.history.pushState(objState, title, page);
			ajaxCall(page, title, navigation);
		});
	}
	
	function ajaxCall(page, title, navigation, image) {
		if (navigation) {
			$("#navigation").fadeOut("fast", function() {
				$.get(navigation + "/ajax", function(data) {
					$("#navigation").html(data);
					$("a.ajax").removeClass("active");
					$("a.ajax[data-title='" + title + "']").addClass("active");
					
					// $("body").css("background-image", "url('/images/secondaryPageBG_v2.png')");
					
					// Need to assign click handlers for new content.
					assignAjaxLinks();
					
					$("#navigation").fadeIn("fast", function() {
						// fade in
					});
				});
			});
		}
		
		$("#main .content").fadeOut("fast", function() {
			$.get(page + "/ajax", function(data) {
				$("#main .content").html(data);
				
				$("#main .content").fadeIn("fast", function() {
					// fade in
				});
			});
		});
	}
	
	assignAjaxLinks();
	
	// $("*").draggable(); // All elements on page are draggable
	
	// An event that fires when the user hits the browser back, forward or refresh.
	// This works in conjunction with window.history.pushState.
	window.onpopstate = function(event) {
		if (event.state) {
			// console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
			ajaxCall(document.location, event.state.title);
		}
	}
	
	// $("*").draggable();
});


// Resize the sidebar to contain a navigation.
// The home page has a 10 column main content are with a 1 col offset.
// It's navigation is the main content.
function bflResizeNavigation() {
	$("#main").removeClass("col-md-10");
	$("#main").removeClass("col-md-offset-1");
	$("#main").addClass("col-md-8");
	
	$("#navigation").removeClass("col-md-1");
	$("#navigation").addClass("col-md-offset-1");
	$("#navigation").addClass("col-md-3");
}


// Use arrow keys to go forward and backward - maybe only for the manual navigation.
$(document).keydown(function(e) {
    if (e.keyCode == 37) { 
       history.back();
       return false;
    } 
	else if(e.keyCode == 39) {
		history.forward();
		return false;
	}
});