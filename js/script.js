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
     var pageTitle = $(document).find("title").text();
     $('#page-form').val(pageTitle);

     $(function() {
       $('#subscribe').submit(function(event) {
         event.preventDefault();
         var subscribeForm = $(this);
         var subscribeButton = $('#validate', subscribeForm);
         if ($("input[name='name']").val() === '') {
           // $('#invalid-name').text('من فضلك ادخل اسمك بالكامل.');
           return
         }

         function validateEmail(email) {
           var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(email);
         }
         var email = $("#form-email").val()
         if ($("input[name='email']").val() === '' || !validateEmail(email)) {
           // $('#invalid-email').text('من فضلك ادخل ايميلك.');
           return
         }
         if ($("input[name='number']").val() === '') {
           // $('#invalid-number').text('من فضلك ادخل رقم الهاتف.');
           return
         }

         $.ajax({
             url: subscribeForm.prop('action'),
             type: 'POST',
             crossDomain: true,
             headers: {
               'accept': 'application/javascript',
             },
             data: $('#subscribe').serialize(),
             beforeSend: function() {
               subscribeButton.prop('disabled', 'disabled');
             }
           })
           .done(function(response) {
             // You will do something WAY BETTER than alert
             // because you are an awesome designer.
             alert("thank you, we will contact you soon")
             console.log('sent');
             subscribeButton.prop('disabled', false);
           })
           .fail(function(response) {
             alert('something went wrong! please refresh and try again');
             subscribeButton.prop('disabled', false);
             console.log('fail');
           })

       });
     });
  window.addEventListener("load", function() {

    $('.preloader-background-mine').fadeOut('slow');

    $('.preloader-wrapper-mine').fadeOut();

    TweenMax.from('.hero-text', 2, {
      y: -200
    });


    if ($(window).width() < 960) {
      TweenMax.from('.home-page-nav', 2, {
        y: -200
      });
    } else {
      TweenMax.from('.home-page-nav', 2, {
        y: 400
      });
    }
    TweenMax.from(".fixed-action-btn", 2, {
      x: -100
    });


  }, );
  // ============================================= TWEENMAX SCRIPTS ==========


  // ============================================= HERO-ANIAMTIONS SCRIPTS ==========

  $('.hero-carousel').mousemove(function(e) {
    $('.follow1').parallax(-10, e);

  });
  $('.hero-carousel').mouseleave(function(e) {
    TweenMax.to('.follow', 2, {
      x: 0,
      y: 0
    });
  });
  // ============================================= NORMAL-NAV SCRIPTS ==========
  $(".button-collapse").sideNav();
  $(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#company-intro').position().top) {
      // $('.navbar-fixed').css('display','block');
      $('.navbar-fixed').show('slow');
    } else {
      // $('.navbar-fixed').css('display','none');
      $('.navbar-fixed').hide('slow');
    };

  })

  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: true,
    belowOrigin: true, // Displays dropdown below the button
    gutter: 20,
    stopPropagation: true

  })

  // ============================================= owlCarousel SCRIPTS ==========
  // $(".testimonials-owl-carousel").owlCarousel({});
  $(".testimonials-carousel").owlCarousel({

    autoplay: true,
    autoplaySpeed: 2000,
    loop: true,

    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    items: 1,
    dots: true,
    dotData: true,


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







  $(document).on('click', 'a[href^="#contact-section"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

});
