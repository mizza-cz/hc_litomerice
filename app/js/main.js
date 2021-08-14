$(function () {
  $('select, .shop__check').styler();
  //presmerovani pomoci selectu
     // tabs
     $('.hp-soupiska__tabs .tab').on('click', function (event) {
      var id = $(this).attr('data-id');
      $('.hp-soupiska__tabs').find('.tab__content').removeClass('tab-active').hide();
      $('.hp-soupiska__tabs .hp-soupiska__tab').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#' + id)
        .addClass('tab-active')
        .fadeIn();
      return false;
    });
   $('.partners').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1370,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
      
      ],
    });
  
    
   $('.navbar__menu').on('click', function () {
      $('.nav').slideToggle();
    });
    $('.nav__link').on('click', function () {
      $(this).closest('.nav__item').toggleClass('active');
    });
 });

 
 const menuBtn = document.querySelector('.navbar__menu');
 let menuOpen = false;
 menuBtn.addEventListener('click', () => {
   if (!menuOpen) {
     menuBtn.classList.add('open');
     menuOpen = true;
   } else {
     menuBtn.classList.remove('open');
     menuOpen = false;
   }
 });


 //topstory
$(document).ready(function(){
   $(".topstory__article").mouseover(function(){
      idTopstoryCurrent=$(".topstory__content").data("topstory_current"),
      idTopstory=$(this).data("topstory"),
      $(".topstory__article").removeClass("on"),
      $(this).addClass("on"),
      $("#topstory_content_"+idTopstoryCurrent).removeClass("on"),
      $("#topstory_image_"+idTopstoryCurrent).removeClass("on"),
      $("#topstory_content_"+idTopstory).addClass("on"),
      $("#topstory_image_"+idTopstory).addClass("on"),
      $(".topstory__content").data("topstory_current",idTopstory) })});
      //sidebar
      (document,window),$(document).ready(function(){var t=$(".aside_menu-overlay"),n=$("#aside_menu"),i=n.data("open");$(".menu_aside-toggle").on("click",function(e){e.preventDefault(),i=i?(n.removeClass("open"),t.removeClass("active"),!1):(n.addClass("open"),t.addClass("active"),!0)}),$(t).on("click",function(e){e.preventDefault(),i=i?(n.removeClass("open"),t.removeClass("active"),!1):(n.addClass("open"),t.addClass("active"),!0)}),$(".aside_menu-btn_close a").on("click",function(e){e.preventDefault(),i=i?(n.removeClass("open"),t.removeClass("active"),!1):(n.addClass("open"),t.addClass("active"),!0)})}),$(document).ready(function(){var t,e,n=$(".sidebar-overlay"),i=$("#sidebar"),o=i.data("open");$(".sidebar-toggle").on("click",function(e){e.preventDefault(),o=o?(i.removeClass("open"),n.removeClass("active"),$("#button_menu").removeClass("open"),!1):(i.addClass("open"),n.addClass("active"),$("#button_menu").addClass("open"),!0)}),$(n).on("click",function(e){e.preventDefault(),o=o?(i.removeClass("open"),n.removeClass("active"),$("#button_menu").removeClass("open"),!1):(i.addClass("open"),n.addClass("active"),$("#button_menu").addClass("open"),!0)}),$(".sidebar-btn_close a").on("click",function(e){e.preventDefault(),o=o?(i.removeClass("open"),n.removeClass("active"),$("#button_menu").removeClass("open"),!1):(i.addClass("open"),n.addClass("active"),$("#button_menu").addClass("open"),!0)}),t=jQuery,(e=t(".dropdown")).on("show.bs.dropdown",function(e){t(this).find(".dropdown-menu").first().stop(!0,!0).slideDown()}),e.on("hide.bs.dropdown",function(e){t(this).find(".dropdown-menu").first().stop(!0,!0).slideUp()})});


      $(document).ready(function(){var a=!1;$("a[data-gallery]").click(function(){if(!a){a=!0;var r=$(this).data("gallery"),t="/inc/gallery-ajax.php?mode="+r;return 1!=r&&2!=r&&3!=r||(t+="&id="+$(this).data("gallery-id")),$.getJSON(t,{format:"json"}).done(function(a){$(this).lightGallery({hash:!1,share:!1,dynamic:!0,dynamicEl:a,download:!1,backdropDuration:500})}).fail(function(a,r,t){alert("Nastala chyba pĹ™i naÄŤĂ­tĂˇnĂ­ galerie. ProsĂ­m zkuste to znovu."),console.error("getJSON failed, status: "+r+", error: "+t),console.error(a)}).always(function(){a=!1}),!1}})});

