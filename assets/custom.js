jQuery(document).ready(function(){
   'use strict';

//============================== ALL DROPDOWN ON HOVER =========================
  $('.dropdown').hover(function() {
    $(this).addClass('open');
  },
  function() {
    $(this).removeClass('open');
  });

//============================== CHANGE HEADER ON MOUSE SCROLL =========================
  var header = $('.changeHeader .navbar-fixed-top');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if ((scroll >= 1) && ($('.navbar-default').hasClass('navbar-main')))
    {
      header.addClass('lightHeader');
    }
    else if ($('.navbar-default').hasClass('static-light'))
    {
      header.addClass('lightHeader');
    }
    else {
      header.removeClass('lightHeader');
    }

  });

  });