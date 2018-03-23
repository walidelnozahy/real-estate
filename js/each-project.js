$(document).ready(function() {
  $("#demo").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
         // Allow: Ctrl+A, Command+A
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
         // Allow: home, end, left, right, down, up
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             // let it happen, don't do anything
             return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});
  $("#demo").intlTelInput({
    separateDialCode: true,
    preferredCountries: ["TR","IQ","JO","KW","LB","LY","MA","PS","EG","QA","SD","SY","TN","BH","AE","YE","SA"],

  });
$("#demo").on("countrychange", function(e, countryData) {
  // do something with countryData
  var changed = $('.selected-dial-code').html();
  $('#demo').val(changed)
  console.log(changed)
});


     $("#formValidate").validate({
        rules: {
            name: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email:true
            },
            demo:{
              required: true,
              minlength: 11
            },
        //For custom messages
        // messages: {
        //     uname:{
        //         required: "Enter a username",
        //         minlength: "Enter at least 5 characters"
        //     },
        //     cemail: "Enter your number",
        // },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
      }
     });
   $('.tap-target').tapTarget('open');
    // $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy({
        getActiveElement: function(id) {
            return 'a[href="#' + id + '"]';
        }
    });
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        duration: 500
    });

    $('.nextBtn').click(function() {
        $('.carousel').carousel('next');
    });
    $('.prevBtn').click(function() {
        $('.carousel').carousel('prev');
    });

    setInterval(function() {
      if($('.carousel-tour').is(":hover")){
        return;
      } else {
        $('.carousel-tour').carousel('next');
      }

    }, 4000);
    $('ul.tabs').tabs({
    });
    $('.materialboxed').materialbox();
    $('.tab').on('click', function() {
        $('.tab').removeClass('active');
        $(this).addClass('active');
    });
    var owl = $('.owl-carousel');
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplaySpeed: 1000,
        loop: true,
        margin: 30,
        autoplayTimeout: 500,
        autoplayHoverPause: false,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                nav: false,

            },
            // breakpoint from 600 up
            600: {
                items: 2,
                nav: false,

            },
            // breakpoint from 992 up
            992: {
                items: 1,
                nav: false,

            },
            // breakpoint from 992 up
            1200: {
                items: 3,
                nav: false,

            },
            1900: {
                items: 4,
                nav: false,
            }
        }
    });
    $('.nextBtn').click(function() {
        owl.trigger('next.owl.carousel', [1000]);
    })
    // Go to the previous item
    $('.prevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [1000]);
    })

});
