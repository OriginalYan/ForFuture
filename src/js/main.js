if ("undefined" == typeof jQuery) {
	document.querySelector("#script-check").innerHTML = `<strong class="text-danger">Warning! </strong> JQuery not loaded!`;
	throw new Error("JQuery not loaded!");
}

$(function() {
	console.log("Main script loaded!");
	$("#script-check").text("JQuery loaded!");
});

jQuery(document).ready(function($) {
	var randStar = 1 + Math.floor(Math.random() * (5 - 1 + 1))

	$(function() {
		var tab = $('a[data-toggle="tab"]');

		tab.on('click', function() {
			event.preventDefault();
			$('.active').removeClass('active');
			$(this).toggleClass('active');

			var target = $(this).attr('href');
			$(target).toggleClass('active');
		});
	});

	for (var i = 0; i < randStar; i++){
		$('.stars').append('<span><img src="img/icons/star.png" alt=""></span>');
	}

	$('.nav-menu li a').click(function(event) {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.img-slide img').on('click', function(event) {
		event.preventDefault();
		$('span.check').detach();
		$('<span class="check"><img src="img/icons/check.png" alt=""></span>').insertAfter($(this));
	});


});