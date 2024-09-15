// Smooth scroll to section
$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();
  var target = $($.attr(this, 'href'));
  $('html, body').animate({
    scrollTop: target.offset().top - 50 // add a small offset to account for padding or margins
  }, 500, 'swing'); // add a easing effect to make the animation smoother
});

// Gallery lightbox
$('.gallery-item').click(function() {
  var image = $(this).find('img').attr('src');
  var lightbox = $('<div class="lightbox"><img src="' + image + '"></div>');
  lightbox.appendTo('body'); // use appendTo instead of append for better performance
  lightbox.on('click', function() {
    $(this).remove();
  });
});
