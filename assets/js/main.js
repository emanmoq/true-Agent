jQuery(function ($) {
  //declare slider (owl-carousel slider)
  $('.partnersSlider').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 15,
    dots: false,
    navText: ["<i class='lni lni-arrow-left'></i>", "<i class='lni lni-arrow-right'></i>"],

    responsive: {
      0: {
        items: 2,

      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,

      }


    }
  });
  // back to top btn open
  // ===== Scroll to Top ==== 
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() >= 400) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function () {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop: 0                       // Scroll to top of body
    }, 500);
  });
  // back to top btn end


});

