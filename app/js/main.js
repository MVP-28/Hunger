$(function(){

  $(".header-menu a").on("click", function (e) {
    //отменяем стандартную обработку нажатия по ссылке
    e.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.specialties__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.header-menu__btn, .header-menu a').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  })

  var mixer = mixitup('.menu__content');

});