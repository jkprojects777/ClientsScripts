const swiperOptions={
  mousewheel:!1,
  autoHeight:!1,
  forceToAxis:!1,
  loop:!0,
  speed:1200,
  freeMode:!1,
  centeredSlides:!0,
  centeredSlidesBounds:!0,
  lazy:!1,
  keyboard:{enabled:!0},
  breakpoints:{
    0:{slidesPerView:1.2,spaceBetween:10},
    479:{slidesPerView:2,spaceBetween:20},
    820:{slidesPerView:2.7,spaceBetween:20},
    992:{slidesPerView:3.7,spaceBetween:20},
    1200:{slidesPerView:4,spaceBetween:20}
  }
};

[".cat1-cards",".cat2-cards",".cat3-cards",".cat4-cards",".cat5-cards",".cat6-cards",".cat7-cards"]
  .forEach(e=>{new Swiper(e,{
    ...swiperOptions,navigation:{
      nextEl:`#${e.replace(".","")}-right`,
      prevEl:`#${e.replace(".","")}-left`
    }
  })
});

const testiswiper=new Swiper(".cat8-cards",{
  ...swiperOptions,navigation:{
    nextEl:"#cat8-cards-right",
    prevEl:"#cat8-cards-left"
  },
  autoplay:{
    delay:3e3,
    pauseOnMouseEnter:!0
  }
});

const jobswiper=new Swiper(".cat9-cards",{
  ...swiperOptions,navigation:{
    nextEl:"#cat9-cards-right",
    prevEl:"#cat9-cards-left"
  },
  loop:!1
});


// Récupération des éléments de la collection "cat9-cards"
const cat9Cards = window.Webflow.collect(`items/${window.Webflow.siteId}/cat9-cards`);

// Vérification si la collection ne contient aucun élément
if (cat9Cards.length === 0) {
  // Récupération de l'élément .swiper-comp.jobs
  const jobsSwiperComp = document.querySelector(".swiper-comp.jobs");
  // Mise à jour du style de l'élément pour le cacher
  jobsSwiperComp.style.display = "none";
}