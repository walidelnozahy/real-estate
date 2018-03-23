$(document).ready(function(){
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

    TweenMax.from('.normal-nav',1, {y:-200});
    TweenMax.from(".fixed-action-btn",2,{x:-100});
    TweenMax.from(".about-hero-carousel",2,{opacity:0});
    TweenMax.from(".hero-shape",2,{y:100});
  }, );

$(".button-collapse").sideNav();

});
