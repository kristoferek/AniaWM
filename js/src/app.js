/* eslint semi: ["error", "always"] */
document.addEventListener('DOMContentLoaded', function () {
  var scrollBackground = function () {
    var body = $('body');
    var bodyHeight = body.outerHeight();
    $(window).scroll(function () {
      body.css('background-position', '50%' + (bodyHeight-$(window).scrollTop()) / 8 + 'px');
    });
  };

  var setEqualHeigh = function (array) {
    var maxHeigh = 0;
    array.each(function (index, element) {
      var currentHeigh = $(this).height('').height();
      if (currentHeigh > maxHeigh) maxHeigh = currentHeigh;
    });
    array.each(function () {
      $(this).css('height', maxHeigh);
    });
  };

  var smoothScroll = function (link) {
    // Add smooth scrolling to all links
    $(link).on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  };

  var sectionH3 = $('#uslugi section h3');
  var sectionBox = $('#uslugi section');

  scrollBackground();
  setEqualHeigh(sectionH3);
  setEqualHeigh(sectionBox);

  $('#navbar li a').each(function () {
    console.log(this);
    smoothScroll(this);
  });

  $(window).resize(function () {
    setEqualHeigh(sectionH3);
    setEqualHeigh(sectionBox);
  });

});
