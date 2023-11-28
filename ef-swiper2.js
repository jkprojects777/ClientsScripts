// Options
const swiperOptions={
  slidesPerView: "auto",
  spaceBetween:10,
  centeredSlides: true,
  mousewheel: false,
  autoHeight: false,
  forceToAxis: false,
  loop: true,
  speed: 500,
  freeMode: false,
  centeredSlidesBounds: true,
  lazy: false,
  keyboard: {
    enabled: true,
  },
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
  spaceBetween:10,
  mousewheel: false,
  autoHeight: false,
  forceToAxis: false,
  loop: true,
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
