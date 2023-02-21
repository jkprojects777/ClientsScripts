// Options
const swiperOptions={
  mousewheel: false,
  autoHeight: false,
  forceToAxis: false,
  loop: true,
  speed: 1200,
  freeMode: false,
  centeredSlides: true,
  centeredSlidesBounds: true,
  lazy: false,
  keyboard: {
    enabled: true,
  },
  breakpoints:{
    0:{slidesPerView:1.2,spaceBetween:10},
    479:{slidesPerView:2,spaceBetween:20},
    820:{slidesPerView:2.7,spaceBetween:20},
    992:{slidesPerView:3.7,spaceBetween:20},
    1200:{slidesPerView:4,spaceBetween:20}
  }
};

// Init all globals

[".cat1-cards",".cat2-cards",".cat3-cards",".cat4-cards",".cat5-cards",".cat6-cards",".cat7-cards"]
  .forEach(e=>{new Swiper(e,{
    ...swiperOptions,navigation:{
      nextEl:`#${e.replace(".","")}-right`,
      prevEl:`#${e.replace(".","")}-left`
    }
  })
});

// Testi custom

const testiswiper=new Swiper(".cat8-cards",{
  ...swiperOptions,navigation:{
    nextEl:"#cat8-cards-right",
    prevEl:"#cat8-cards-left"
  },
  autoplay: { delay: 3000, pauseOnMouseEnter: true },
});

// Jobs custom

const jobSwiperBreakpoints = {
  0: {
    slidesPerView: 1.5,
    spaceBetween: 10,
    slidesPerGroup: 1.5,
    loopFillGroupWithBlank: 0.5,
  },
  479: {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesPerGroup: 2,
    loopFillGroupWithBlank: 1,
  },
  820: {
    slidesPerView: 2.5,
    spaceBetween: 20,
    slidesPerGroup: 2.5,
    loopFillGroupWithBlank: 1.5,
  },
  992: {
    slidesPerView: 3.5,
    spaceBetween: 20,
    slidesPerGroup: 3.5,
    loopFillGroupWithBlank: 2.5,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 4,
    loopFillGroupWithBlank: 3,
  },
};

const jobswiper = new Swiper(".cat9-cards", {
  ...swiperOptions,
  navigation: {
    nextEl: "#cat9-cards-right",
    prevEl: "#cat9-cards-left",
  },
  breakpoints: jobSwiperBreakpoints,
});

$('.w-dyn-empty').parents('.swiper-comp.jobs').each(function(){ $(this).hide()})
