$(document).ready(function() {
        window.addEventListener("load", function() {

          $('.preloader-background-mine').fadeOut('slow');

          $('.preloader-wrapper-mine').fadeOut();

    });
  ///////////////////////////////////////SEARCHHHH////////////////////

    $.ajax({
      url: 'projects.json',
      dataType: 'json',
      type: 'get',
      cache: false,
      success: function(data){
        $(data.code97).each(function(index, value){
          /////////////////////////////  OVERVIEW  /////////////////////////////////////
          var location = value.location;
          var delivery = value.delivery;
          var type = value.type;
          var area = value.areaMin  + value.areaMax ;
          var installments = value.installments + " months";
          var status = value.status;

          $('.location').text(location)
          $('.delivery').text(delivery)
          $('.type').text(type )
          $('.area').text(area )
          $('.installments').text(installments )
          $('.status').text(status )
          /////////////////////////////  APARTMENT DETAILSSS /////////////////////////////////////
          /////////////////////////////  1+0     /////////////////////////////////////
          var details1_0PMin = value.apartments["1+0"].priceMin;
          var details1_0PMax = value.apartments["1+0"].priceMax;
          var details1_0A = value.apartments["1+0"].area;

          $('.details1_0-price').text(details1_0PMin +" TL - "+details1_0PMax + " TL");
          $('.details1_0-area').text(details1_0A);
            /////////////////////////////  1+1     /////////////////////////////////////
            var details1_1PMin = value.apartments["1+1"].priceMin;
            var details1_1PMax = value.apartments["1+1"].priceMax;
            var details1_1A = value.apartments["1+1"].area;

            $('.details1_1-price').text(details1_1PMin +" TL - "+details1_1PMax + " TL");
            $('.details1_1-area').text(details1_1A);
            /////////////////////////////  2+1     /////////////////////////////////////
            var details2_1PMin = value.apartments["2+1"].priceMin;
            var details2_1PMax = value.apartments["2+1"].priceMax;
            var details2_1A = value.apartments["2+1"].area;

            $('.details2_1-price').text(details2_1PMin +" TL - "+details2_1PMax + " TL");
            $('.details2_1-area').text(details2_1A);
            /////////////////////////////  3+1     /////////////////////////////////////
            var details3_1PMin = value.apartments["3+1"].priceMin;
            var details3_1PMax = value.apartments["3+1"].priceMax;
            var details3_1A = value.apartments["3+1"].area;

            $('.details3_1-price').text(details3_1PMin +" TL - "+details3_1PMax + " TL");
            $('.details3_1-area').text(details3_1A);
            /////////////////////////////  4+1     /////////////////////////////////////
            var details4_1PMin = value.apartments["4+1"].priceMin;
            var details4_1PMax = value.apartments["4+1"].priceMax;
            var details4_1A = value.apartments["4+1"].area;

            $('.details4_1-price').text(details4_1PMin +" TL - "+details4_1PMax + " TL");
            $('.details4_1-area').text(details4_1A);

        });
      }
    });


if ($(window).width() > 992) {

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

}
else {

    $("#demo1").keydown(function (e) {
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
    $("#demo1").intlTelInput({
      separateDialCode: true,
      preferredCountries: ["TR","IQ","JO","KW","LB","LY","MA","PS","EG","QA","SD","SY","TN","BH","AE","YE","SA"],

    });
  $("#demo1").on("countrychange", function(e, countryData) {
    // do something with countryData
    var changed = $('.selected-dial-code').html();
    $('#demo1').val(changed)
    console.log(changed)
  });
    var pageTitle = $(document).find("title").text();
    $('#page-form1').val(pageTitle);

    $(function() {
      $('#subscribe1').submit(function(event) {
        event.preventDefault();
        var subscribeForm = $(this);
        var subscribeButton = $('#validate1', subscribeForm);
        if ($("#name1").val() === '') {
          // $('#invalid-name').text('من فضلك ادخل اسمك بالكامل.');
          return
        }

        function validateEmail(email) {
          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        }
        var email = $("#form-email1").val()
        if ($("#form-email1").val() === '' || !validateEmail(email)) {
          // $('#invalid-email').text('من فضلك ادخل ايميلك.');
          return
        }
        if ($("#demo1").val() === '') {
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
            data: $('#subscribe1').serialize(),
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

}


     // $("#formValidate").validate({
     //    rules: {
     //        name: {
     //            required: true,
     //            minlength: 5
     //        },
     //        email: {
     //            required: true,
     //            email:true
     //        },
     //        demo:{
     //          required: true,
     //          minlength: 11
     //        },
     //
     //    errorElement : 'div',
     //    errorPlacement: function(error, element) {
     //      var placement = $(element).data('error');
     //      if (placement) {
     //        $(placement).append(error)
     //      } else {
     //        error.insertAfter(element);
     //      }
     //    }
     //  }
     // });
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
