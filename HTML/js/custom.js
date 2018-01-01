
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  })
})

/* Custom-Scroll-Bar */

(function($){
    $(window).on("load",function(){

        $(".content").mCustomScrollbar({
            snapAmount:40,
            scrollButtons:{enable:true},
            keyboard:{scrollAmount:40},
            mouseWheel:{deltaFactor:40},
            scrollInertia:400
        });

    });
})(jQuery);
/* //Custom-Scroll-Bar */

/* Pop-up Custom-Scroll-Bar */
(function($){
        $(window).on("load",function(){

            $("#content-1").mCustomScrollbar({
                autoHideScrollbar:true,
                theme:"rounded"
            });

        });
    })(jQuery);

/* Pop-up Custom-Scroll-Bar */




        
    
