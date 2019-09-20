(function($) {

  /*--/ utilizando lib js Typed /--*/
	if ($('.texto-slider').length == 1) {
    var typed_strings = $('.texto-slider-items').text();
		var typed = new Typed('.texto-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

  $(function() {

    $.mbBgndGallery.buildGallery({
      containment: "#intro",
      timer: 4000,
      effTimer: 1000,
      controls: "#controls",
      grayScale: false,
      shuffle: false,
      preserveWidth: false,
      effect: "fade",
      effect: {
        enter: {
          left: 0,
          opacity: 0
        },
        exit: {
          left: 0,
          opacity: 0
        },
        enterTiming: "ease-in",
        exitTiming: "ease-in"
      },

      // If your server allow directory listing you can use:
      // (however this doesn't work locally on your computer)

      //folderPath:"testImage/",

      // else:

      images: [
        "img/bgslides/4.jpg",
        "img/bgslides/6.jpg",        
        "img/bgslides/5.jpg",
        "img/bgslides/8.jpg"
      ],

      onStart: function() {},
      onPause: function() {},
      onPlay: function(opt) {},
      onChange: function(opt, idx) {},
      onNext: function(opt) {},
      onPrev: function(opt) {}
    });


  });

  // featured text
  $("#rotator .1strotate").textrotator({
    animation: "dissolve",
    speed: 4000
  });
  $("#rotator .2ndrotate").textrotator({
    animation: "dissolve",
    speed: 4000
  });

  //parallax
  if ($('#parallax1').length || $('#parallax2').length) {

    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }

  function navbar() {

    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('show-nav');
    } else {
      $('#navigation').removeClass('show-nav');
    }

  }

  $(document).ready(function() {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function() {
        navbar();
      });

    }

  });


  $(window).resize(function() {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function() {
        navbar();
      });

    }

  });


  // Carousel
  $('.service .carousel').carousel({
    interval: 4000
  })

  //works
  $(function() {
    Grid.init();
  });

  //animation
  new WOW().init();

})(jQuery);
