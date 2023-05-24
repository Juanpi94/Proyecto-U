var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
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
        1280:{
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
    },
  });