$(document).ready(function() {
	$("a.video").click(function(event) {
		event.preventDefault();
		var parent = $(this).parent();
		var span = $("span", $(this));
		
		if (span.hasClass('glyphicon-eject')) {
			span.removeClass('glyphicon-eject');
			$("div.video-frame", parent).remove();
		}
		else {
			var videoID = $(this).attr("data-videoID");
			
			parent.append('<div class="video-frame"><iframe width="450" height="253" src="//www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
			span.addClass('glyphicon-eject');
		}
	})
	
	$("a.pdf").click(function(event) {
		event.preventDefault();
		var parent = $(this).parent();
		var span = $("span", $(this));
		
		if (span.hasClass('glyphicon-eject')) {
			span.removeClass('glyphicon-eject');
			$("div.pdf-frame", parent).remove();
		}
		else {
			var href = $(this).attr("href");
			
			parent.append('<div class="pdf-frame"><iframe width="1000" height="560" src="' + href + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>');
			span.addClass('glyphicon-eject');
		}
	});

	// Print Button
	$("button.btn-info").click(function(event) {
		console.log("print me!");
		window.print();
	});

	// About the Team / Credits
	$(".wrapper").mouseover(function(event) {
		var description = $(".description_content", this);
		$(this).addClass("highlight");
		$(".img-description").text(description.text());
		// description.show();
	});
	
	$(".wrapper").mouseout(function(event) {
		var description = $(".description", this);
		$(this).removeClass("highlight");
		$(".img-description").text("");
		// description.hide();
	});
});
