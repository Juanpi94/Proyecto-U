var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 50,
    //loop: false,
    //freeMode: true,
    //loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520:{
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        950:{
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1380:{
            slidesPerView: 4,
            slidesPerGroup: 3,
        },
    },
  });