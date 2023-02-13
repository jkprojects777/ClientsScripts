const swiperOptions = {
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
  breakpoints: {
    0: { slidesPerView: 1.2, spaceBetween: 10 },
    479: { slidesPerView: 2, spaceBetween: 20 },
    820: { slidesPerView: 2.7, spaceBetween: 20 },
    992: { slidesPerView: 3.7, spaceBetween: 20 },
    1200: { slidesPerView: 4, spaceBetween: 20 },
  },
};

[".cat1-cards", ".cat2-cards", ".cat3-cards", ".cat4-cards", ".cat5-cards", ".cat6-cards", ".cat7-cards", ".cat8-cards"].forEach((selector) => {
  const swiper = new Swiper(selector, {
    ...swiperOptions,
    navigation: {
      nextEl: `#${selector}-right`,
      prevEl: `#${selector}-left`,
    },
  });
});

const testiSwiper = new Swiper('.cat8-cards', {
  ...swiperOptions,
  navigation: {
    nextEl: `${selector}-right`,
    prevEl: `${selector}-left`,
  },
  autoplay: { delay: 3000, pauseOnMouseEnter: true },
});
