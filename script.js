// Smooth scroll to section
$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});

// Gallery lightbox
$('.gallery-item').click(function() {
	var image = $(this).find('img').attr('src');
	$('body').append('<div class="lightbox"><img src="' + image + '"></div>');
});

$(document).on('click', '.lightbox', function() {
	$(this).remove();
});
