document.onreadystatechange = function () {
    var state = document.readyState;
    if (state == 'complete') {
        document.getElementById('interactive');
        document.getElementById('load').style.visibility="hidden";
    }
}
$(document).ready(function(){
    'use strict';

    // Uncomment if you wish to auto redirect without click on the logo on the page loading
    // if($('.loading-logo.customer').length>0){
    //     setTimeout(function(){
    //         window.location.href="login.html";
    //     }, 3000);
    // }
    
    if($('.loading-logo.driver').length>0){
        setTimeout(function(){
            window.location.href="login.html";
        }, 3000);
    }

    // var input = document.querySelector("#phone-input");
    // if(input) {
    //     window.intlTelInput(input, {
    //         autoPlaceholder: "aggressive",
    //         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
    //     });
    // }


    $('.fas.fa-star').on('mouseover', function(){
        var index = $(this).index();
        $(this).parent().find('.fas.fa-star').addClass('font-weight-light');
        for(var i=0;i<=index;i++){
            var star = $(this).parent().find('.fas.fa-star')[i];
            $(star).removeClass('font-weight-light');
        }
    });

    var starAmount = 0;
    $('.fas.fa-star').on('click', function(){
        var index = $(this).index();
        starAmount = index+1;
    });

    $('.rating').on('mouseout', function(){
        if(starAmount>0){
            for(var i=0;i<starAmount;i++){
                var star = $(this).find('.fas.fa-star')[i];
                $(star).removeClass('font-weight-light');
            }
        }
        else{
            $('.fas.fa-star').addClass('font-weight-light');
        }
    });

    $('.close-review').on('click', function(){
        $('.submit-review').addClass('hidden');
    });

    $('.menu-open').on('click',function(){
        var main_menu = $('.main-menu');
        main_menu.toggleClass('hidden-soft');
        $(this).toggleClass('closed');
        if($(this).hasClass('closed')) {
            main_menu.css('display','flex').animate({
                width: "toggle"
            }, 300);
        }
        else {
            main_menu.css('display','flex').hide().animate({
                width: "toggle"
            }, 300);
        }
        $('#load .fa-spin').hide();
        $('#load').css('visibility','visible');
    });

    $('.menu-close').on('click', function(){
        var main_menu = $('.main-menu');
        main_menu.hide().css('display','flex').animate({
            width: "toggle"
        }, 300);
        $('.menu-open').addClass('closed');
        $('#load .fa-spin').show();
        $('#load').css('visibility','hidden');
    });
  $(document).on('click', '.sign-in-item.border-bottom-light-grey', function(){
        $('.sign-in-item').removeClass('border-bottom-primary-100').addClass('border-bottom-light-grey');
        $(this).removeClass('border-bottom-light-grey').addClass('border-bottom-primary-100');
        var activateTab = $(this).data('class');
        $('.sign-up-form-container').addClass('hidden');
        $('.sign-up-form-container.'+activateTab).removeClass('hidden');
    });
      var input = document.querySelector("#phone-input");
    if(input) {
        window.intlTelInput(input, {
            autoPlaceholder: "aggressive",
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
        });
    }
  });