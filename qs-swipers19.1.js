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

// Job custom

let cloneNumber;
$('.cat9-cards').find('div[aria-label*="/"]').each(function() {
  var ariaLabel = $(this).attr('aria-label');
  var fraction = ariaLabel.match(/(\d+)\s*\/\s*(\d+)/);

  if (fraction !== null && fraction[2] !== undefined) {
    var secondNumber = fraction[2];
    switch (secondNumber) {
      case '1':
        cloneNumber = 4;
        break;
      case '2':
        cloneNumber = 3;
        break;
      case '3':
        cloneNumber = 2;
        break;
      case '4':
        cloneNumber = 1;
        break;
      case '5':
        cloneNumber = 0;
        break;
      default:
        cloneNumber = null;
    }
  }
});



const jobswiper = new Swiper(".cat9-cards", {
  ...swiperOptions,
  navigation: {
    nextEl: "#cat9-cards-right",
    prevEl: "#cat9-cards-left",
  },
  loopAdditionalSlides: cloneNumber
});

$('.w-dyn-empty').parents('.swiper-comp.jobs').each(function(){ $(this).hide()})
