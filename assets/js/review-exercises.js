$(document).ready(function() {
	var intro = $('[name="intro"]');
	var parts = $('[name="parts"]');
	var partAnswers = [ ];
	var review = $('[name="review"]');
	var skillTaught = $('[name="skill_taught"]');

	intro.click(function(event) {
		var value = $(this).val();
		var answer;
		
		if (value == "1/5") {
			answer = "Correct! The Introduction takes 1/5th of the lesson's time.";
		}
		else if(value == "3/5") {
			answer = "Incorrect! The New Information takes 3/5ths of the lesson's time.";
		}
		else {
			answer = "Incorrect! Try again.";
		}
		
		$(this).parent().next().html(answer);
	});
	
	parts.click(function(event) {
		var value = $(this).val();
		var answer;
		
		if (value == "Introduction") {
			answer = "Correct! The Introduction is the first part of the lesson.";
			partAnswers.push("Introduction");
		}
		else if (value == "New Information") {
			answer = "Right! The New Information is the second part of the lesson.";
			partAnswers.push("New Information");
		}
		else if (value == "Review") {
			answer = "Good job! The Review is the last part of the lesson.";
			partAnswers.push("Review");
		}
		else if (value == "Venn Diagram") {
			answer = "Incorrect. Venn Diagram is a strategy.";
			$(this).attr("checked", false);
		}
		else if (value == "1/5") {
			answer = "Incorrect. 1/5th is the time it takes to do the Introduction and the Review.";
			$(this).attr("checked", false);
		}
		else {
			answer = "Incorrect. Try again.";
			$(this).attr("checked", false);
		}
		
		$(this).parent().next().html(answer);
		
		if (partAnswers.length === 3) {
			$(this).parent().next().append("<p>&nbsp;</p><p>Conragulations! You have identified the three parts to a lesson: Introduction, New Information and Review.</p>");
		}
	});
	
	skillTaught.blur(function(event) {
		var value = $(this).val();
		
		if (value != "") {
			var answer;
		
			if (value == "New Information" || value == "new information") {
				answer = "Yes! The New Information is where the teacher guides the students in learning and practising the new information or skill.";
			}
			else if (value == "Grudge" || value == "New Grudge") {
				answer = '<iframe width="300" height="225" src="//www.youtube.com/embed/o-Y82ifoTjs?autoplay=1" frameborder="0" allowfullscreen></iframe>';
			}
			else if (value == "Smarktopus" || value == "New Smarktopus") {
				answer = '<img src="/images/sharktopus.gif">';
			}
			else {
				answer = "Incorrect! Try again.";
			}
			
			$(this).parent().next().html(answer);
		}
	});
	
	review.change(function(event) {
		var value = $(this).val();
		
		if (value != "") {
			var answer;
		
			if (value == "Students Understand") {
				answer = "Correct! The teacher now feels good that their students have learned the new information.";
			}
			else if (value == "Chicken Dance") {
				answer = ' <audio controls><source src="/audio/chicken-dance_short.mp3" type="audio/mpeg">Your browser does not support the Chicken Dance :-(.</audio>';
				$(this).parent().next().html(answer);
				$("audio")[0].play();
				return;
			}
			else if (value == "Prepare Students") {
				answer = "Incorrect. You prepare students in the Introduction.";
			}
			else if (value == "Share Goals") {
				answer = "Incorrect. Goals are shared in the Introduction.";
			}
			else if (value == "Activate Schema") {
				answer = "Activate Schema? Seriously? What is that supposed to mean? Try harder.";
			}
			else {
				answer = "Incorrect! Try again.";
			}
			
			$(this).parent().next().html(answer);
		}
	});
	
	var snapped = 1;
	function checkSnapped() {
		if (snapped === 3) {
			setTimeout(function() {
				$(".game-answer").html("");
				$("div.snap").removeClass("highlight");
				
				$("h4.snap").fadeOut("fast");
				$("h4.snap").html("Now move the time each part takes onto the appropriate car.");
				
				$("img.train.text, h4.snap").fadeIn(function() {
					
				});
				
				$("img.one-fifth-intro").draggable({ snap: ".snap-introduction" });
				$( ".snap-introduction" ).droppable({
					accept: "img.one-fifth-intro",
					drop: function( event, ui ) {
						$(".game-answer").html("Correct! The Introduction is 1/5th of the lesson.");
						$("img.one-fifth-intro").addClass("highlight2");
						setTimeout(function() { $("img.one-fifth-intro").removeClass("highlight2"); }, 1200);
					}
				});

				$("img.three-fifths").draggable({ snap: ".snap-new-information" });
				$( ".snap-new-information" ).droppable({
					accept: "img.three-fifths",
					drop: function( event, ui ) {
						$(".game-answer").html("Correct! The New Information is 3/5ths of the lesson time.");
						$("img.three-fifths").addClass("highlight2");
						setTimeout(function() { $("img.three-fifths").removeClass("highlight2"); }, 1200);
					}
				});

				$("img.one-fifth-review").draggable({ snap: ".snap-review" });
				$( ".snap-review" ).droppable({
					accept: "img.one-fifth-review",
					drop: function( event, ui ) {
						$(".game-answer").html("Correct! The Review is the remaining 1/5th of the lesson.");
						$("img.one-fifth-review").addClass("highlight2");
						setTimeout(function() { $("img.one-fifth-review").removeClass("highlight2"); }, 1200);
					}
				});
			}, 2200);
		}
		else {
			snapped += 1;
		}
	}
	
	$("img.introduction").draggable({ snap: ".snap-introduction" });
	 $( ".snap-introduction" ).droppable({
		accept: "img.introduction",
		drop: function( event, ui ) {
			$(".game-answer").html("Correct! First Part of a Lesson is the Introduction.");
			$("img.introduction").addClass("highlight");
			setTimeout(function() { $("img.introduction").removeClass("highlight"); }, 1200);
			checkSnapped();
		}
	});
	
	$("img.new-information").draggable({ snap: ".snap-new-information" });
	 $( ".snap-new-information" ).droppable({
		accept: "img.new-information",
		drop: function( event, ui ) {
			$(".game-answer").html("Correct! Second Part of a Lesson is the New Information.");
			$("img.new-information").addClass("highlight");
			setTimeout(function() { $("img.new-information").removeClass("highlight"); }, 1200);
			checkSnapped();
		}
	});
	
	$("img.review").draggable({ snap: ".snap-review" });
	 $( ".snap-review" ).droppable({
		accept: "img.review",
		drop: function( event, ui ) {
			$(".game-answer").html("Correct! Third Part of a Lesson is the Review.");
			$("img.review").addClass("highlight");
			setTimeout(function() { $("img.review").removeClass("highlight"); }, 1200);
			checkSnapped();
		}
	});
});