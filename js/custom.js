jQuery(document).ready(function(){
   'use strict';
//============================== CLOSE DROPDOWN SELECT =========================
  $('.ed-datepicker input.form-control').focus(function() {
    $('.sbOptions').css('display', 'none');
  });

  $('.ed-datepicker').datepicker({
  format: 'dd/mm/yyyy',
  autoclose: true,
  orientation: 'top auto',
  todayBtn: 'linked',
  todayHighlight: true
  });

//============================== ALL DROPDOWN ON HOVER =========================
  $('.dropdown').hover(function() {
    $(this).addClass('open');
  },
  function() {
    $(this).removeClass('open');
  });

//============================== Rs-Slider =========================
  jQuery('.custom_rev_slider').show().revolution({
    delay: 5000,
    sliderLayout: 'fullwidth',
    sliderType:'standard',
    responsiveLevels: [1201, 1025, 768, 480],
    gridwidth:[1201, 1025, 769, 480],
    gridheight: [745, 744, 644, 544],
    dottedOverlay: 'twoxtwo',
    navigation: {
      arrows: {
        enable: true,
        style: 'hesperiden',
        hide_onleave: false
      },
      bullets: {
          enable: true,
          style: 'hesperiden',
          hide_onleave: false,
          h_align: 'center',
          v_align: 'bottom',
          h_offset: 0,
          v_offset: 20,
          space: 15
      }
    },
    disableProgressBar:'on'
  });
// For Video
  jQuery('#rev_video_slider').show().revolution({
    dottedOverlay:'none',
    delay:9000,
    navigation: {
      onHoverStop:'off'
    },
    responsiveLevels:[1240,1024,778,480],
    visibilityLevels:[1240,1024,778,480],
    gridwidth:[1240,1024,778, 480],
    gridheight:[750, 550, 425, 250],
    shadow:0,
    spinner:'off',
    stopLoop:'on',
    stopAfterLoops:0,
    stopAtSlide:1,
    shuffle:'off',
    autoHeight:'off',
    disableProgressBar:'on',
    hideThumbsOnMobile:'off',
    hideSliderAtLimit:0,
    hideCaptionAtLimit:0,
    hideAllCaptionAtLilmit:0,
    debugMode:false,
    fallbacks: {
      simplifyAll:'off',
      nextSlideOnWindowFocus:'off',
      disableFocusListener:false
    }
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

//============================== SELECT BOX =========================
  $('.select-drop').selectbox();

//============================== Date-picker =========================
  $('.datepicker').datepicker({
    startDate: 'dateToday',
    autoclose: true
  });

//============================== COUNTER-UP =========================
  $(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  });

//============================== ACCORDION OR COLLAPSE ICON CHANGE =========================

  var allIcons = $('.singlePackage .panel-heading i.fa');
  $('.singlePackage .panel-heading').click(function(){
   allIcons.removeClass('fa-minus').addClass('fa-plus');
   $(this).find('i.fa').removeClass('fa-plus').addClass('fa-minus');
  });

  var allIconsOne = $('.accordionWrappar .panel-heading i.fa');
  $('.accordionWrappar .panel-heading').click(function(){
   allIconsOne.removeClass('fa-minus').addClass('fa-plus');
   $(this).find('i.fa').removeClass('fa-plus').addClass('fa-minus');
  });

  var allIconsExtra = $('.solidBgTitle .panel-heading i.fa');
  $('.solidBgTitle .panel-heading').click(function(){
   allIconsExtra.removeClass('fa-minus').addClass('fa-plus');
   $(this).find('i.fa').removeClass('fa-plus').addClass('fa-minus');
  });

  var allIconsTwo = $('.accordionSolidTitle .panel-heading i.fa');
  $('.accordionSolidTitle .panel-heading').click(function(){
   allIconsTwo.removeClass('fa-arrow-circle-up').addClass('fa-arrow-circle-down');
   $(this).find('i.fa').removeClass('fa-arrow-circle-down').addClass('fa-arrow-circle-up');
  });

  var allIconsThree = $('.accordionSolidBar .panel-heading i.fa');
  $('.accordionSolidBar .panel-heading').click(function(){
    allIconsThree.removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down');
    $(this).find('i.fa').removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up');
  });
