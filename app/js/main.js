$(function () {
  $('button').click(function () {
  
  $('select, input.radio, input.checkbox').styler();
  //presmerovani pomoci selectu
  });
  // tabs team
  $('.mladez__inner .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.mladez__inner').find('.mladez__content').removeClass('tab-active').hide();
    $('.mladez__inner .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id)
      .addClass('tab-active')
      .fadeIn();
    return false;
  });
  $('.navbar__menu').on('click', function () {
    $('.navbar__inner').slideToggle();
  });
  $('.nav__link').on('click', function () {
    $(this).closest('.nav__item').toggleClass('active');
  });
  $('.gameslider__inner').slick({
    autoplay: true,
    prevArrow:
      '<button class="gameslider__btn gameslider__btn--prev"><img src="images/svg/arrow-left.svg" alt="" ></button> ',
    nextArrow:
      ' <button class="gameslider__btn gameslider__btn--next"><img src="images/svg/arrow-right.svg" alt = "" ></button > ',
    responsive: [
      {
        breakpoint: 581,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $('.result-slider__inner').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    prevArrow:
      '<button class="gameslider__btn gameslider__btn--prev"><img src="images/svg/arrow-left.svg" alt="" ></button> ',
    nextArrow:
      ' <button class="gameslider__btn gameslider__btn--next"><img src="images/svg/arrow-right.svg" alt = "" ></button > ',
    responsive: [
      {
        breakpoint: 1131,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.partner-slider__inner').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $('#hpArticle .hp-article').hover(
    function () {
      $('#hpArticle .hp-article').removeClass('topArticleActive');
      $(this).addClass('topArticleActive');
    },
    function () {},
  );
});
var _gallery_loading = false;

$('a[data-gallery]').click(function () {
  if (_gallery_loading) return;
  _gallery_loading = true;

  var mode = $(this).data('gallery');
  var url = '/inc/gallery_ajax.asp?mode=' + mode;

  if (mode == 1 || mode == 2) {
    url += '&id=' + $(this).data('gallery-id');
  }

  $.getJSON(url, { format: 'json' })
    .done(function (e) {
      $(this).lightGallery({
        hash: false,
        share: false,
        dynamic: true,
        dynamicEl: e,
        download: false,
        backdropDuration: 500,
      });
    })
    .fail(function (e, textStatus, error) {
      alert('Nastala chyba při načítání galerie. Prosím zkuste to znovu.');
      console.error('getJSON failed, status: ' + textStatus + ', error: ' + error);
      console.error(e);
    })
    .always(function () {
      _gallery_loading = false;
    });

  return false;
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
