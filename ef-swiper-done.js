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
    484:{slidesPerView:2.2,spaceBetween:20},
    708:{slidesPerView:3.2,spaceBetween:20},
    1001:{slidesPerView:4.2,spaceBetween:20},
    1262:{slidesPerView:5.2,spaceBetween:20},
    1587:{slidesPerView:6.2,spaceBetween:20}
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

// Testi custom

const jobsswiper=new Swiper(".cat9-cards",{
  slidesPerView:1.5,
  spaceBetween:10,
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
  navigation:{
    nextEl:"#cat9-cards-right",
    prevEl:"#cat9-cards-left"
  }
});

$('.w-dyn-empty').parents('.swiper-comp.jobs').each(function(){ $(this).hide()})
