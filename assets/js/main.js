jQuery(function ($) {
  //declare slider (owl-carousel slider)
  $('.elite-slider').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 40,
    dots: true,

    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,

      }


    }
  });
  $('.partner-Slider').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 40,
    dots: false,
    nav:false,

    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,

      }


    }
  });
  $('.rating-sec-slider').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 15,
    dots: false,
    nav:true,

    responsive: {
      0: {
        items: 1,

      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      }


    }
  });
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();

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

