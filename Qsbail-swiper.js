var swiperNodes="",
    pagination="<div class=swiper-pagination></div>",
    next_prev_buttons='<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>',
    scrollbar='<div class="swiper-scrollbar"></div>',
    swiperNodes=swiperNodes.concat(pagination,next_prev_buttons);
$(".swiper").each(function(e){$(this).append(swiperNodes)});

function initSwiper(selector, navId) {
  var swiper = new Swiper(selector, {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: navId + ' .swiper-button-next',
      prevEl: navId + ' .swiper-button-prev',
    },
    pagination: {
      el: navId + ' .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      }
    }
  });
}

var swiperNodes="",
    pagination="<div class=swiper-pagination></div>",
    next_prev_buttons='<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>',
    scrollbar='<div class="swiper-scrollbar"></div>',
    swiperNodes=swiperNodes.concat(pagination,next_prev_buttons);
$(".swiper").each(function(e){$(this).append(swiperNodes)});
var mySwiper=new Swiper(".cat1-cards",{
  mousewheel:!1,
  autoHeight:!1,
  forceToAxis:!1,
  loop:!0,
  speed:1200,
  freeMode:!1,
  centeredSlides:!0,
  centeredSlidesBounds:!0,
  lazy:!1,
  navigation:{nextEl:"#cat1-right",prevEl:"#cat1-left"},
  keyboard:{enabled:!0},
  breakpoints:{
    0:{slidesPerView:1.2,spaceBetween:10},
    479:{slidesPerView:2,spaceBetween:20},
    820:{slidesPerView:2.7,spaceBetween:20},
    992:{slidesPerView:3.7,spaceBetween:20},
    1200:{slidesPerView:4,spaceBetween:20}}}),
  mySwiper=new Swiper(".cat2-cards",{
    mousewheel:!1,
    autoHeight:!1,
    forceToAxis:!1,
    loop:!0,
    speed:1200,
    freeMode:!1,
    centeredSlides:!0,
    centeredSlidesBounds:!0,
    lazy:!1,
    navigation:{nextEl:"#cat2-right",prevEl:"#cat2-left"},
    keyboard:{enabled:!0},
    breakpoints:{
      0:{slidesPerView:1.2,spaceBetween:10},
      479:{slidesPerView:2,spaceBetween:20},
      820:{slidesPerView:2.7,spaceBetween:20},
      992:{slidesPerView:3.7,spaceBetween:20},
      1200:{slidesPerView:4,spaceBetween:20}}}),
    mySwiper=new Swiper(".cat3-cards",{
      mousewheel:!1,
      autoHeight:!1,
      forceToAxis:!1,
      loop:!0,
      speed:1200,
      freeMode:!1,
      centeredSlides:!0,
      centeredSlidesBounds:!0,
      lazy:!1,
      navigation:{nextEl:"#cat3-right",prevEl:"#cat3-left"},
      keyboard:{enabled:!0},
      breakpoints:{
        0:{slidesPerView:1.2,spaceBetween:10},
        479:{slidesPerView:2,spaceBetween:20},
        820:{slidesPerView:2.7,spaceBetween:20},
        992:{slidesPerView:3.7,spaceBetween:20},
        1200:{slidesPerView:4,spaceBetween:20}}}),
    mySwiper=new Swiper(".cat4-cards",{
      mousewheel:!1,
      autoHeight:!1,
      forceToAxis:!1,
      loop:!0,
      speed:1200,
      freeMode:!1,
      centeredSlides:!0,
      centeredSlidesBounds:!0,
      lazy:!1,
      navigation:{nextEl:"#cat4-right",prevEl:"#cat4-left"},
      keyboard:{enabled:!0},
      breakpoints:{
        0:{slidesPerView:1.2,spaceBetween:10},
        479:{slidesPerView:2,spaceBetween:20},
        820:{slidesPerView:2.7,spaceBetween:20},
        992:{slidesPerView:3.7,spaceBetween:20},
        1200:{slidesPerView:4,spaceBetween:20}}}),
    mySwiper=new Swiper(".cat5-cards",{
      mousewheel:!1,
      autoHeight:!1,
      forceToAxis:!1,
      loop:!0,speed:1200,
      freeMode:!1,
      centeredSlides:!0,
      centeredSlidesBounds:!0,
      lazy:!1,
      navigation:{nextEl:"#cat5-right",prevEl:"#cat5-left"},
      keyboard:{enabled:!0},
      breakpoints:{
        0:{slidesPerView:1.2,spaceBetween:10},
        479:{slidesPerView:2,spaceBetween:20},
        820:{slidesPerView:2.7,spaceBetween:20},
        992:{slidesPerView:3.7,spaceBetween:20},
        1200:{slidesPerView:4,spaceBetween:20}}}),
    mySwiper=new Swiper(".cat6-cards",{
      mousewheel:!1,
      autoHeight:!1,
      forceToAxis:!1,
      loop:!0,
      speed:1200,
      freeMode:!1,
      centeredSlides:!0,
      centeredSlidesBounds:!0,
      lazy:!1,
      navigation:{nextEl:"#cat6-right",prevEl:"#cat6-left"},
      keyboard:{enabled:!0},
      breakpoints:{
        0:{slidesPerView:1.2,spaceBetween:10},
        479:{slidesPerView:2,spaceBetween:20},
        820:{slidesPerView:2.7,spaceBetween:20},
        992:{slidesPerView:3.7,spaceBetween:20},
        1200:{slidesPerView:4,spaceBetween:20}}}),
    mySwiper=new Swiper(".cat7-cards",{
      mousewheel:!1,
      autoHeight:!1,
      forceToAxis:!1,
      loop:!0,
      speed:1200,
      freeMode:!1,
      centeredSlides:!0,
      centeredSlidesBounds:!0,
      lazy:!1,
      navigation:{nextEl:"#cat7-right",prevEl:"#cat7-left"},
      keyboard:{enabled:!0},
      breakpoints:{
        0:{slidesPerView:1.2,spaceBetween:10},
        479:{slidesPerView:2,spaceBetween:20},
        820:{slidesPerView:2.7,spaceBetween:20},
        992:{slidesPerView:3.7,spaceBetween:20},
        1200:{slidesPerView:4,spaceBetween:20}}});
